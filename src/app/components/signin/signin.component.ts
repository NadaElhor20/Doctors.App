import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  SigninForm!: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder) { 
   
  }

  ngOnInit(): void {

    this.SigninForm = this.fb.group({
      
      email: '',
     
      password: ['', Validators.required],
     
    });

  }

  onSubmit() {
    this.isSubmitted = true;

    console.log(this.SigninForm.value);

    

    setTimeout(() => {
      this.isSubmitted = false;
    }, 3000);
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.SigninForm.controls;
  }

}
