import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import { FormBuilder } from '@angular/forms';

import { Validators } from '@angular/forms';import { FormArray } from '@angular/forms';




@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

  constructor(private fb: FormBuilder) { }

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }


  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      lastName : 'Neysand',
      address: {
        street: '123 Drew Street',
        city : 'khonkon',
        state : 'khonkun',
        zip : '40000',
      },
      aliases : ['Male', 'Female', 'Damn']
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
