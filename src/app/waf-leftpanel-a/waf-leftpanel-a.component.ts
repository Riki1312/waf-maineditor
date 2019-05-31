import { Component, OnInit } from '@angular/core';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { WafMainService, WafNode, ElementsCode } from '../waf-services/waf-main.service';
import { WafDataService } from '../waf-services/waf-data.service';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

  constructor(private MainService: WafMainService, private DataService: WafDataService) {
    let treeData: TNode[] = [];

    if (this.DataService.Nodes.length > 0)
      treeData = this.CeneratesTreeFromNodes(this.DataService.Nodes);

    this.dataSource.data = treeData;

    //
    console.log(treeData);
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  public CeneratesTreeFromNodes(nodes: WafNode[]): TNode[] {
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
