import { Component, OnInit } from '@angular/core';

import { WafMainService, ElementsCode } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';

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

  private panelTitle = "Frame";
  private styleProperty = StyleProperty_data;

  constructor(private MainService: WafMainService, private DataService: WafDataService) { }

  ngOnInit() {
  }

  //

  FramePropertiesGetter(): PStyle[] {
    return StyleProperty_data.map(x => {
      let style = this.DataService.FindStyleByClass(this.MainService.WafBasicClassName[ElementsCode.frame]);

      for (let rule of style.cssRules)
        if (rule.cssProperty === x.propertyCss) x.value = rule.cssValue;
      
      return x;
    });
  }

  FramePropertyChange(cssProperty: string, event: any) {
    let newValue = event.target.value;
    this.DataService.EditStyleRule(this.MainService.WafBasicClassName[ElementsCode.frame], cssProperty, newValue, true);
  }

  FramePropertyKeydown(item: PStyle, event: any): void {
  }

}
