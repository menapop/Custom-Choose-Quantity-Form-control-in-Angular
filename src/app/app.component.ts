import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reusabletest';
  form :FormGroup = this.fb.group({
    totalQuantity : [0,[Validators.required, Validators.max(100)]],
    cv :[null,[Validators.required]]
  })
  constructor(private fb : FormBuilder) {
    

  }
  test()
  {
    console.log(this.form)
  }
  s(w:number)
  {
  alert(w)
  }
}
