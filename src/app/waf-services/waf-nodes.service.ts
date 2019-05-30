import { Injectable } from '@angular/core';

export interface WafNode {
  id: number;
  elementCode: number;
  name: string;
  data: NodeData;
  allowChildren: boolean;
  children?: WafNode[];
}

export interface NodeData {
  htmlTag: string;
  allowFinaltag: boolean;
  cssClassname?: string[];
  idName?: string;
}
//
export interface WafStyle {
  className: string;
  cssRules: StyleData[];
}

export interface StyleData {
  propertyCss: string,
  value: any;
}

//

@Injectable()
export class WafNodesService {

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

}

/*

let x: WafNode[] = [{
  id: 0,
  elementCode: 0,
  name: "",
  data: null,
  allowChildren: true,
  children: [
    {
      id: 1,
      elementCode: 0,
      name: "",
      data: null,
      allowChildren: true,
      children: [
        {
          id: 2,
          elementCode: 0,
          name: "",
          data: null,
          allowChildren: false,
        },
        {
          id: 2.5,
          elementCode: 0,
          name: "",
          data: null,
          allowChildren: false,
        }
      ]
    },
    {
      id: 3,
      elementCode: 0,
      name: "",
      data: null,
      allowChildren: true,
      children: [
        {
          id: 4,
          elementCode: 0,
          name: "",
          data: null,
          allowChildren: true,
          children: [
            {
              id: 5,
              elementCode: 0,
              name: "xx",
              data: null,
              allowChildren: false,
            },
            {
              id: 6,
              elementCode: 0,
              name: "xccc",
              data: null,
              allowChildren: false,
            }
          ]
        }
      ]
    }
  ]
},
{
  id: 7,
  elementCode: 0,
  name: "",
  data: null,
  allowChildren: false,
}]

*/
