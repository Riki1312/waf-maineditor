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
  public SelectedNode: WafNode;
  public Nodes: WafNode[];

  //

  constructor(private MainService: WafMainService) { }

  //

  public SelectToolByCode(codeElement: number): void {
    this.SelectedTool = this.MainService.Elements_data.find(x => x.codeElement === codeElement);
  }

  public AddRootNode(node: WafNode): void {
    this.Nodes.push(node);
  }
  public AddNode(parent: WafNode, node: WafNode): void {
    
  }

  private FindNodeById(id: number): WafNode {
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

}

/*
  IsPanelSelected(index: number) {
    return (this.SelectedElement.panels.indexOf(index) !== -1)
  }
*/
