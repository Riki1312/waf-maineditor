import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

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

  classArray: string[] = ["Class01"];
  allClass: string[] = ["Class02", "aClass02", "aClass03", "cClass04", "Class05"];
  selectedClass: string;

  @ViewChild('classInput', { static: false }) classInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  //

  constructor() {
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
        this.classArray.push(value.trim());
      }
      //Reset input value
      if (input) {
        input.value = '';
      }

      this.classlistCtrl.setValue(null);
    }
  }
  RemoveClass(item: string): void {
    const index = this.classArray.indexOf(item);

    if (index >= 0) {
      this.classArray.splice(index, 1);
    }
  }
  Selected(event: MatAutocompleteSelectedEvent): void {
    this.classArray.push(event.option.viewValue);
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

}
