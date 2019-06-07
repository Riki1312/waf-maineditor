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
  //Html content
  htmlContent?: string;
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
  //Is basic waf style
  basicWafStyle?: boolean;
}
export interface StyleData {
  //Css property
  cssProperty: string,
  //Css value
  cssValue: any;
  //Is custom property
  customStyle?: boolean;
}
export interface StyleVariable {
  //Css variable name
  variableName: string,
  //Css variable value
  variableValue: string;
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
  effects = 7,
  spacinSize = 8,
  customCss = 9
}

export enum DataEventsId {
  leftpanel_a = 1,
  rigthsection_a = 2,
  rigthsection_b = 3,
  rigthsection_c = 4,
  rigthsection_d = 5,
  rigthsection_e = 6,
  rigthsection_f = 7
}

//

@Injectable()
export class WafMainService {

  private NodesId_data: number[] = [0];

  private ElementsGeneretor_data: any = {
    [ElementsCode.frame]: this.FrameGeneretor(),
    [ElementsCode.div]: this.CreateDefaultGenerator(
      { codeElement: ElementsCode.div, name: "Div" },
      true,
      "div",
      true
    ),
    [ElementsCode.title]: this.CreateDefaultGenerator(
      { codeElement: ElementsCode.title, name: "Title" },
      false,
      "h1",
      true,
      "Title"
    ),
    [ElementsCode.paragraph]: this.CreateDefaultGenerator(
      { codeElement: ElementsCode.paragraph, name: "Paragraph" },
      false,
      "p",
      true,
      "Paragraph"
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
      generator: this.ElementsGeneretor_data[ElementsCode.frame],
      panels: [ StylePanelSection.frame ]
    },
    {
      codeElement: ElementsCode.div,
      name: "Div",
      generator: this.ElementsGeneretor_data[ElementsCode.div],
      panels: [ StylePanelSection.alignment, StylePanelSection.background, StylePanelSection.border, StylePanelSection.spacinSize, StylePanelSection.customCss ]
    },
    {
      codeElement: ElementsCode.title,
      name: "Title",
      generator: this.ElementsGeneretor_data[ElementsCode.title],
      panels: [ StylePanelSection.typography, StylePanelSection.heading, StylePanelSection.spacinSize ]
    },
    {
      codeElement: ElementsCode.paragraph,
      name: "Paragraph",
      generator: this.ElementsGeneretor_data[ElementsCode.paragraph],
      panels: [ StylePanelSection.typography, StylePanelSection.spacinSize ]
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

  public WafFrameClassName: string = "WafFrame";

  public WafBasicStyle: WafStyle = {
    className: this.WafFrameClassName,
    cssRules: [
      { cssProperty: "background-color", cssValue: "white" },
      { cssProperty: "width", cssValue: "500px" },
      { cssProperty: "height", cssValue: "500px" }
    ],
    basicWafStyle: true
  };

  //

  constructor() { }

  //

  private CreateDefaultGenerator(
    element: WafElement,
    allowChildren: boolean,
    htmlTag: string,
    allowFinaltag: boolean,
    htmlContent?: string
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

      if (htmlContent)
        node.data["htmlContent"] = htmlContent;

      return node;
    }
    return fun;
  }

  public GenerateNodeId(): number {
    let id: number = this.NodesId_data.pop() + 1;
    this.NodesId_data.push(id);
    return id;
  }

  //

  private FrameGeneretor(): () => WafNode {
    let fun = (): WafNode => {
      let node: WafNode = {
        idNode: this.GenerateNodeId(),
        codeElement:  ElementsCode.frame,
        name: "Frame",
        data: {
          htmlTag: "div",
          allowFinaltag: true,
          className: [this.WafFrameClassName]
        },
        allowChildren: true
      }

      node["children"] = [];
      return node;
    }
    return fun;
  }

}
