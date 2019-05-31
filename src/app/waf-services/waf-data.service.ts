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

  public GetElementByCode(codeElement: number): WafElement {
    return this.MainService.Elements_data.find(x => x.codeElement === codeElement);
  } 

  public AddRootNode(node: WafNode, autoSelect?: boolean): void {
    this.Nodes.push(node);
    if (autoSelect) this.SelectedNode = node;
  }
  public AddNode(parent: WafNode, node: WafNode): void {
    let n = this.FindNodeById(parent.idNode);
    if (n.allowChildren)
      node[property] = value;
  }

  public EditNodeById(id: number, property: string, value: any): void {
    let node = this.FindNodeById(id);
    if (node)
      node[property] = value;
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
