import { Component, OnInit } from '@angular/core';

import { WafMainService } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';

//

interface PStyle {
  name: string;
  propertyCss: string;
  value?: string;
}

const StyleProperty_data: PStyle[] = [
  {
    name: "Color",
    propertyCss: "color",
    value: "#000"
  },
  {
    name: "Opacity",
    propertyCss: "opacity",
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

  constructor(private MainService: WafMainService, private DataService: WafDataService) { }

  ngOnInit() {
  }

  IsColorProperty(item: PStyle) {
    return (item.propertyCss === "color");
  }

  UpdatePropertyValue() {
    this.properties.forEach(x => {
      x.value = this.DataService.GetValueByProperty(this.DataService.SelectedStyle.className, x.propertyCss);
    });
  }

  PropertyChange(item: PStyle) {
    this.DataService.EditStyleRule(this.DataService.SelectedStyle.className, item.propertyCss, item.value, true);

    //
    console.log(this.DataService.Styles);
  }

}
