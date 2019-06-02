import { Component, OnInit } from '@angular/core';

import { WafMainService } from '../../waf-services/waf-main.service';
import { WafDataService, WafEventsName } from '../../waf-services/waf-data.service';

//

interface PStyle {
  name: string;
  propertyCss: string;
  defaultValue: string;
  value?: string;
}

const StyleProperty_data: PStyle[] = [
  {
    name: "Color",
    propertyCss: "background-color",
    defaultValue: "#000",
    value: "#000"
  },
  {
    name: "Opacity",
    propertyCss: "opacity",
    defaultValue: "1",
    value: "1"
  }
];

@Component({
  selector: 'app-waf-rigthsection-e',
  templateUrl: './waf-rigthsection-e.component.html',
  styleUrls: ['./waf-rigthsection-e.component.css']
})
export class WafRigthsectionEComponent implements OnInit {

  properties: PStyle[] = StyleProperty_data;

  constructor(private MainService: WafMainService, private DataService: WafDataService) {
    this.DataService.AddEvent(WafEventsName.selectStyle, this.UpdatePropertyValue, this.properties);
  }

  ngOnInit() {
  }

  IsColorProperty(item: PStyle) {
    return (item.propertyCss === "background-color" || item.propertyCss === "color");
  }

  UpdatePropertyValue(that: any, data?: any) {
    data.forEach(x => {
      let value = that.GetValueByProperty(that.SelectedStyle.className, x.propertyCss);

      if (value) x.value = value;
      else x.value = x.defaultValue;
    });
  }

  PropertyChange(item: PStyle) {
    this.DataService.EditStyleRule(this.DataService.SelectedStyle.className, item.propertyCss, item.value, true);
  }

}
