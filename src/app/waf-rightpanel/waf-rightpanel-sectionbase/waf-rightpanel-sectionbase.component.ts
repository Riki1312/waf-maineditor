import { Component, OnInit, Input } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { WafMainService, WafStyle } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';
import { WafFunctionService } from '../../waf-services/waf-function.service';

import { WafStyleClass } from '../../waf-services/waf-style/waf-style-class';

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

  @Input() public override_propertyChange: (cssProperty: string, event: any) => void;
  @Input() public override_getProperties: () => PStyle[];
  @Input() public override_propertyKeydown: (item: PStyle, event: any) => void;

  //

  panelManager: WafRightpanelClass;
  propertyGroup = PGroup;

  //

  get properties(): PStyle[] {
    if (!this.override_getProperties) {
      return this.PropertiesGetter();
    }
    else {
      return this.override_getProperties();
    }
  }

  private _StyleClass: WafStyleClass;

  constructor(
    private snackBar: MatSnackBar,
    private MainService: WafMainService,
    private DataService: WafDataService,
    private FunctionService: WafFunctionService
  ) {
    this._StyleClass = new WafStyleClass(this.DataService);
  }

  ngOnInit() {
    this.panelManager = new WafRightpanelClass(this.snackBar, this.DataService, this.FunctionService, this.properties);
  }

  //

  PropertiesGetter(): PStyle[] {
    let result: PStyle[] = this.property_data.map(x => {
      let style: WafStyle = this.DataService.SelectedStyle;

      x.value = x.defaultValue;
      for (let rule of style.cssRules) {
        if (rule.cssProperty === x.propertyCss) x.value = rule.cssValue;
      }
      
      return x;
    });

    return result;
  }

  IsProperty(item: PStyle, group: string): boolean {
    return this.panelManager.PropertyPreview(item.propertyCss, group);
  }

  PropertyChange(cssProperty: string, event: any): void {
    if (!this.override_propertyChange) {
      let newValue = event.target.value;
      this.panelManager.PropertyChange(cssProperty, newValue);
    }
    else {
      this.override_propertyChange(cssProperty, event);
    }
  }

  PropertyKeydown(item: PStyle, event: any): void {
    if (!this.override_propertyKeydown) {
      this.panelManager.PropertyKeydown(item, event.key);
    }
    else {
      this.override_propertyKeydown(item, event);
    }
  }

}
