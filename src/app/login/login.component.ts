import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  showErr: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router,private toastr: ToastrService) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['user', [Validators.required]],
      password: ['user', [Validators.required]]
    });
  }
  get formControls() {
    return this.loginForm.controls;
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      this.toastr.success('Login Successfully..!', '');
      this.router.navigate(['/list']);
      this.loginForm.markAllAsTouched();
    } else {
      this.showErr = true;
      return;

    }
  }

}
