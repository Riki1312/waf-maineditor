import { Injectable } from '@angular/core';

export interface WafElement {
  code: number;
  name: string;
  panels?: number[];
}

export enum ElementsCode {
  defaultNone = -1,
  frame = 1,
  div = 2,
  title = 3,
  paragraph = 4,
  image = 5,
  graphic = 6,
  customCode = 7
}

export enum StylePanelSection {
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
      code: ElementsCode.defaultNone,
      name: "Default none"
    },
    {
      code: ElementsCode.frame,
      name: "Frame",
      panels: [ StylePanelSection.frame ]
    },
    {
      code: ElementsCode.div,
      name: "Div",
      panels: [ StylePanelSection.alignment, StylePanelSection.background, StylePanelSection.border ]
    },
    {
      code: ElementsCode.title,
      name: "Title",
      panels: [ StylePanelSection.typography, StylePanelSection.heading ]
    },
    {
      code: ElementsCode.paragraph,
      name: "Paragraph",
      panels: [ StylePanelSection.typography ]
    },
    {
      code: ElementsCode.image,
      name: "Image"
    },
    {
      code: ElementsCode.graphic,
      name: "Graphic"
    },
    {
      code: ElementsCode.customCode,
      name: "Custom code"
    }
  ];
  SelectedElement: WafElement;

  constructor() {
    this.SelectElementByCode(ElementsCode.defaultNone);
  }

  SelectElementByCode(tcode: number) {
    this.SelectedElement = this.Elements.find(x => x.code === tcode);
  }
  SelectElementByName(tname: string) {
    this.SelectedElement = this.Elements.find(x => x.name === tname);
  }
  IsPanelSelected(index: number) {
    return (this.SelectedElement.panels.indexOf(index) !== -1)
  }

}
