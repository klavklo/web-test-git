import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-name-edit',
  templateUrl: './name-edit.component.html',
  styleUrls: ['./name-edit.component.css']
})
export class NameEditComponent {
  name = new FormControl();

  updateName() {
    this.name.setValue('Nancy');
  }
}
