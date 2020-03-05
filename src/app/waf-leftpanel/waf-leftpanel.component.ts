import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { WafMainService, ElementsCode } from '../waf-services/waf-main.service';
import { WafDataService } from '../waf-services/waf-data.service';
import { WafFunctionService } from '../waf-services/waf-function.service';

//

interface TNode {
  name: string;
  codeElement?: number;
  img?: string;
  tooltip?: string;
  children?: TNode[];
}

const ToolsTree_data: TNode[] = [
  {
    name: 'Layout',
    children: [
      { name: 'Frame', codeElement: ElementsCode.frame, img: "assets/Icons/Light/tools_frame.svg" }
    ]
  },
  {
    name: 'Elements',
    children: [
      { name: 'Div', codeElement: ElementsCode.div, img: "assets/Icons/Light/tools_div.svg", tooltip: "Shift + D" },
      { name: 'Title', codeElement: ElementsCode.title, img: "assets/Icons/Light/tools_title.svg", tooltip: "Shift + T" },
      { name: 'Paragraph', codeElement: ElementsCode.paragraph, img: "assets/Icons/Light/tools_paragraph.svg", tooltip: "Shift + P" },
      { name: 'Image', codeElement: ElementsCode.image, img: "assets/Icons/Light/tools_img.svg", tooltip: "Shift + I" }
    ]
  },
  {
    name: 'Advanced',
    children: [
      { name: 'Graphic', codeElement: ElementsCode.graphic, img: "assets/Icons/Light/tools_graphic.svg" },
      { name: 'Custom code', codeElement: ElementsCode.customCode, img: "assets/Icons/Light/tools_code.svg" }
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

  //Selected tool
  get selectedNode(): TNode {
    if (this.DataService.SelectedTool)
      return {
        name: this.DataService.SelectedTool.name,
        codeElement: this.DataService.SelectedTool.codeElement
      }
    else return undefined;
  }
  set selectedNode(node: TNode) {
    if (node)
      this.FunctionService.SelectToolByCode(node.codeElement);
    else
      this.FunctionService.SelectToolByCode(ElementsCode.none);
  }

  //

  constructor(private snackBar: MatSnackBar, private DataService: WafDataService, private FunctionService: WafFunctionService) {
    this.dataSource.data = ToolsTree_data;
  }

  IsSelectedTool(node: TNode) {
    if (this.selectedNode && node.codeElement === this.selectedNode.codeElement)
      return "primary";
    else return "";
  }

  SelectTool(node: TNode) {
    if (
      !this.selectedNode ||
      this.selectedNode.codeElement === ElementsCode.none ||
      this.selectedNode.codeElement !== node.codeElement
    ) {
      this.selectedNode = node;
      this.snackBar.open("Click where you want to create the " + node.name, "Ok", {
        duration: 2000,
        panelClass: ["snackBarStyle"]
      });
    }
    else {
      this.selectedNode = null;
    }
  }

}
