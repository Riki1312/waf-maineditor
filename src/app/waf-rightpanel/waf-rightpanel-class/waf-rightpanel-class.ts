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

  private _DataService: WafDataService;
  private _Properties: PStyle[];
  
  constructor(dataService: WafDataService, properties: PStyle[]) {
    this._DataService = dataService;
    this._Properties = properties;
  }

  //

  public SetupEvent(eventId: number): void {
    this._DataService.AddEvent(WafEventsName.selectStyle, this.UpdatePropertyValue, eventId, this._Properties);
  }

  public IsColorProperty(item: PStyle): boolean {
    return (item.propertyCss === "background-color" || item.propertyCss === "color");
  }

  public PropertyChange(item: PStyle): void {
    this._DataService.EditStyleRule(this._DataService.SelectedStyle.className, item.propertyCss, item.value, true);
  }

  public UpdatePropertyValue(that: any, data?: any): void {
    data.forEach(x => {
      let value = that.GetValueByProperty(that.SelectedStyle.className, x.propertyCss);

      if (value) x.value = value;
      else x.value = x.defaultValue;
    });
  }

}
