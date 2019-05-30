import { Injectable } from '@angular/core';

export interface WafNode {
  id: number;
  elementCode: number;
  name: string;

  data: NodeData;

  allowChildren: boolean;
  children?: WafNode;
}

export interface NodeData {
  htmlTag: string;
  allowFinaltag: boolean;
  cssClass: string[]
}

export interface WafStyle {
  className: string;
  cssRules: CssRule[];
}

export interface CssRule {
  propertyCss: string,
  value: any;
}

//

@Injectable()
export class WafNodesService {

  constructor() { }

}