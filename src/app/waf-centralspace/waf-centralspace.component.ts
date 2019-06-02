import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

import { MatSnackBar } from '@angular/material';

import { WafMainService, ElementsCode } from '../waf-services/waf-main.service';
import { WafDataService } from '../waf-services/waf-data.service';

//

@Component({
  selector: 'app-waf-centralspace',
  templateUrl: './waf-centralspace.component.html',
  styleUrls: ['./waf-centralspace.component.css']
})
export class WafCentralspaceComponent implements OnInit {

  get wafCode_html() {
    let htmlCode = `<div id="wafspace">${ this.DataService.GetHtmlCode() }<div>`;
    return this.domSanitizer.bypassSecurityTrustHtml(htmlCode);
  }
  get wafCode_css() {
    let cssCode = `<style>${ this.DataService.GetCssCode() }</style>`;
    return this.domSanitizer.bypassSecurityTrustHtml(cssCode);
  }

  //

  constructor(
    private domSanitizer: DomSanitizer,
    private snackBar: MatSnackBar,
    private MainService: WafMainService,
    private DataService: WafDataService
  ) { }

  ngOnInit() {
  }

  //

  CreateElement() {
    if (this.DataService.SelectedTool && this.DataService.SelectedTool.codeElement !== ElementsCode.none) {
      this.DataService.AddRootNode(this.DataService.SelectedTool.generator(), true);

      this.snackBar.open(`${ this.DataService.SelectedTool.name } created`, "Ok", {
        duration: 2000,
        panelClass: ["snackBarStyle"]
      });

      //
      console.log(this.DataService.Nodes);
      console.log(this.DataService.Events);
    }

    //
    this.DataService.SelectToolByCode(ElementsCode.none);
  }

}
