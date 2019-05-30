import { Injectable } from '@angular/core';

//

//Tools
export interface WafElement {
  //Unique identifier element (enum)
  codeElement: number;
  //Data
  name: string;
  //Function
  generator?: () => WafNode;
  //Style panel sections
  panels?: number[];
}

//Nodes
export interface WafNode {
  //Unique identifier node
  idNode: number;
  //Node type (enum)
  codeElement: number;
  //Data
  name: string;
  //Data
  data: NodeData;
  //Allow
  allowChildren: boolean;
  //Childrens (node array)
  children?: WafNode[];
}
export interface NodeData {
  //Html tag
  htmlTag: string;
  //Allow
  allowFinaltag: boolean;
  //Attribute class
  className?: string[];
  //Attribute id (univocal)
  idName?: string;
}

//Style
export interface WafStyle {
  //Class name (html, css)
  className: string;
  //Css rules
  cssRules: StyleData[];
}
export interface StyleData {
  //Css property
  cssProperty: string,
  //Css value
  cssValue: any;
}

//

export enum ElementsCode {
  none = -1,
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

  private NodesId_data: number[] = [0];

  private ElementsGeneretor_data: any = {
    [ElementsCode.div]: this.CreateDefaultGenerator(
      { codeElement: ElementsCode.div, name: "Div" },
      true,
      "div",
      true
    )
  };

  public Elements_data: WafElement[] = [
    {
      codeElement: ElementsCode.none,
      name: "None"
    },
    {
      codeElement: ElementsCode.frame,
      name: "Frame",
      panels: [ StylePanelSection.frame ]
    },
    {
      codeElement: ElementsCode.div,
      name: "Div",
      generator: this.ElementsGeneretor_data[ElementsCode.div],
      panels: [ StylePanelSection.alignment, StylePanelSection.background, StylePanelSection.border ]
    },
    {
      codeElement: ElementsCode.title,
      name: "Title",
      panels: [ StylePanelSection.typography, StylePanelSection.heading ]
    },
    {
      codeElement: ElementsCode.paragraph,
      name: "Paragraph",
      panels: [ StylePanelSection.typography ]
    },
    {
      codeElement: ElementsCode.image,
      name: "Image"
    },
    {
      codeElement: ElementsCode.graphic,
      name: "Graphic"
    },
    {
      codeElement: ElementsCode.customCode,
      name: "CustomCode"
    }
  ];

  //

  constructor() { }

  //

  private CreateDefaultGenerator(
    element: WafElement,
    allowChildren: boolean,
    htmlTag: string,
    allowFinaltag: boolean
  ): () => WafNode {
    let fun = (): WafNode => {
      let node: WafNode = {
        idNode: this.GenerateNodeId(),
        codeElement: element.codeElement,
        name: element.name,
        data: {
          htmlTag: htmlTag,
          allowFinaltag: allowFinaltag
        },
        allowChildren: allowChildren
      }

      if (allowChildren)
        node["children"] = [];

      return node;
    }
    return fun;
  }

  public GenerateNodeId(): number {
    let id: number = this.NodesId_data.pop() + 1;
    this.NodesId_data.push(id);
    return id;
  }

}
