import { Component, OnInit } from '@angular/core';

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

  constructor(private snackBar: MatSnackBar, private MainService: WafMainService, private DataService: WafDataService) { }

  ngOnInit() {
  }

  CreateElement() {
    if (this.DataService.SelectedTool && this.DataService.SelectedTool.codeElement !== ElementsCode.none) {
      this.DataService.AddRootNode(this.DataService.SelectedTool.generator(), true);

      this.snackBar.open(`${ this.DataService.SelectedTool.name } created`, "Ok", {
        duration: 2000,
        panelClass: ["snackBarStyle"]
      });

      //
      console.log(this.DataService.Nodes);

      console.log("html:");
      console.log(this.DataService.GetCssCode());
    }

    //
    this.DataService.SelectToolByCode(ElementsCode.none);
  }

}
