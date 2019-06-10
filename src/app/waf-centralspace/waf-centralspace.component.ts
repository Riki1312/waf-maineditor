import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

import { MatSnackBar } from '@angular/material';

import { WafMainService, ElementsCode } from '../waf-services/waf-main.service';
import { WafDataService } from '../waf-services/waf-data.service';
import { WafFunctionService } from '../waf-services/waf-function.service';

import { WafNodeClass } from '../waf-services/waf-node/waf-node-class';
import { WafCodeClass } from '../waf-services/waf-code/waf-code-class';

//

@Component({
  selector: 'app-waf-centralspace',
  templateUrl: './waf-centralspace.component.html',
  styleUrls: ['./waf-centralspace.component.css']
})
export class WafCentralspaceComponent implements OnInit {

  get wafCode_html() {
    let htmlCode = `<div id="wafspace">${ this._CodeClass.GetHtmlCode() }<div>`;
    return this.domSanitizer.bypassSecurityTrustHtml(htmlCode);
  }
  get wafCode_css() {
    let cssCode = `<style>${ this._CodeClass.GetCssCode() }</style>`;
    return this.domSanitizer.bypassSecurityTrustHtml(cssCode);
  }

  //

  private _NodeClass: WafNodeClass;
  private _CodeClass: WafCodeClass;

  constructor(
    private domSanitizer: DomSanitizer,
    private snackBar: MatSnackBar,
    private MainService: WafMainService,
    private DataService: WafDataService,
    private FunctionService: WafFunctionService
  ) {
    this._NodeClass = new WafNodeClass(this.DataService, this.FunctionService);
    this._CodeClass = new WafCodeClass(this.MainService, this.DataService);
  }

  ngOnInit() {
  }

  //

  CreateElement() {
    if (this.DataService.SelectedTool && this.DataService.SelectedTool.codeElement !== ElementsCode.none) {
      this._NodeClass.AddRootNode(this.DataService.SelectedTool.generator(), true);

      this.snackBar.open(`${ this.DataService.SelectedTool.name } created`, "Ok", {
        duration: 2000,
        panelClass: ["snackBarStyle"]
      });

      //
    }
    else {
      this.FunctionService.SelectNodeById(-1);
    }

    //
    this.FunctionService.SelectToolByCode(ElementsCode.none);

    console.log("CreateElement");
  }

}
