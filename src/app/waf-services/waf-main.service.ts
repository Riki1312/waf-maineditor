import { Injectable } from '@angular/core';

interface WafElement {
  code: number;
  name: string;
  panels?: number[];
}

enum StylePanelSection {
  commonProperties = 0,
  alignment = 1,
  frame = 2,
  typography = 3,
  heading = 4,
  background = 5,
  border = 6,
  effects = 7
}

//

@Injectable()
export class WafMainService {

  Elements: WafElement[] = [
    {
      code: -1,
      name: "Default"
    },
    {
      code: 1,
      name: "Frame",
      panels: [ StylePanelSection.frame ]
    },
    {
      code: 2,
      name: "Div",
      panels: [ /*StylePanelSection.alignment,*/ StylePanelSection.background, StylePanelSection.border ]
    },
    {
      code: 3,
      name: "Title",
      panels: [ StylePanelSection.typography, StylePanelSection.heading ]
    },
    {
      code: 4,
      name: "Paragraph",
      panels: [ StylePanelSection.typography ]
    },
    {
      code: 5,
      name: "Image"
    },
    {
      code: 6,
      name: "Graphic"
    },
    {
      code: 7,
      name: "Custom code"
    }
  ];
  SelectedElement: WafElement;

  constructor() {
    this.SelectElementByCode(-1);
  }

  SelectElementByCode(tcode: number) {
    this.SelectedElement = this.Elements.find(x => x.code === tcode);
  }
  SelectElementByName(tname: string) {
    this.SelectedElement = this.Elements.find(x => x.name === tname);
  }

}
