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
  cssClassname: string[]
}
//
export interface WafStyle {
  className: string;
  cssRules: StyleData[];
}

export interface StyleData {
  propertyCss: string,
  value: any;
}

//

@Injectable()
export class WafNodesService {

  constructor() { }

}
