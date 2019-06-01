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

  //

  constructor(private MainService: WafMainService) {
    this.Nodes = [];
  }

  //

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

    if (receiverNode.allowChildren && subjectId !== receiverId) {
      let subjectParent: WafNode | "root" = this.FindParentNodeById(subjectId);

      if (subjectParent === "root" || subjectParent.idNode !== receiverId) {
        this.DeleteNodeById(subjectId);
        receiverNode.children.push(subjectNode);
      }
      else if (subjectParent.idNode === receiverId) {
        this.DeleteNodeById(subjectId);
        this.Nodes.push(subjectNode);
      }

      // !!! Non posso muovere un parent dentro un suo figlio !!!!

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

}
