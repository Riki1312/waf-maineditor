import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from "@angular/common/http";

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
} from '@angular/material';

import { MatDialogModule } from '@angular/material/dialog';

//

//Services
import { WafMainService } from './waf-services/waf-main.service';
import { WafSettingsService } from './waf-services/waf-settings.service';

import { WafLeftbarComponent } from './waf-leftbar/waf-leftbar.component';
import { WafLeftpanelComponent } from './waf-leftpanel/waf-leftpanel.component';
import { WafCentralspaceComponent } from './waf-centralspace/waf-centralspace.component';
import { WafRightbarComponent } from './waf-rightbar/waf-rightbar.component';
import { WafRightpanelComponent } from './waf-rightpanel/waf-rightpanel.component';
import { WafLeftpanelAComponent } from './waf-leftpanel-a/waf-leftpanel-a.component';
import { WafRightpanelAComponent } from './waf-rightpanel-a/waf-rightpanel-a.component';
import { WafRightpanelBComponent } from './waf-rightpanel-b/waf-rightpanel-b.component';
import { WafRigthsectionComponent } from './waf-rightpanel/waf-rigthsection/waf-rigthsection.component';
import { WafRigthsectionAComponent } from './waf-rightpanel/waf-rigthsection-a/waf-rigthsection-a.component';
import { WafRigthsectionBComponent } from './waf-rightpanel/waf-rigthsection-b/waf-rigthsection-b.component';
import { WafRigthsectionCComponent } from './waf-rightpanel/waf-rigthsection-c/waf-rigthsection-c.component';
import { WafRigthsectionDComponent } from './waf-rightpanel/waf-rigthsection-d/waf-rigthsection-d.component';
import { WafRigthsectionEComponent } from './waf-rightpanel/waf-rigthsection-e/waf-rigthsection-e.component';
import { WafSettingsEditorComponent } from './waf-leftbar/waf-settings-editor/waf-settings-editor.component';
import { WafRightsectionMainComponent } from './waf-rightpanel/waf-rigthsection/waf-rightsection-main/waf-rightsection-main.component';
import { WafRightsectionMainAComponent } from './waf-rightpanel/waf-rigthsection/waf-rightsection-main-a/waf-rightsection-main-a.component';
import { WafNodesService } from './waf-services/waf-nodes.service';


@NgModule({
  imports: [
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
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
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
    WafRightsectionMainAComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ WafMainService, WafSettingsService, WafNodesService ],
  entryComponents: [ WafSettingsEditorComponent ]
})
export class AppModule { }
