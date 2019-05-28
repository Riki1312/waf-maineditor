import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { WafMainService } from '../waf-services/waf-main.service';

//

interface TNode {
  name: string;
  img?: string;
  tooltip?: string;
  children?: TNode[];
}

const ToolsTree_data: TNode[] = [
  {
    name: 'Layout',
    children: [
      { name: 'Frame', img: "assets/Icons/Light/tools_frame.svg" }
    ]
  },
  {
    name: 'Elements',
    children: [
      { name: 'Div', img: "assets/Icons/Light/tools_div.svg", tooltip: "Shift + D" },
      { name: 'Title', img: "assets/Icons/Light/tools_title.svg", tooltip: "Shift + T" },
      { name: 'Paragraph', img: "assets/Icons/Light/tools_paragraph.svg", tooltip: "Shift + P" },
      { name: 'Image', img: "assets/Icons/Light/tools_img.svg", tooltip: "Shift + I" }
    ]
  },
  {
    name: 'Advanced',
    children: [
      { name: 'Graphic', img: "assets/Icons/Light/tools_graphic.svg" },
      { name: 'Custom code', img: "assets/Icons/Light/tools_code.svg" }
    ]
  }
];

//

@Component({
  selector: 'app-waf-leftpanel',
  templateUrl: './waf-leftpanel.component.html',
  styleUrls: ['./waf-leftpanel.component.css']
})
export class WafLeftpanelComponent {

  //TNode
  treeControl = new NestedTreeControl<TNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TNode>();
  hasChild = (_: number, node: TNode) => !!node.children && node.children.length > 0;

  //
  selectedNode: TNode;

  constructor(private snackBar: MatSnackBar, private MainService: WafMainService) {
    this.dataSource.data = ToolsTree_data;
  }

  IsSelectedNode(node: TNode) {
    if (this.selectedNode && this.selectedNode.name === node.name)
      return "primary";
    else return "";
  }

  SelectNode(node: TNode) {
    if (!this.selectedNode || this.selectedNode.name !== node.name)
    {
      this.selectedNode = node;
      this.MainService.SelectElementByName(this.selectedNode.name);

      this.snackBar.open("Click where you want to create the " + this.selectedNode.name, "Ok", {
        duration: 2000,
        panelClass: ["snackBarStyle"]
      });
    }
    else {
      this.selectedNode = null;
      this.MainService.SelectElementByCode(-1);
    }
  }

}
