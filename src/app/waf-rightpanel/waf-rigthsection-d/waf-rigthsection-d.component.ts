import { Component, OnInit } from '@angular/core';

import { WafRightpanelSectionbaseComponent } from '../waf-rightpanel-sectionbase/waf-rightpanel-sectionbase.component';
import { PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [

];

//

@Component({
  selector: 'app-waf-rigthsection-d',
  templateUrl: './waf-rigthsection-d.component.html',
  styleUrls: ['./waf-rigthsection-d.component.css']
})
export class WafRigthsectionDComponent implements OnInit {

  private panelTitle = "Heading";
  private styleProperty = StyleProperty_data;

  constructor() {
  }

  ngOnInit() {
  }

}
