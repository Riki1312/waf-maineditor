import { Component, OnInit, Input,  } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { WafMainService, WafStyle } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';

import { WafRightpanelClass, PStyle, PGroup } from '../waf-rightpanel-class/waf-rightpanel-class';

//

@Component({
  selector: 'app-waf-rightpanel-sectionbase',
  templateUrl: './waf-rightpanel-sectionbase.component.html',
  styleUrls: ['./waf-rightpanel-sectionbase.component.css']
})
export class WafRightpanelSectionbaseComponent implements OnInit {

  @Input() public panel_title: string;
  @Input() public panel_description: string;
  @Input() public property_data: PStyle[];

  //

  private panelManager: WafRightpanelClass;
  private propertyGroup = PGroup;

  //

  private get properties(): PStyle[] {
    return this.property_data.map(x => {
      let style: WafStyle = this.DataService.SelectedStyle;

      for (let rule of style.cssRules)
        if (rule.cssProperty === x.propertyCss) x.value = rule.cssValue;
      
      return x;
    });
  }

  constructor(private snackBar: MatSnackBar, private MainService: WafMainService, private DataService: WafDataService) {
  }

  ngOnInit() {
    this.panelManager = new WafRightpanelClass(this.snackBar, this.DataService, this.properties);
  }

  //

  private PropertyChange(cssProperty: string, event: any): void {
    let newValue = event.target.value;
    this.panelManager.PropertyChange(cssProperty, newValue);
  }

  private IsProperty(item: PStyle, group: string): boolean {
    return this.panelManager.PropertyPreview(item.propertyCss, group);
  }

  private PropertyKeydown(item: PStyle, event: any): void {
    this.panelManager.PropertyKeydown(item, event.key);
  }

}
