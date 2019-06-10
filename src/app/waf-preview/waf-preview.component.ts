import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

import { WafMainService } from '../waf-services/waf-main.service';
import { WafDataService } from '../waf-services/waf-data.service';

import { WafCodeClass } from '../waf-services/waf-code/waf-code-class';

//

@Component({
  selector: 'app-waf-preview',
  templateUrl: './waf-preview.component.html',
  styleUrls: ['./waf-preview.component.css']
})
export class WafPreviewComponent implements OnInit {

  get wafCode_html() {
    let htmlCode = `<div id="wafspace">${ this._CodeClass.GetHtmlCode() }<div>`;
    return this.domSanitizer.bypassSecurityTrustHtml(htmlCode);
  }
  get wafCode_css() {
    let cssCode = `<style>${ this._CodeClass.GetCssCode() }</style>`;
    return this.domSanitizer.bypassSecurityTrustHtml(cssCode);
  }

  //

    private _CodeClass: WafCodeClass;

  constructor(private domSanitizer: DomSanitizer, private MainService: WafMainService, private DataService: WafDataService,) {
    this._CodeClass = new WafCodeClass(this.MainService, this.DataService);
  }

  ngOnInit() {
  }

}
