import { Injectable } from '@angular/core';

export interface WafSetting {
  code: number;
  name: string;
  value?: any;
}

export enum SettingsCode {
  simplifiedMode = 1,
  automaticSaving = 2
}

//

@Injectable()
export class WafSettingsService {

  EditorSettings: WafSetting[] = [
    {
      code: SettingsCode.simplifiedMode,
      name: "Simplified mode",
      value: false
    },
    {
      code: SettingsCode.automaticSaving,
      name: "Automatic saving",
      value: true
    }
  ];

  constructor() { }

  SetSettingByCode(scode: number, svalue: any) {
    this.EditorSettings.forEach(x => { if (x.code === scode) x.value = svalue; });
  }
  GetSettingByCode(scode: number) {
    return this.EditorSettings.find(x => x.code === scode).value;
  }

}