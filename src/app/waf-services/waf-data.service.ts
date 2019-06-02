import { Injectable } from '@angular/core';

import {
  WafMainService,
  WafElement,
  WafNode,
  NodeData,
  WafStyle,
  StyleData,
  ElementsCode
} from './waf-main.service';

//

@Injectable()
export class WafDataService {

  public SelectedTool: WafElement;
  public SelectedNode: WafNode;

  public Nodes: WafNode[];
  public Styles: WafStyle[];

  //

  constructor(private MainService: WafMainService) {
    this.Nodes = [];
    this.Styles = [];
  }

  //Nodes

  public SelectToolByCode(codeElement: number): void {
    this.SelectedTool = this.MainService.Elements_data.find(x => x.codeElement === codeElement);
  }

  public SelectNodeById(idNode: number): void {
    this.SelectedNode = this.FindNodeById(idNode);
  }

  public GetElementByCode(codeElement: number): WafElement {
    return this.MainService.Elements_data.find(x => x.codeElement === codeElement);
  }

  public AddRootNode(node: WafNode, autoSelect?: boolean): void {
    this.Nodes.push(node);
    if (autoSelect) this.SelectedNode = node;
  }

  public AddNode(parentId: number, node: WafNode): boolean {
    let parent = this.FindNodeById(parentId);
    if (parent.allowChildren) {
      parent.children.push(node);
      return true;
    }
    else return false;
  }

  public DeleteNodeById(id: number): void {
    let parent: WafNode | "root" = this.FindParentNodeById(id);
    let element: WafNode = this.FindNodeById(id);
    let index: number;

    if (parent !== "root") {
      index = parent.children.indexOf(element);
      parent.children.splice(index, 1);
    }
    else {
      index = this.Nodes.indexOf(element);
      this.Nodes.splice(index, 1);
    }
  }

  public MoveinNodeById(subjectId: number, receiverId: number): boolean {
    let subjectNode: WafNode = this.FindNodeById(subjectId);
    let receiverNode: WafNode = this.FindNodeById(receiverId);
    let subjectParent: WafNode | "root" = this.FindParentNodeById(subjectId);
    let receiverParent: WafNode | "root" = this.FindParentNodeById(receiverId);

    //Allow children
    let case0: boolean = receiverNode.allowChildren;
    //Himself
    let case1: boolean = subjectId !== receiverId;
    //Inside his son
    let case2: boolean = true;
    //Inside his parent --> special: move in root
    let case3: boolean = true;

    if (receiverParent !== "root")
      case2 = receiverParent.idNode !== subjectId;

    if (subjectParent !== "root" )
      case3 = subjectParent.idNode !== receiverId; //

    if (case0 && case1 && case2) {
      this.DeleteNodeById(subjectId);
      
      if (case3)
        receiverNode.children.push(subjectNode);
      else
        this.Nodes.push(subjectNode);

      return true;
    }
    else return false;
  }

  public MovenearNodeById(subjectId: number, receiverId: number, indexOffset: number): boolean {
    let subjectNode: WafNode = this.FindNodeById(subjectId);
    let receiverNode: WafNode = this.FindNodeById(receiverId);
    let receiverParent: WafNode | "root" = this.FindParentNodeById(receiverId);

    //Parent receiver allow children
    let case0: boolean = true;
    //Himself
    let case1: boolean = subjectId !== receiverId;
    //Up his son
    let case2: boolean = true;

    if (receiverParent !== "root") {
      case0 = receiverParent.allowChildren;
      case2 = receiverParent.idNode !== subjectId;
    }

    if (case0 && case1 && case2) {
      let receiverIndex: number;
      
      this.DeleteNodeById(subjectId);
      
      if (receiverParent !== "root") {
        receiverIndex = receiverParent.children.indexOf(receiverNode) + indexOffset;
        receiverParent.children.splice(receiverIndex, 0, subjectNode);
      }
      else {
        receiverIndex = this.Nodes.indexOf(receiverNode) + indexOffset;
        this.Nodes.splice(receiverIndex, 0, subjectNode);
      }

      return true;
    }
    else return false;
  }

