import { Component, OnInit } from '@angular/core';

import { WafMainService, WafNode, ElementsCode } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';

//

interface PEdit {
  name: string;
  value?: string;
  domain?: string[];
}

const TextContentProperty_data: PEdit[] = [
  {
    name: "Node text content",
    get value() {
      return "ciao";
    },
    set value(value: string) {
      console.log(value);
    }
  }
];

//

@Component({
  selector: 'app-waf-node-options',
  templateUrl: './waf-node-options.component.html',
  styleUrls: ['./waf-node-options.component.css']
})
export class WafNodeOptionsComponent implements OnInit {

  textContentProperty: PEdit[] = TextContentProperty_data;
  get allowTextContent(): boolean {
    return false;
  }

  constructor(private MainService: WafMainService, private DataService: WafDataService) { }

  ngOnInit() {
  }

}
