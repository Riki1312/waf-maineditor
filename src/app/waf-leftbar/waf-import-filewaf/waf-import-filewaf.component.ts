import { Component, OnInit } from '@angular/core';

import { WafMainService } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';

import { WafCodeClass } from '../../waf-services/waf-code/waf-code-class';

//

@Component({
  selector: 'app-waf-import-filewaf',
  templateUrl: './waf-import-filewaf.component.html',
  styleUrls: ['./waf-import-filewaf.component.css']
})
export class WafImportFilewafComponent implements OnInit {

  fileWafCode: string = "";

  //

  private _CodeClass: WafCodeClass;
  
  constructor(private MainService: WafMainService, private DataService: WafDataService) {
    this._CodeClass = new WafCodeClass(this.MainService, this.DataService);
  }

  ngOnInit() {
  }

}
