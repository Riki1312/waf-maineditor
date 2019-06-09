import { Component, OnInit, Input } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { WafMainService, WafStyle } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';

import { WafRightpanelClass, PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

@Component({
  selector: 'app-waf-rightpanel-sectionbase',
  templateUrl: './waf-rightpanel-sectionbase.component.html',
  styleUrls: ['./waf-rightpanel-sectionbase.component.css']
})
export class WafRightpanelSectionbaseComponent implements OnInit {

  @Input() public panel_title: string;
  @Input() public property_data: PStyle[];

  //

  private panelManager: WafRightpanelClass;

  //

  private get properties(): PStyle[] {
    if (this.property_data) {
      return this.property_data.map(x => {
        let style: WafStyle = this.DataService.SelectedStyle;

        for (let rule of style.cssRules)
          if (rule.cssProperty === x.propertyCss) x.value = rule.cssValue;
        
        return x;
      });
    }
    else return []
  }

  constructor(
    private snackBar: MatSnackBar,
    private MainService: WafMainService,
    private DataService: WafDataService
  ) {
    this.panelManager = new WafRightpanelClass(this.snackBar, this.DataService, this.properties);
  }

  ngOnInit() {
  }

  //

  private PropertyChange(cssProperty: string, event: any) {
    let newValue = event.target.value;
    this.DataService.EditStyleRule(this.DataService.SelectedStyle.className, cssProperty, newValue, true);
  }

  private IsColorProperty(item: PStyle): boolean { return this.panelManager.IsColorProperty(item); }

  private PropertyKeydown(item: PStyle, event: any): void { this.panelManager.PropertyKeydown(item, event); }

}
