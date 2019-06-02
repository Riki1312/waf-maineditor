import { Component, OnInit } from '@angular/core';

import { WafMainService, WafNode, ElementsCode } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';

//

interface PEdit {
  name: string;
  value: string;
  allowForElements?: number[];
  domain?: string[];
}

let that: any;

//

@Component({
  selector: 'app-waf-node-options',
  templateUrl: './waf-node-options.component.html',
  styleUrls: ['./waf-node-options.component.css']
})
export class WafNodeOptionsComponent implements OnInit {

  textContentProperty: PEdit[] = [
    {
      name: "Node text content",
      get value() {
        if (that.DataService.SelectedNode.data.htmlContent)
          return that.DataService.SelectedNode.data.htmlContent;
        else
          return "";
      },
      set value(value: string) {
        that.DataService.SelectedNode.data.htmlContent = value;
        console.log(that.DataService.Nodes);
      }
    }
  ];
  get allowTextContent(): boolean {
    let allowForElements: number[] = [ ElementsCode.title, ElementsCode.paragraph ];
    return allowForElements.indexOf(this.DataService.SelectedNode.codeElement) !== -1;
  }

  get nodeName(): string {
    return this.DataService.SelectedNode.name;
  }
  set nodeName(value: string) {
    this.DataService.SelectedNode.name = value;
  }

  //

  constructor(private MainService: WafMainService, private DataService: WafDataService) {
    that = this;
  }

  ngOnInit() {
  }

}
