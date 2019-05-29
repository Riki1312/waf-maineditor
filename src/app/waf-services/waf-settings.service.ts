import { Injectable } from '@angular/core';

export interface WafSetting {
  code: number;
  name: string;
  value?: any;
}

//

@Injectable()
export class WafSettingsService {

  EditorSettings: WafSetting[] = [
    {
      code: 1,
      name: "Simplified mode",
      value: false
    },
    {
      code: 2,
      name: "Automatic saving",
      value: true
    }
  ];

  constructor() { }

}