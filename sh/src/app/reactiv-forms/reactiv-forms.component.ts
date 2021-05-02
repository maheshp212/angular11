import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiv-forms',
  templateUrl: './reactiv-forms.component.html',
  styleUrls: ['./reactiv-forms.component.scss']
})
export class ReactivFormsComponent implements OnInit {

  loginFormGroup:FormGroup;
  isFormSubmitted:boolean = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      fname:[null, [Validators.required, Validators.minLength(5), , Validators.maxLength(10)]],
      lname:[null,[Validators.required]],
      age:[null, [Validators.required, Validators.min(18), Validators.max(40)]],
      email:[null, [Validators.required]],
      contact:[null, [Validators.required, Validators.pattern('[789][0-9]{9}')]],
      dob:[null, [Validators.required]],
    })
  }

  /**
   * need explantion
   */
  get formControls(){
    return this.loginFormGroup.controls;
  }

  login(){
    this.isFormSubmitted = true;
    if(this.loginFormGroup.valid){
      alert('validations successfull');
      
      console.log(this.loginFormGroup.value);
    } else  {
      alert('validation failed')
    }
    
  }

}
