import { Component, OnInit, ViewChild } from '@angular/core';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatMenuTrigger } from '@angular/material';

import { WafMainService, WafNode, ElementsCode } from '../waf-services/waf-main.service';
import { WafDataService } from '../waf-services/waf-data.service';

//

interface TNode {
  idNode: number;
  displayName: string;
  img?: string;
  children?: TNode[];
}

interface TData {
  codeElement: number;
  imgPath: string;
}

//

const Tree_data: TData[] = [
  {
    codeElement: ElementsCode.frame,
    imgPath: "assets/Icons/Light/tools_frame.svg"
  },
  {
    codeElement: ElementsCode.div,
    imgPath: "assets/Icons/Light/tools_div.svg"
  },
  {
    codeElement: ElementsCode.title,
    imgPath: "assets/Icons/Light/tools_title.svg"
  },
  {
    codeElement: ElementsCode.paragraph,
    imgPath: "assets/Icons/Light/tools_paragraph.svg"
  },
  {
    codeElement: ElementsCode.image,
    imgPath: "assets/Icons/Light/tools_image.svg"
  },
  {
    codeElement: ElementsCode.graphic,
    imgPath: "assets/Icons/Light/tools_graphic.svg"
  },
  {
    codeElement: ElementsCode.customCode,
    imgPath: "assets/Icons/Light/tools_code.svg"
  }
];

//

@Component({
  selector: 'app-waf-leftpanel-a',
  templateUrl: './waf-leftpanel-a.component.html',
  styleUrls: ['./waf-leftpanel-a.component.css']
})
export class WafLeftpanelAComponent implements OnInit {

  //TNode
  treeControl = new NestedTreeControl<TNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TNode>();
  hasChild = (_: number, node: TNode) => !!node.children && node.children.length > 0;

  get treeData(): TNode[] {
    if (this.DataService.Nodes.length > 0)
      return this.CeneratesTreeFromNodes(this.DataService.Nodes);
    else
      return [];
  }

  get selectedNode(): TNode {
    if (this.treeData.length > 0 && this.DataService.SelectedNode)
      return this.treeData.find(x => x.idNode === this.DataService.SelectedNode.idNode);
    else
      return undefined;
  }
  set selectedNode(value: TNode) {
    this.DataService.SelectNodeById(value.idNode);
  }

  //

  constructor(private MainService: WafMainService, private DataService: WafDataService) {
    this.dataSource.data = this.treeData;
  }

  ngOnInit() {
  }

  //

  NodeRightClick(tnode: TNode) {
    this.SelectNode(tnode);
  }

  IsSelectedNode(node: TNode) {
    console.log(node.idNode);

    if (this.selectedNode && node.idNode === this.selectedNode.idNode)
      return "primary";
    else return "";
  }

  SelectNode(node: TNode) {
    this.selectedNode = node;
  }

  RebuildTree() {
    this.dataSource.data = this.treeData;
  }

  CeneratesTreeFromNodes(nodes: WafNode[]): TNode[] {
    let tree: TNode[] = [];

    let NodesToTnodes = (nodes: WafNode[], tnodeArray: TNode[]) => {
      for (let node of nodes) {
        let tnode: TNode = {
          idNode: undefined,
          displayName: undefined
        };
        
        tnode.idNode = node.idNode;
        tnode.displayName = node.name;
        tnode.img = Tree_data.find(x => x.codeElement === node.codeElement).imgPath;

        if (node.allowChildren && node.children.length > 0) {
          tnode.children = [];
          NodesToTnodes(node.children, tnode.children);
        }

        tnodeArray.push(tnode);
      }
    };

    NodesToTnodes(this.DataService.Nodes, tree);
    return tree;
  }

}
