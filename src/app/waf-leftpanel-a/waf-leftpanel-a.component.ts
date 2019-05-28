import { Component, OnInit } from '@angular/core';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

//

interface TNode {
  name: string;
  img?: string;
  children?: TNode[];
}

const ToolsTree_data: TNode[] = [
  {
    name: 'Frame',
    img: "assets/Icons/Light/tools_frame.svg",
    children: [
      { name: 'Div', img: "assets/Icons/Light/tools_div.svg" }
    ]
  },
  {
    name: 'Frame1',
    img: "assets/Icons/Light/tools_frame.svg",
    children: [
      {
        name: 'Div1',
        img: "assets/Icons/Light/tools_div.svg"
      },
      {
        name: 'Title',
        img: "assets/Icons/Light/tools_title.svg"
      },
      {
        name: 'Div2',
        img: "assets/Icons/Light/tools_div.svg",
        children: [
          { name: 'Paragraph', img: "assets/Icons/Light/tools_paragraph.svg" },
          { name: 'Paragraph1', img: "assets/Icons/Light/tools_paragraph.svg" },
          { name: 'Paragraph2', img: "assets/Icons/Light/tools_paragraph.svg" }
        ]
      },
    ]
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

  constructor() {
    this.dataSource.data = ToolsTree_data;
  }

  ngOnInit() {
  }

}