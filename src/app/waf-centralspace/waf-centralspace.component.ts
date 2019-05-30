import { Component, OnInit } from '@angular/core';

import { WafMainService } from '../waf-services/waf-main.service';
import { WafDataService } from '../waf-services/waf-data.service';

//

@Component({
  selector: 'app-waf-centralspace',
  templateUrl: './waf-centralspace.component.html',
  styleUrls: ['./waf-centralspace.component.css']
})
export class WafCentralspaceComponent implements OnInit {

  constructor(private MainService: WafMainService, private DataService: WafDataService) { }

  ngOnInit() {
  }

  CreateElement() {
    /*
    if (this.MainService.SelectedElement.code !== ElementsCode.defaultNone) {

      console.log(this.NodeService.FindNodeById(8));
    }

    //
    this.MainService.SelectElementByCode(ElementsCode.defaultNone);*/
  }

}