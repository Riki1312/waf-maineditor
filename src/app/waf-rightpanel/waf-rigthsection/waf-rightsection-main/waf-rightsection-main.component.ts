import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { WafMainService, WafStyle } from '../../../waf-services/waf-main.service';
import { WafDataService } from '../../../waf-services/waf-data.service';

//
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
//

/*
--> TODO: Gestire l'aggiunta della stassa classe più di una volta (anche anuto complete).
*/

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

  private selectedStyle: WafStyle;

  //

  get classArray(): string[] {
    if (this.DataService.SelectedNode)
      return this.DataService.SelectedNode.data.className;
    else
      return undefined;
  }
  get allClass(): string[] {
    let result: string[] = [];
    this.DataService.Styles.forEach(x => result.push(x.className));
    return result;
  }
  get selectedClass(): string {
    this.CheckSelectedNode();

    if (this.selectedStyle)
      return this.selectedStyle.className;
    else
      return undefined;
  }
  set selectedClass(value) {
    this.selectedStyle = this.DataService.FindStyleByClass(value);
  }

  //

  @ViewChild('classInput', { static: false }) classInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  //

  constructor(private MainService: WafMainService, private DataService: WafDataService) {
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
    this.DataService.AddStyle(className);

    if (!this.DataService.SelectedNode.data.className)
      this.DataService.SelectedNode.data.className = [];

    this.DataService.SelectedNode.data.className.push(className);
  }

  private RemoveClassToNode(className: string): void {
    const index = this.DataService.SelectedNode.data.className.indexOf(className);

    if (index >= 0) {
      this.DataService.SelectedNode.data.className.splice(index, 1);
    }
  }

  private CheckSelectedNode(): void {
    if (
      (
        this.DataService.SelectedNode &&
        this.selectedStyle &&
        this.DataService.SelectedNode.data.className &&
        this.DataService.SelectedNode.data.className.indexOf(this.selectedStyle.className) === -1
      )
      ||
      (
        this.DataService.SelectedNode &&
        this.selectedStyle &&
        !this.DataService.SelectedNode.data.className
      )
    ) {
      this.selectedStyle = undefined;
    }
  }

}
