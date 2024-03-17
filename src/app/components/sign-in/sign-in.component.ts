import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService
  ) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() { }

  signIn() {
    if (this.signInForm.valid) {
      const email = this.signInForm.get('email')?.value;
      const password = this.signInForm.get('password')?.value;
      this.authService.SignIn(email, password);
    } else {
      console.log("Invalid form");
    }
  }
}
