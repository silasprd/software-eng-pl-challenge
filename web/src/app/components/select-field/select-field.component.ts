import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent {

  @Input()
  control!: FormControl

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
}
