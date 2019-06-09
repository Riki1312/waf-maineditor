import { MatSnackBar } from '@angular/material';

import { WafMainService } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';

//

export interface PStyle {
  name: string;
  propertyCss: string;
  defaultValue: string;
  value?: string;
  domain?: string[];
}

export enum PGroup {
  color = "color"
}

export class WafRightpanelClass {

  private _SnackBar: MatSnackBar;
  private _DataService: WafDataService;
  private _Properties: PStyle[];
  private _PropertyChangeActive: boolean;

  private _PreviewData: { [PGroup.color]: string[] } = {
    [PGroup.color]: ["background-color", "color", "border-color"]
  };
  
  constructor(private snackBar: MatSnackBar, dataService: WafDataService, properties: PStyle[]) {
    this._SnackBar = snackBar;
    this._DataService = dataService;
    this._Properties = properties;
    this._PropertyChangeActive = true;
  }

  //

  public PropertyChange(cssProperty: string, newValue: string): void {
    if (this._PropertyChangeActive)
      this._DataService.EditStyleRule(this._DataService.SelectedStyle.className, cssProperty, newValue, true);
    else
      this._PropertyChangeActive = true;
  }

  public PropertyKeydown(item: PStyle, eventKey: string): void {
    if (eventKey === "Delete") {
      this._Properties.forEach(x => {
        if (x.propertyCss === item.propertyCss) x.value = item.defaultValue;
      });
      this._DataService.DeleteStyleRule(this._DataService.SelectedStyle.className, item.propertyCss);
      this._PropertyChangeActive = false;

      this.snackBar.open(`Style property removed`, "Ok", {
        duration: 2000,
        panelClass: ["snackBarStyle"]
      });
    }
  }

  public PropertyPreview(cssProperty: string, propertyGroup: string): boolean {
    return this._PreviewData[propertyGroup].indexOf(cssProperty) !== -1;
  }

}
