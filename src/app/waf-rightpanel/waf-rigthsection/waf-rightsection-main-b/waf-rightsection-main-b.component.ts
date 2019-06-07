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

  DeleteVariable(styleVariable: StyleVariable) {
    this.DataService.DeleteStyleVariable(styleVariable.variableName);
    console.log(this.DataService.StyleVariables);
  }

  StyleVariableChange(data: "variableName" | "variableValue", styleVariable: StyleVariable, event: any) {
    let newValue: string = event.target.value;

    if (data === "variableName") {
      this.DataService.EditStyleVariable(styleVariable.variableName, styleVariable.variableValue, newValue);
    }
    else if (data === "variableValue") {
      this.DataService.EditStyleVariable(styleVariable.variableName, newValue);
    }
  }

}
