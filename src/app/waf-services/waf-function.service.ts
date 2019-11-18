import { Injectable } from '@angular/core';

import { WafMainService, WafElement } from './waf-main.service';
import { WafDataService } from './waf-data.service';

import { WafNodeClass } from './waf-node/waf-node-class';
import { WafStyleClass } from './waf-style/waf-style-class';

//

@Injectable()
export class WafFunctionService {

  private _NodeClass: WafNodeClass;
  private _StyleClass: WafStyleClass;

  //
  
  constructor(private MainService: WafMainService, private DataService: WafDataService) {
    this._NodeClass = new WafNodeClass(this.DataService);
    this._StyleClass = new WafStyleClass(this.DataService);
  }

  //Select

  public SelectToolByCode(codeElement: number): void {
    this.DataService.SelectedTool = this.MainService.Elements_data.find(x => x.codeElement === codeElement);
  }

  public SelectNodeById(idNode: number): void {
    this.DataService.SelectedNode = this._NodeClass.FindNodeById(idNode);
    this.DataService.SelectedStyle = undefined;
  }

  public SelectStyleByName(className: string): void {
    this.DataService.SelectedStyle = this._StyleClass.FindStyleByClass(className);
  }

  //Element

  public GetElementByCode(codeElement: number): WafElement {
    return this.MainService.Elements_data.find(x => x.codeElement === codeElement);
  }  

}
