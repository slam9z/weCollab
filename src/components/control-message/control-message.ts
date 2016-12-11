import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../../providers/providers';

@Component({
  selector: 'control-message',
  template: `<ion-label *ngIf="errorMessage !== null" color="danger" padding-left>{{errorMessage}}</ion-label>`
})
export class ControlMessageComponent {
  @Input() control: FormControl;
  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    
    return null;
  }
}
