import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { WafSettingsEditorComponent } from './waf-settings-editor/waf-settings-editor.component';
import { WafDownloadCodeComponent } from './waf-download-code/waf-download-code.component';
import { WafDownloadFilewafComponent } from './waf-download-filewaf/waf-download-filewaf.component';

//

@Component({
  selector: 'app-waf-leftbar',
  templateUrl: './waf-leftbar.component.html',
  styleUrls: ['./waf-leftbar.component.css']
})
export class WafLeftbarComponent implements OnInit {

  @Output() PanelChange = new EventEmitter<number>();

  panelindex: number = -1;

  constructor(public dialogEditor: MatDialog) { }
  ngOnInit() {
  }

  SetPanelindex(index: number) {
    if (this.panelindex !== index)
      this.panelindex = index;
    else
      this.panelindex = -1;

    this.PanelChange.emit(this.panelindex);
  }

  IsSelected(index: number) {
    if (this.panelindex === -1)
      return false;
    else return this.panelindex === index;
  }

  ShowSettingsEditor() {
    this.dialogEditor.open(WafSettingsEditorComponent);
  }

  DownloadSourceCode() {
    this.dialogEditor.open(WafDownloadCodeComponent);
  }

  DownloadWafFile() {
    this.dialogEditor.open(WafDownloadFilewafComponent);
  }

}
