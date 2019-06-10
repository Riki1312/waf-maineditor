import { Injectable } from '@angular/core';

import { WafMainService, WafElement, WafNode, WafStyle, StyleVariable } from './waf-main.service';

import { WafNodeClass } from './waf-node/waf-node-class';
import { WafStyleClass } from './waf-style/waf-style-class';

//

export enum WafEventsName {
  selectStyle = "selectStyle",
  selectNode = "selectNode",
  selectTool = "selectTool"
}

export interface WafEvent {
  [WafEventsName.selectNode]: EventData[],
  [WafEventsName.selectStyle]: EventData[]
}

export interface EventData {
  run: (that: any, data?: any) => void;
  eventId: number;
  data?: any;
}

//

@Injectable()
export class WafDataService {

  public SelectedTool: WafElement;
  public SelectedNode: WafNode;
  public SelectedStyle: WafStyle;

  public Nodes: WafNode[];
  public Styles: WafStyle[];

  public StyleVariables: StyleVariable[];
  public CustomGolobalCode: string;

  //

  public Events: WafEvent = {
    [WafEventsName.selectNode]: [],
    [WafEventsName.selectStyle]: []
  };

  //

  private _NodeClass: WafNodeClass;
  private _StyleClass: WafStyleClass;

  //

  constructor(private MainService: WafMainService) {
    this.Nodes = [];
    this.Styles = [];

    this.StyleVariables = [];
    this.CustomGolobalCode = "";

    this._NodeClass = new WafNodeClass(this);
    this._StyleClass = new WafStyleClass(this);

    this.Load();
  }

  //

  private Load(): void {
    this.LoadBaseCode();
  }

  private LoadBaseCode(): void {
    this.Styles = this.Styles.concat(this.MainService.WafBasicStyle);
  }

  private RunEvents(eventKey: string): void {
    for (let event of this.Events[eventKey])
      if (event.data) event.run(this, event.data);
      else event.run(this);
  }

  //

  public AddEvent(eventKey: string, fun: (that: any) => void, eventId: number, eventData?: any[]) {
    let event: EventData = {
      run: fun,
      eventId: eventId
    };
    
    if (eventData) event.data = eventData;

    if (!this.Events[eventKey].find(x => x.eventId === event.eventId))
      this.Events[eventKey].push(event);
  }

}
