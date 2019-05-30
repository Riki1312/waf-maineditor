import { Injectable } from '@angular/core';

import {
  WafMainService
  WafElement,
  WafNode,
  NodeData,
  WafStyle,
  StyleData,
  ElementsCode
} from './waf-main.service';

//

@Injectable()
export class WafNodesService {

  public SelectedTool: WafElement;

  //

  constructor(private MainService: WafMainService) { }

  //

  public SelectToolByCode(codeElement: number): void {
    this.SelectedTool = this.MainService.Elements_data.find(x => x.codeElement === codeElement);
  }

}

//

/*

  Nodes: WafNode[];

  constructor() { }

  AddNode(parent: WafNode, node: WafNode): void {
    
  }
  AddRootNode(node: WafNode): void {
    this.Nodes.push(node);
  }

  CreateNodeByElement(ecode: number): WafNode {
    return {
      id: 0,
      elementCode: 0,
      name: "",
      data: null,
      allowChildren: true
    };
  }

  FindNodeById(id: number): WafNode {
    let findNodes = (nodes: WafNode[], id: number): WafNode => {
      let nodeFound: WafNode;
      let findNode = (node: WafNode, id: number): void => {
        if (node.id === id)
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

  IsPanelSelected(index: number) {
    return (this.SelectedElement.panels.indexOf(index) !== -1)
  }

*/