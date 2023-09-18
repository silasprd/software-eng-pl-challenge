import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit{

  dataLoaded = false;

  constructor() { }

  ngOnInit(): void {
    this.dataLoaded = true;
  }

  @Input()
  control!: FormControl

  @Input()
  placeholder!: string

  @Input()
  label!: string

}
