import { MatSnackBar } from '@angular/material';

import { WafDataService } from '../../waf-services/waf-data.service';
import { WafFunctionService } from '../../waf-services/waf-function.service';

import { WafStyleClass } from '../../waf-services/waf-style/waf-style-class';

//

export interface PStyle {
  name: string;
  propertyCss: string;
  defaultValue: string;
  value?: string;
  domain?: string[];
}

export enum PGroup {
  color = "color",
  formatAlign = "format_align",
  size = "size",
  display = "display",
  opacity = "opacity",
  line = "line"
}

//

export class WafRightpanelClass {

  private _SnackBar: MatSnackBar;

  private _DataService: WafDataService;
  private _FunctionService: WafFunctionService;
  private _StyleCalss: WafStyleClass;

  private _Properties: PStyle[];
  private _PropertyChangeActive: boolean;

  private _PreviewData: any = {
    [PGroup.color]: ["background-color", "color", "border-color"],
    [PGroup.formatAlign]: ["text-align", "float"],
    [PGroup.size]: ["font-size"],
    [PGroup.display]: ["display"],
    [PGroup.opacity]: ["opacity"],
    [PGroup.line]: ["border-style"]
  };
  
  constructor(private snackBar: MatSnackBar, dataService: WafDataService, functionService: WafFunctionService, properties: PStyle[]) {
    this._SnackBar = snackBar;
    this._Properties = properties;
    this._PropertyChangeActive = true;

    this._DataService = dataService;
    this._FunctionService = functionService;
    this._StyleCalss = new WafStyleClass(this._DataService, this._FunctionService);
  }

  //

  public PropertyChange(cssProperty: string, newValue: string): void {
    if (this._PropertyChangeActive)
      this._StyleCalss.EditStyleRule(this._DataService.SelectedStyle.className, cssProperty, newValue, true);
    else
      this._PropertyChangeActive = true;
  }

  public PropertyKeydown(item: PStyle, eventKey: string): void {
    if (eventKey === "Delete") {
      this._Properties.forEach(x => {
        if (x.propertyCss === item.propertyCss) x.value = item.defaultValue;
      });
      this._StyleCalss.DeleteStyleRule(this._DataService.SelectedStyle.className, item.propertyCss);
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
