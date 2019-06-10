import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from "@angular/common/http";

import { DragDropModule } from '@angular/cdk/drag-drop';

import { RouterModule, Routes } from '@angular/router';

//

import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatTooltipModule,
  MatTreeModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatListModule,
  MatChipsModule
}
from '@angular/material';

import { MatDialogModule } from '@angular/material/dialog';

//

//Services
import { WafMainService } from './waf-services/waf-main.service';
import { WafDataService } from './waf-services/waf-data.service';
import { WafSettingsService } from './waf-services/waf-settings.service';
import { WafFunctionService } from './waf-services/waf-function.service';

//Component
import { WafMainComponent } from './waf-main/waf-main.component';
import { WafPreviewComponent } from './waf-preview/waf-preview.component';
import { WafPagenotfoundComponent } from './waf-pagenotfound/waf-pagenotfound.component';
//
import { WafLeftbarComponent } from './waf-leftbar/waf-leftbar.component';
import { WafDownloadCodeComponent } from './waf-leftbar/waf-download-code/waf-download-code.component';
import { WafSettingsEditorComponent } from './waf-leftbar/waf-settings-editor/waf-settings-editor.component';
import { WafDownloadFilewafComponent } from './waf-leftbar/waf-download-filewaf/waf-download-filewaf.component';
import { WafImportFilewafComponent } from './waf-leftbar/waf-import-filewaf/waf-import-filewaf.component';
//
import { WafLeftpanelComponent } from './waf-leftpanel/waf-leftpanel.component';
import { WafLeftpanelAComponent } from './waf-leftpanel-a/waf-leftpanel-a.component';
import { WafNodeOptionsComponent } from './waf-leftpanel-a/waf-node-options/waf-node-options.component';
//
import { WafCentralspaceComponent } from './waf-centralspace/waf-centralspace.component';
//
import { WafRightbarComponent } from './waf-rightbar/waf-rightbar.component';
//
import { WafRightpanelComponent } from './waf-rightpanel/waf-rightpanel.component';
import { WafRightpanelAComponent } from './waf-rightpanel-a/waf-rightpanel-a.component';
import { WafRightpanelBComponent } from './waf-rightpanel-b/waf-rightpanel-b.component';
import { WafRigthsectionComponent } from './waf-rightpanel/waf-rigthsection/waf-rigthsection.component';
import { WafRigthsectionAComponent } from './waf-rightpanel/waf-rigthsection-a/waf-rigthsection-a.component';
import { WafRigthsectionBComponent } from './waf-rightpanel/waf-rigthsection-b/waf-rigthsection-b.component';
import { WafRigthsectionCComponent } from './waf-rightpanel/waf-rigthsection-c/waf-rigthsection-c.component';
import { WafRigthsectionDComponent } from './waf-rightpanel/waf-rigthsection-d/waf-rigthsection-d.component';
import { WafRigthsectionEComponent } from './waf-rightpanel/waf-rigthsection-e/waf-rigthsection-e.component';
import { WafRigthsectionFComponent } from './waf-rightpanel/waf-rigthsection-f/waf-rigthsection-f.component';
import { WafRigthsectionGComponent } from './waf-rightpanel/waf-rigthsection-g/waf-rigthsection-g.component';
import { WafRigthsectionHComponent } from './waf-rightpanel/waf-rigthsection-h/waf-rigthsection-h.component';
import { WafRigthsectionIComponent } from './waf-rightpanel/waf-rigthsection-i/waf-rigthsection-i.component';
import { WafRigthsectionLComponent } from './waf-rightpanel/waf-rigthsection-l/waf-rigthsection-l.component';
import { WafRigthsectionMComponent } from './waf-rightpanel/waf-rigthsection-m/waf-rigthsection-m.component';
import { WafRigthsectionNComponent } from './waf-rightpanel/waf-rigthsection-n/waf-rigthsection-n.component';
import { WafRightsectionMainComponent } from './waf-rightpanel/waf-rigthsection/waf-rightsection-main/waf-rightsection-main.component';
import { WafRightsectionMainAComponent } from './waf-rightpanel/waf-rigthsection/waf-rightsection-main-a/waf-rightsection-main-a.component';
import { WafRightsectionMainBComponent } from './waf-rightpanel/waf-rigthsection/waf-rightsection-main-b/waf-rightsection-main-b.component';
import { WafRightpanelSectionbaseComponent } from './waf-rightpanel/waf-rightpanel-sectionbase/waf-rightpanel-sectionbase.component';
import { WafRightsectionMenustyleComponent } from './waf-rightpanel/waf-rigthsection/waf-rightsection-main/waf-rightsection-menustyle/waf-rightsection-menustyle.component';

//Routes

const appRoutes: Routes = [
  { path: 'main', component: WafMainComponent },
  { path: 'preview', component: WafPreviewComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: WafPagenotfoundComponent }
];

//

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatTooltipModule,
    MatTreeModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatListModule,
    MatChipsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  declarations: [
    AppComponent,
    WafMainComponent,
    WafPreviewComponent,
      WafPagenotfoundComponent,
    WafLeftbarComponent,
    WafLeftpanelComponent,
    WafCentralspaceComponent,
    WafRightbarComponent,
    WafRightpanelComponent,
    WafLeftpanelAComponent,
    WafRightpanelAComponent,
    WafRightpanelBComponent,
    WafRigthsectionComponent,
    WafRigthsectionAComponent,
    WafRigthsectionBComponent,
    WafRigthsectionCComponent,
    WafRigthsectionDComponent, 
    WafRigthsectionEComponent,
    WafSettingsEditorComponent,
    WafRightsectionMainComponent,
    WafRightsectionMainAComponent,
    WafNodeOptionsComponent,
    WafRigthsectionFComponent,
    WafDownloadCodeComponent,
    WafRigthsectionGComponent,
    WafRigthsectionHComponent,
    WafRigthsectionIComponent,
    WafRigthsectionLComponent,
    WafRigthsectionMComponent,
    WafRigthsectionNComponent,
    WafRightsectionMainBComponent,
    WafRightpanelSectionbaseComponent,
    WafRightsectionMenustyleComponent,
    WafDownloadFilewafComponent,
    WafImportFilewafComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    WafMainService,
    WafDataService,
    WafSettingsService,
    WafFunctionService
  ],
  entryComponents: [
    WafSettingsEditorComponent,
    WafNodeOptionsComponent,
    WafDownloadCodeComponent,
    WafRightsectionMenustyleComponent,
    WafDownloadFilewafComponent,
    WafImportFilewafComponent
  ]
})
export class AppModule { }
