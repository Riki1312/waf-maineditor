import { Component, OnInit } from '@angular/core';

import { WafMainService, StyleData } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';
import { WafFunctionService } from '../../waf-services/waf-function.service';

import { WafStyleClass } from '../../waf-services/waf-style/waf-style-class';
import { WafCodeClass } from '../../waf-services/waf-code/waf-code-class';

//

@Component({
  selector: 'app-waf-rigthsection-n',
  templateUrl: './waf-rigthsection-n.component.html',
  styleUrls: ['./waf-rigthsection-n.component.css']
})
export class WafRigthsectionNComponent implements OnInit {

  customCssCode: string;

  private _StyleClass: WafStyleClass;
  private _CodeClass: WafCodeClass;

  constructor(private MainService: WafMainService, private DataService: WafDataService, private FunctionService: WafFunctionService) {
    this._StyleClass = new WafStyleClass(this.DataService, this.FunctionService);
    this._CodeClass = new WafCodeClass(this.MainService, this.DataService);

    this.LoadCustomCssCode();
  }

  ngOnInit() {
  }
  
  PropertyChange(): void {
    let cssRuleString: string[] = this.customCssCode.split(';');

    this._StyleClass.CleanCustomStyleRules(this.DataService.SelectedStyle.className);

    for (let ruleString of cssRuleString) {
      if (ruleString && ruleString.trim() !== "" && ruleString.includes(':')) {
        let cssProperty: string = ruleString.split(':')[0];
        let cssValue: string = ruleString.split(':')[1];

        if (cssValue.substring(0, 1) === " ") cssValue = cssValue.substring(1);

        let cssRule: StyleData = {
          cssProperty: cssProperty,
          cssValue: cssValue,
          customStyle: true
        }
        
        this._StyleClass.AddStyleRule(this.DataService.SelectedStyle.className, cssRule);
      }
    }
  }

  private LoadCustomCssCode(): void {
    this.customCssCode = "";

    for (let rule of this.DataService.SelectedStyle.cssRules) {
      if (rule.customStyle) {
        this.customCssCode += `${ rule.cssProperty }: ${ rule.cssValue };`;
      }
    }

    this.customCssCode = this._CodeClass.FormatCssCode(this.customCssCode);
  }

}
