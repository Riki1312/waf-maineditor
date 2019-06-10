import { Injectable } from '@angular/core';

import { WafMainService, WafElement } from './waf-main.service';
import { WafDataService } from './waf-data.service';

//

@Injectable()
export class WafFunctionService {

  constructor(private MainService: WafMainService, private DataService: WafDataService) { }

  //Select

  public SelectToolByCode(codeElement: number): void {
    this.DataService.SelectedTool = this.MainService.Elements_data.find(x => x.codeElement === codeElement);
  }

  //Element

  public GetElementByCode(codeElement: number): WafElement {
    return this.MainService.Elements_data.find(x => x.codeElement === codeElement);
  }  

}
