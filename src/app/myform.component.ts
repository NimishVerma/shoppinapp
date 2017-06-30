import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User }   from './shared/myformdata';

@Component({
  selector: 'my-form',
  templateUrl:'./templates/form.html',
  styleUrls:['./myforms.css'],
})

export class MyFormComponent{
model = new User('','','','');
submitted = false;

  onSubmit() { this.submitted = true;

              }

   }
