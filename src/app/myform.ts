import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { MyFormComponent } from './myform.component';


@NgModule({
  imports:      [ FormsModule ],
  declarations: [ MyFormComponent ],
  exports:      [ MyFormComponent ]
})
export class MyForm { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
