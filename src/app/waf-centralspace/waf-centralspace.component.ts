import { Component, OnInit } from '@angular/core';

import { WafMainService, ElementsCode } from '../waf-services/waf-main.service';
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
    if (this.DataService.SelectedTool && this.DataService.SelectedTool.codeElement !== ElementsCode.none) {

      console.log(this.DataService.SelectedTool);
      this.DataService.AddRootNode(this.DataService.SelectedTool.generator(), true);
      console.log(this.DataService.Nodes);

      //this.DataService.EditNodeById(2, "name", "jam");

      /*let res = this.DataService.FindNodeById(2);
      res.name = "jam";
      console.log(res);*/

      //
      //let res = this.DataService.AddNode(1, this.DataService.SelectedTool.generator());

      //console.log(res);
      //console.log(this.DataService.Nodes);

      //
      console.log("C");

      //let names = [];
      //this.DataService.DeepCycleOnNodes(this.DataService.Nodes, x => x.name = "ccc");
      //this.DataService.CycleOnNodes(this.DataService.Nodes, x => names.push(x.name));

      //console.log(names);
      console.log(this.DataService.Nodes);

    }

    //
    //
    this.DataService.SelectToolByCode(ElementsCode.none);
  }

}
