import { Component, OnInit } from '@angular/core';

import { WafMainService } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';

//

@Component({
  selector: 'app-waf-download-code',
  templateUrl: './waf-download-code.component.html',
  styleUrls: ['./waf-download-code.component.css']
})
export class WafDownloadCodeComponent implements OnInit {

  constructor(private MainService: WafMainService, private DataService: WafDataService) { }

  ngOnInit() {
  }

  get wafCode_html() {
    let htmlCode = `${ this.DataService.GetHtmlCode() }`;
    return htmlCode;
  }
  get wafCode_css() {
    let cssCode = `${ this.DataService.GetCssCode() }`;
    return cssCode;
  }

}
