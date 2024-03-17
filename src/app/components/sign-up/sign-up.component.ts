import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userEmail: string = '';
  userPwd: string = '';
  constructor(
    public authService: AuthService
  ) { }
  signUp(): void {
    this.authService.SignUp(this.userEmail, this.userPwd);
  }
  ngOnInit() { }
}