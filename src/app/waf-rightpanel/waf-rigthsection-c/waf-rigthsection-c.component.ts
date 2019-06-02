import { Component, OnInit } from '@angular/core';

import { WafMainService, DataEventsId } from '../../waf-services/waf-main.service';
import { WafDataService, WafEventsName } from '../../waf-services/waf-data.service';

//

interface PStyle {
  name: string;
  propertyCss: string;
  defaultValue: string;
  value?: string;
  domain?: string[];
}

const StyleProperty_data: PStyle[] = [
  {
    name: "Color",
    propertyCss: "color",
    defaultValue: "#000",
    value: "#000"
  },
  {
    name: "Align",
    propertyCss: "text-align",
    defaultValue: "left",
    value: "left",
    domain: [ "left", "right", "center", "justify" ]
  },
  {
    name: "Font family",
    propertyCss: "font-family",
    defaultValue: "Arial",
    value: "Arial"
  },
  {
    name: "Size",
    propertyCss: "font-size",
    defaultValue: "medium",
    value: "medium"
  },
  {
    name: "Decoration",
    propertyCss: "text-decoration",
    defaultValue: "none",
    value: "none",
    domain: [ "underline", "overline", "line-through" ]
  },
  {
    name: "Transform",
    propertyCss: "text-transform",
    value: "none",
    defaultValue: "none",
    domain: [ "capitalize", "uppercase", "lowercase" ]
  },
  {
    name: "Font weight",
    propertyCss: "font-weight",
    value: "normal",
    defaultValue: "normal",
    domain: [ "bold", "bolder", "lighter" ]
  },
  {
    name: "Style",
    propertyCss: "font-style",
    value: "normal",
    defaultValue: "normal",
    domain: [ "italic", "oblique" ]
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-c',
  templateUrl: './waf-rigthsection-c.component.html',
  styleUrls: ['./waf-rigthsection-c.component.css']
})
export class WafRigthsectionCComponent implements OnInit {

  properties: PStyle[] = StyleProperty_data;

  constructor(private MainService: WafMainService, private DataService: WafDataService) {
    this.DataService.AddEvent(WafEventsName.selectStyle, this.UpdatePropertyValue, DataEventsId.rigthsection_c, this.properties);
  }

  ngOnInit() {
  }

  //

  IsColorProperty(item: PStyle) {
    return (item.propertyCss === "background-color" || item.propertyCss === "color");
  }
  PropertyChange(item: PStyle) {
    this.DataService.EditStyleRule(this.DataService.SelectedStyle.className, item.propertyCss, item.value, true);
  }

  UpdatePropertyValue(that: any, data?: any) {
    data.forEach(x => {
      let value = that.GetValueByProperty(that.SelectedStyle.className, x.propertyCss);

      if (value) x.value = value;
      else x.value = x.defaultValue;
    });
  }

}
