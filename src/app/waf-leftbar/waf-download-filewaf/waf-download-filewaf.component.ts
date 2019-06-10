import { Component, OnInit } from '@angular/core';

import { WafMainService } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';

import { WafCodeClass } from '../../waf-services/waf-code/waf-code-class';

//

@Component({
  selector: 'app-waf-download-filewaf',
  templateUrl: './waf-download-filewaf.component.html',
  styleUrls: ['./waf-download-filewaf.component.css']
})
export class WafDownloadFilewafComponent implements OnInit {

  private _CodeClass: WafCodeClass;
  
  constructor(private MainService: WafMainService, private DataService: WafDataService) {
    this._CodeClass = new WafCodeClass(this.MainService, this.DataService);
  }

  ngOnInit() {
  }

  get wafCode_filewaf() {
    let cssCode = `${ this._CodeClass.GetFileWafCode() }`;
    return cssCode;
  }

}
