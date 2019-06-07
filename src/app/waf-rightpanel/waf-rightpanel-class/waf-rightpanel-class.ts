import { MatSnackBar } from '@angular/material';

import { WafMainService } from '../../waf-services/waf-main.service';
import { WafDataService, WafEventsName } from '../../waf-services/waf-data.service';

//

export interface PStyle {
  name: string;
  propertyCss: string;
  defaultValue: string;
  value?: string;
  domain?: string[];
}

export class WafRightpanelClass {

  private _SnackBar: MatSnackBar;
  private _DataService: WafDataService;
  private _Properties: PStyle[];
  private _PropertyChangeActive: boolean;
  
  constructor(private snackBar: MatSnackBar, dataService: WafDataService, properties: PStyle[]) {
    this._SnackBar = snackBar;
    this._DataService = dataService;
    this._Properties = properties;
    this._PropertyChangeActive = true;
  }

  //

  public SetupEvent(eventId: number): void {
    this._DataService.AddEvent(WafEventsName.selectStyle, this.UpdatePropertyValue, eventId, this._Properties);
  }

  public IsColorProperty(item: PStyle): boolean {
    return (
      item.propertyCss === "background-color" ||
      item.propertyCss === "color" ||
      item.propertyCss === "border-color"
    );
  }

  public PropertyChange(item: PStyle): void {
    if (this._PropertyChangeActive)
      this._DataService.EditStyleRule(this._DataService.SelectedStyle.className, item.propertyCss, item.value, true);
    else
      this._PropertyChangeActive = true;
  }

  public PropertyKeydown(item: PStyle, event: any): void {
    if (event.key === "Delete") {
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

  public UpdatePropertyValue(that: any, data?: any): void {
    data.forEach(x => {
      let value = that.GetValueByProperty(that.SelectedStyle.className, x.propertyCss);

      if (value) x.value = value;
      else x.value = x.defaultValue;
    });
  }

}
