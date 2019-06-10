import { Component, OnInit } from '@angular/core';

import { WafMainService } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';

import { WafCodeClass } from '../../waf-services/waf-code/waf-code-class';

//

@Component({
  selector: 'app-waf-download-code',
  templateUrl: './waf-download-code.component.html',
  styleUrls: ['./waf-download-code.component.css']
})
export class WafDownloadCodeComponent implements OnInit {

  private _CodeClass: WafCodeClass;
  
  constructor(private MainService: WafMainService, private DataService: WafDataService) {
    this._CodeClass = new WafCodeClass(this.MainService, this.DataService);
  }

  ngOnInit() {
  }

  get wafCode_html() {
    let htmlCode = `${ this._CodeClass.GetHtmlCode() }`;
    return htmlCode;
  }
  get wafCode_css() {
    let cssCode = `${ this._CodeClass.GetCssCode() }`;
    return cssCode;
  }

}
