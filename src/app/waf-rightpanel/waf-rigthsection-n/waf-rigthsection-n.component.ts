import { Component, OnInit } from '@angular/core';

import { StyleData } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';

//

@Component({
  selector: 'app-waf-rigthsection-n',
  templateUrl: './waf-rigthsection-n.component.html',
  styleUrls: ['./waf-rigthsection-n.component.css']
})
export class WafRigthsectionNComponent implements OnInit {

  customCssCode: string;

  constructor(private DataService: WafDataService) {
    this.LoadCustomCssCode();
  }

  ngOnInit() {
  }
  
  PropertyChange(): void {
    let cssRuleString: string[] = this.customCssCode.split(';');

    this.DataService.CleanCustomStyleRules(this.DataService.SelectedStyle.className);

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
        
        this.DataService.AddStyleRule(this.DataService.SelectedStyle.className, cssRule);
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

    this.customCssCode = this.DataService.FormatCssCode(this.customCssCode);
  }

}
