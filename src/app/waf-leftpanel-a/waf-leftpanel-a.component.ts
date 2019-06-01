import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';

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

  //Action
  actionMode: boolean = false;
  actionData: any = null;
  actionSelected: undefined | "move" = undefined;
  actionFunctions: any = {
    ["move"]: (node: WafNode, data: "in" | "up" | "down"): void => {
      let subject: WafNode = this.DataService.SelectedNode;
      let receiver: WafNode = node;
      let result: boolean = false;

      if (subject.idNode !== receiver.idNode) {
        switch (data) {
          case "in":
            result = this.DataService.MoveinNodeById(subject.idNode, receiver.idNode);
            break;
        }
      }

      if (!result) {
        this.snackBar.open(`Invalid action`, "Ok", {
          duration: 3000,
          panelClass: ["snackBarStyle"]
        });
      }
    }
  }

  //

  get treeData(): TNode[] {
    if (this.DataService.Nodes.length > 0)
      return this.CeneratesTreeFromNodes(this.DataService.Nodes);
    else
      return [];
  }

  get selectedNode(): TNode {
    if (this.DataService.SelectedNode)
      return this.FindTnodeById(this.treeData, this.DataService.SelectedNode.idNode);
    else
      return undefined;
  }
  set selectedNode(value: TNode) {
    this.DataService.SelectNodeById(value.idNode);
  }

  //

  constructor(private snackBar: MatSnackBar, private MainService: WafMainService, private DataService: WafDataService) {
    this.dataSource.data = this.treeData;
  }

  ngOnInit() {
  }

  //

  NodeLeftClick(tnode: TNode) {
    this.SelectNode(tnode);
  }

  NodeRightClick(tnode: TNode) {
    this.SelectNode(tnode);
  }

  DeleteNode() {
    this.DataService.DeleteNodeById(this.selectedNode.idNode);
    this.RebuildTree();
  }

  MoveNode(info: "in" | "up" | "down") {
    this.actionMode = true;
    this.actionSelected = "move";
    this.actionData = info;

    this.snackBar.open(`Select a second node to move ${ info }`, "Ok", {
      duration: 2000,
      panelClass: ["snackBarStyle"]
    });
  }

  IsSelectedNode(node: TNode) {
    if (this.selectedNode && node.idNode === this.selectedNode.idNode)
      return "primary";
    else return "";
  }

  SelectNode(node: TNode) {
    if (!this.actionMode) {
      this.selectedNode = node;
    }
    else {
      this.actionFunctions[this.actionSelected](node, this.actionData);
      this.EndAction();
    }
  }

  RebuildTree() {
    this.dataSource.data = this.treeData;
  }

  //

  private EndAction() {
    this.actionMode = false;
    this.actionSelected = undefined;
    this.actionData = null;
  }

  private CeneratesTreeFromNodes(nodes: WafNode[]): TNode[] {
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

  private FindTnodeById(tnodes: TNode[], id: number): TNode {
    let findNodes = (tnodes: TNode[], id: number): TNode => {
      let nodeFound: TNode;
      let findNode = (tnode: TNode, id: number): void => {
        if (tnode.idNode === id)
          nodeFound = tnode;
        else if (tnode.children && tnode.children.length > 0)
          tnode.children.forEach(x => findNode(x, id));
      }

      tnodes.forEach(x => findNode(x, id));
      return nodeFound;
    }

    return findNodes(tnodes, id);
  }

}
