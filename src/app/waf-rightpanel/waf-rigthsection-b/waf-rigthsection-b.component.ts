import { Component, OnInit } from '@angular/core';

import { WafMainService, ElementsCode } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';
import { WafFunctionService } from '../../waf-services/waf-function.service';

import { WafStyleClass } from '../../waf-services/waf-style/waf-style-class';

import { PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "X",
    propertyCss: "left",
    defaultValue: "0px",
    value: "0px"
  },
  {
    name: "Y",
    propertyCss: "top",
    defaultValue: "0px",
    value: "0px",
  },
  {
    name: "Width",
    propertyCss: "width",
    defaultValue: "500px",
    value: "500px"
  },
  {
    name: "Height",
    propertyCss: "height",
    defaultValue: "500px",
    value: "500px"
  },
  {
    name: "Color",
    propertyCss: "background-color",
    defaultValue: "#fffa",
    value: "#fffa"
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-b',
  templateUrl: './waf-rigthsection-b.component.html',
  styleUrls: ['./waf-rigthsection-b.component.css']
})
export class WafRigthsectionBComponent implements OnInit {

  panelTitle = "Frame";
  styleProperty = StyleProperty_data;

  private _StyleClass: WafStyleClass;

  constructor(private MainService: WafMainService, private DataService: WafDataService, private FunctionService: WafFunctionService) {
    this._StyleClass = new WafStyleClass(this.DataService);
  }

  ngOnInit() {
  }

  //

  FramePropertiesGetter(): PStyle[] {
    return StyleProperty_data.map(x => {
      let style = this._StyleClass.FindStyleByClass(this.MainService.WafBasicClassName[ElementsCode.frame]);

      for (let rule of style.cssRules)
        if (rule.cssProperty === x.propertyCss) x.value = rule.cssValue;
      
      return x;
    });
  }

  FramePropertyChange(cssProperty: string, event: any) {
    let newValue = event.target.value;
    this._StyleClass.EditStyleRule(this.MainService.WafBasicClassName[ElementsCode.frame], cssProperty, newValue, true);
  }

  FramePropertyKeydown(item: PStyle, event: any): void {
  }

}
