import { Injectable } from '@angular/core';

import { WafStyle, StyleData, StyleVariable } from '../waf-main.service';
import { WafDataService } from '../waf-data.service';

//

@Injectable()
export class WafStyleService {

  constructor(private DataService: WafDataService) { }

  //

  public AddStyle(className: string, cssRules?: StyleData[]): boolean {
    if (this.GetStyleIndexByName(className) === -1) {
      let style: WafStyle = {
        className: className,
        cssRules: []
      };

      if (cssRules) style.cssRules = cssRules;
      
      this.DataService.Styles.push(style);
      return true;
    }
    else return false;
  }

  public DeleteStyle(className: string): boolean {
    let indexClass: number = this.GetStyleIndexByName(className);

    if (indexClass !== -1) {
      this.DataService.Styles.splice(indexClass, 1);
      return true;
    }
    else return false;
  }

  public GetStyleIndexByName(className: string): number {
    let index: number = -1;

    this.DataService.Styles.forEach((x, i) => {
      if (x.className === className) index = i;
    });

    return index;
  }

  public GetStyledataIndexByProperty(cssRules: StyleData[], cssProperty: string): number {
    let index: number = -1;

    cssRules.forEach((x, i) => {
      if (x.cssProperty === cssProperty) index = i;
    });

    return index;
  }

  public GetValueByProperty(className: string, cssProperty: string): string {
    let style: WafStyle = this.FindStyleByClass(className);

    for (let rule of style.cssRules)
      if (rule.cssProperty === cssProperty)
        return rule.cssValue;
    return undefined;
  }

  public AddStyleRules(className: string, cssRules: StyleData[]): boolean {
    let index: number = this.GetStyleIndexByName(className);

    if (index !== -1) {
      for (let rule of cssRules)
        this.AddStyleRule(className, rule);
      return true;
    }
    else return false;
  }

  public DeleteStyleRule(className: string, cssProperty: string): boolean {
    let indexClass: number = this.GetStyleIndexByName(className);
    let existsProperty: boolean = this.DataService.Styles[indexClass].cssRules.some(x => x.cssProperty === cssProperty);

    if (indexClass !== -1 && existsProperty) {
      let indexRule: number = this.GetStyledataIndexByProperty(this.DataService.Styles[indexClass].cssRules, cssProperty);
      this.DataService.Styles[indexClass].cssRules.splice(indexRule, 1);

      return true;
    }
    else return false;
  }

  public CleanCustomStyleRules(className: string): void {
    let style: WafStyle = this.FindStyleByClass(className);

    for (let rule of style.cssRules) {
      if (rule.customStyle) {
        this.DeleteStyleRule(className, rule.cssProperty);
      }
    }
  }

  public AddStyleRule(className: string, cssRule: StyleData): boolean {
    let index: number = this.GetStyleIndexByName(className);
    let nonExists: boolean = this.DataService.Styles[index].cssRules.every(x => x.cssProperty !== cssRule.cssProperty);

    if (index !== -1 && nonExists) {
      this.DataService.Styles[index].cssRules.push(cssRule);
      return true;
    }
    else return false;
  }

  public FindStyleByClass(className: string): WafStyle {
    return this.DataService.Styles.find(x => x.className === className);
  }

  public EditStyleRule(className: string, cssProperty: string, newValue: string, make?: boolean): boolean {
    let style: WafStyle = this.FindStyleByClass(className);
    let ruleIndex: number = -1;

    style.cssRules.forEach((x, i) => {
      if (x.cssProperty === cssProperty) ruleIndex = i;
    });

    if (ruleIndex !== -1) {
      style.cssRules[ruleIndex].cssValue = newValue;
      return true;
    }
    else if (make) {
      this.AddStyleRule(className, { cssProperty: cssProperty, cssValue: newValue });
      return true;
    }
    else return false;
  }

  //StyleVariables

  public AddStyleVariable(variableName: string, variableValue: string): boolean {
    let nonExists: boolean = this.DataService.StyleVariables.every(x => x.variableName !== variableName);

    if (nonExists) {
      this.DataService.StyleVariables.push({ variableName: variableName, variableValue: variableValue });
      return true;
    }
    else return false;
  }

  public DeleteStyleVariable(variableName: string): boolean {
    let styleVariabile: StyleVariable = this.DataService.StyleVariables.find(x => x.variableName === variableName);

    if (styleVariabile) {
      let index = this.DataService.StyleVariables.indexOf(styleVariabile);
      this.DataService.StyleVariables.splice(index, 1);

      return true;
    }
    else return false;
  }

  public EditStyleVariable(variableName: string, variableValue: string, variableNewName?: string, make?: boolean): boolean {
    for (let styleVariable of this.DataService.StyleVariables) {
      if (styleVariable.variableName === variableName) {
        styleVariable.variableValue = variableValue;
        if (variableNewName) styleVariable.variableName = variableNewName;

        return true;
      }
    }

    if (make) {
      this.AddStyleVariable(variableName, variableValue);
      return true;
    }
    else return false;
  }

}
