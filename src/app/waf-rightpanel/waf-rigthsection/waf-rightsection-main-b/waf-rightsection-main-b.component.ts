import { Component, OnInit } from '@angular/core';

import { StyleVariable } from '../../../waf-services/waf-main.service';
import { WafDataService } from '../../../waf-services/waf-data.service';

//

@Component({
  selector: 'app-waf-rightsection-main-b',
  templateUrl: './waf-rightsection-main-b.component.html',
  styleUrls: ['./waf-rightsection-main-b.component.css']
})
export class WafRightsectionMainBComponent implements OnInit {

  get styleVariables(): StyleVariable[] {
    return this.DataService.StyleVariables;
  }

  constructor(private DataService: WafDataService) { }

  ngOnInit() {
  }

  AddVariable() {
    this.DataService.AddStyleVariable("", "");
  }

  StyleVariableChange(data: "variableName" | "variableValue", styleVariable: StyleVariable, event: any) {
    let newValue: string = event.target.value

    if (data === "variableName") newValue = styleVariable.variableValue;

    this.DataService.EditStyleVariable(styleVariable.variableName, newValue);

    console.log(this.DataService.StyleVariables);
  }

}
