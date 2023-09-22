import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent {

  @Input()
  control = new FormControl("")

  @Input()
  placeholder!: string

  @Input()
  label!: string

  @Input()
  listOptions!: any

  @Input()
  labelProp!: any

  @Input()
  valueProp!: any

  selectedValue: any;

  constructor() {
    this.selectedValue = this.control.value;
  }

  @Output()
  selectionChange = new EventEmitter<any>();

  onSelectionChange(event: any) {
    this.selectionChange.emit(event.value);
  }
}
