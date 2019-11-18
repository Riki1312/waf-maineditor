import { Component, OnInit } from '@angular/core';

import { StyleVariable } from '../../../waf-services/waf-main.service';
import { WafDataService } from '../../../waf-services/waf-data.service';
import { WafFunctionService } from '../../../waf-services/waf-function.service';

import { WafStyleClass } from '../../../waf-services/waf-style/waf-style-class';

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

  get customCssCode(): string {
    return this.DataService.CustomGolobalCode;
  }
  set customCssCode(value: string) {
    this.DataService.CustomGolobalCode = value;
  }

  private _StyleClass: WafStyleClass;

  constructor(private DataService: WafDataService, private FunctionService: WafFunctionService) {
    this._StyleClass = new WafStyleClass(this.DataService);
  }

  ngOnInit() {
  }

  AddVariable() {
    this._StyleClass.AddStyleVariable("", "");
  }

  DeleteVariable(styleVariable: StyleVariable) {
    this._StyleClass.DeleteStyleVariable(styleVariable.variableName);
  }

  StyleVariableChange(data: "variableName" | "variableValue", styleVariable: StyleVariable, event: any) {
    let newValue: string = event.target.value;

    if (data === "variableName") {
      this._StyleClass.EditStyleVariable(styleVariable.variableName, styleVariable.variableValue, newValue);
    }
    else if (data === "variableValue") {
      this._StyleClass.EditStyleVariable(styleVariable.variableName, newValue);
    }
  }

}
