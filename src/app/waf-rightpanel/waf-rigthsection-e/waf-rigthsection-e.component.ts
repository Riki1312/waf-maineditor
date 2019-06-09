import { Component, OnInit } from '@angular/core';

import { DataEventsId } from '../../waf-services/waf-main.service';
import { WafDataService, WafEventsName } from '../../waf-services/waf-data.service';

import { WafRightpanelSectionbaseComponent } from '../waf-rightpanel-sectionbase/waf-rightpanel-sectionbase.component';
import { PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "Color",
    propertyCss: "background-color",
    defaultValue: "transparent",
    value: "transparent"
  },
  {
    name: "Opacity",
    propertyCss: "opacity",
    defaultValue: "1",
    value: "1"
  },
  {
    name: "Image",
    propertyCss: "background-image",
    defaultValue: "none",
    value: "none"
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-e',
  templateUrl: './waf-rigthsection-e.component.html',
  styleUrls: ['./waf-rigthsection-e.component.css']
})
export class WafRigthsectionEComponent implements OnInit {

  private panelTitle = "Background";
  private styleProperty = StyleProperty_data;

  constructor(private DataService: WafDataService) {
    //
    this.DataService.AddEvent(WafEventsName.selectStyle, this.UpdatePropertyValue, DataEventsId.rigthsection_e, this.styleProperty);
  }

  ngOnInit() {
  }

  //

  public UpdatePropertyValue(that: any, data?: any): void {
    data0.forEach(x => {
      let value = that.GetValueByProperty(that.SelectedStyle.className, x.propertyCss);

      if (value) x.value = value;
      else x.value = x.defaultValue;
    });
  }

}
