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
    /*this.DataService.Nodes = [
      {
        idNode: 1,
        codeElement: 2,
        name: "aaaaa",
        data: null,
        allowChildren: true,
        children: []
      },
      {
        idNode: 2,
        codeElement: 2,
        name: "bbbbb",
        data: null,
        allowChildren: true,
        children: [
          {
            idNode: 5,
            codeElement: 2,
            name: "dddd",
            data: null,
            allowChildren: true,
            children: []
          },
          {
            idNode: 6,
            codeElement: 2,
            name: "eeeee",
            data: null,
            allowChildren: true,
            children: []
          }
        ]
      },
      {
        idNode: 3,
        codeElement: 2,
        name: "ccccc",
        data: null,
        allowChildren: true,
        children: []
      },
      {
        idNode: 4,
        codeElement: 2,
        name: "ccccc",
        data: null,
        allowChildren: true,
        children: [
          {
            idNode: 7,
            codeElement: 2,
            name: "ffff",
            data: null,
            allowChildren: true,
            children: []
          }
        ]
      }
    ];*/
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
      //this.DataService.AddNode(3, this.DataService.SelectedTool.generator());

      //console.log(res);
      //console.log(this.DataService.Nodes);

      //
      //console.log("C");

      //let names = [];
      //this.DataService.DeepCycleOnNodes(this.DataService.Nodes, x => x.name = "ccc");
      //this.DataService.CycleOnNodes(this.DataService.Nodes, x => names.push(x.name));

      //console.log(names);
      //console.log(this.DataService.Nodes);

    }

    //
    this.DataService.SelectToolByCode(ElementsCode.none);
  }

}