  public EditNodeById(id: number, property: string, value: any): boolean {
    let node = this.FindNodeById(id);
    if (node) {
      node[property] = value;
      return true;
    }
    else return false;
  }

  public FindParentNodeById(id: number): WafNode | "root" {
    let parentNode: WafNode | "root";
    let cycle = (nodes: WafNode[], parent: WafNode | "root") => {
      for (let node of nodes) {
        if (node.idNode === id) {
          parentNode = parent;
        }
        else if (node.allowChildren && node.children.length > 0) {
          cycle(node.children, node);
        }
      }
    }

    cycle(this.Nodes, "root");
    return parentNode;
  }

  public DeepCycleOnNodes(nodes: WafNode[], fun: (WafNode) => void): void {
    let cycle = (nodes: WafNode[], fun: (WafNode) => void) => {
      for (let node of nodes) {
        if (node.allowChildren && node.children.length > 0) {
          cycle(node.children, fun);
        }
        else {
          fun(node);
        }
      }
    }

    cycle(nodes, fun);
  }

  public FindNodeById(id: number): WafNode {
    let findNodes = (nodes: WafNode[], id: number): WafNode => {
      let nodeFound: WafNode;
      let findNode = (node: WafNode, id: number): void => {
        if (node.idNode === id)
          nodeFound = node;
        else if (node.allowChildren)
          node.children.forEach(x => findNode(x, id));
      }

      nodes.forEach(x => findNode(x, id));
      return nodeFound;
    }

    if (this.Nodes)
      return findNodes(this.Nodes, id);
    else
      return undefined;
  }

  //Styles

  /*
  export interface WafStyle {
    className: string;
    cssRules: StyleData[];
  }
  export interface StyleData {
    cssProperty: string,
    cssValue: any;
  }
  */

  public AddStyle(className: string, cssRules?: StyleData[]): boolean {
    if (this.GetStyleIndexByName(className) === -1) {
      let style: WafStyle = {
        className: className,
        cssRules: []
      };

      if (cssRules) style.cssRules = cssRules;
      
      this.Styles.push(style);
      return true;
    }
    else return false;
  }

  public GetStyleIndexByName(className: string): number {
    let index: number = -1;

    this.Styles.forEach((x, i) => {
      if (x.className === className) index = i;
    });

    return index;
  }

  public AddStyleRules(className: string, cssRules: StyleData[]): boolean {
    let index: number = this.GetStyleIndexByName(className);

    if (index !== -1) {
      for (let rule of cssRules)
        this.AddStyleRule(className, rule);
      return true;
    }
    else return false;
  }

  public AddStyleRule(className: string, cssRule: StyleData): boolean {
    let index: number = this.GetStyleIndexByName(className);
    let nonExists: boolean = this.Styles[index].cssRules.every(x => x.cssProperty !== cssRule.cssProperty);

    if (index !== -1 && nonExists) {
      this.Styles[index].cssRules.push(cssRule);
      return true;
    }
    else return false;
  }

  public FindStyleByClass(className: string): WafStyle {
    return this.Styles.find(x => x.className === className);
  }

  public EditStyleRule(className: string, cssProperty: string, newValue: string, make?: boolean): boolean {
    let style: WafStyle = this.FindStyleByClass(className);
    let ruleIndex: number = -1;

    style.cssRules.forEach((x, i) => {
      if (x.cssProperty === cssProperty) ruleIndex = i;
    });

    if (ruleIndex !== -1) {
      style.cssRules[ruleIndex].cssValue = newValue;
      return true;
    }
    else if (make) {
      this.AddStyleRule(className, { cssProperty: cssProperty, cssValue: newValue });
      return true;
    }
    else return false;
  }

}
