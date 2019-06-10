import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { WafDataService } from '../../../waf-services/waf-data.service';
import { WafFunctionService } from '../../../waf-services/waf-function.service';

import { WafStyleClass } from '../../../waf-services/waf-style/waf-style-class';

import { WafRightsectionMenustyleComponent } from './waf-rightsection-menustyle/waf-rightsection-menustyle.component';

//

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

//

@Component({
  selector: 'app-waf-rightsection-main',
  templateUrl: './waf-rightsection-main.component.html',
  styleUrls: ['./waf-rightsection-main.component.css']
})
export class WafRightsectionMainComponent implements OnInit {

  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ ENTER, COMMA ];
  classlistCtrl = new FormControl();
  filteredClasslist: Observable<string[]>;

  //

  get classArray(): string[] {
    if (this.DataService.SelectedNode)
      return this.DataService.SelectedNode.data.className;
    else
      return undefined;
  }
  get allClass(): string[] {
    let result: string[] = [];
    this.DataService.Styles.forEach(x => {
      if (!x.basicWafStyle)
        result.push(x.className)
    });
    return result;
  }
  get selectedClass(): string {
    if (this.DataService.SelectedStyle)
      return this.DataService.SelectedStyle.className;
    else
      return undefined;
  }
  set selectedClass(value) {
    this.FunctionService.SelectStyleByName(value);
  }

  //

  @ViewChild('classInput', { static: false }) classInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  //

  private _StyleCalss: WafStyleClass;

  constructor(private dialogOptions: MatDialog, private DataService: WafDataService, private FunctionService: WafFunctionService) {
    this._StyleCalss = new WafStyleClass(this.DataService, this.FunctionService);
    
    this.filteredClasslist = this.classlistCtrl.valueChanges.pipe(
      startWith(null),
      map((item: string | null) => item ? this._filter(item) : this.allClass.slice())
    );
  }

  ngOnInit() {
  }

  //

  AddClass(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      //Add class
      if ((value || '').trim()) {
        this.AddClassToNode(value.trim());
      }
      //Reset input value
      if (input) {
        input.value = '';
      }

      this.classlistCtrl.setValue(null);
    }
  }
  RemoveClass(item: string): void {
    this.RemoveClassToNode(item);
  }
  Selected(event: MatAutocompleteSelectedEvent): void {
    this.AddClassToNode(event.option.viewValue);
    this.classInput.nativeElement.value = '';
    this.classlistCtrl.setValue(null);
  }
  ClickClasschip(item: any) {
    this.selectedClass = item;
  }

  //

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allClass.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
  }

  //

  private AddClassToNode(className: string): void {
    if (this.DataService.SelectedNode) {
      this._StyleCalss.AddStyle(className);

      if (!this.DataService.SelectedNode.data.className)
        this.DataService.SelectedNode.data.className = [];

      this.DataService.SelectedNode.data.className.push(className);
    }
  }

  private RemoveClassToNode(className: string): void {
    const index = this.DataService.SelectedNode.data.className.indexOf(className);

    if (index >= 0) {
      this.DataService.SelectedNode.data.className.splice(index, 1);
    }
  }

  private DeleteClass(): void {
    this.RemoveClassToNode(this.DataService.SelectedStyle.className);
    this._StyleCalss.DeleteStyle(this.DataService.SelectedStyle.className);
    this.DataService.SelectedStyle = undefined;

    this.ReloadClassList();

    console.log(this.DataService.Styles);
  }

  private OptionsStyle(): void {
    let dialogOptionsRef = this.dialogOptions.open(WafRightsectionMenustyleComponent);
    dialogOptionsRef.afterClosed().subscribe(result => {
      console.log(result);

      if (result) {
        let cssRules = this.DataService.SelectedStyle.cssRules;

        //Remove old
        this.RemoveClassToNode(this.DataService.SelectedStyle.className);
        this._StyleCalss.DeleteStyle(this.DataService.SelectedStyle.className);

        //Add new
        this._StyleCalss.AddStyle(result, cssRules);
        this.AddClassToNode(result);

        //Set selected
        this.DataService.SelectedStyle.className = result;

        //Reload class list
        this.ReloadClassList();
      }
    });
  }

  private ReloadClassList(): void {
    this.filteredClasslist = this.classlistCtrl.valueChanges.pipe(
      startWith(null),
      map((item: string | null) => item ? this._filter(item) : this.allClass.slice())
    );
  }

}
