import { Component } from '@angular/core';

/**
 * Generated class for the EditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit',
  templateUrl: 'edit.html'
})
export class EditComponent {

  text: string;

  constructor() {
    console.log('Hello EditComponent Component');
    this.text = 'Hello World';
  }

}
