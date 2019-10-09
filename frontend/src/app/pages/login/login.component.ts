import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sharebinLogo = "../../../assets/ShareBin_Logo.png";
  registerForm: FormGroup;
  submitted = false;
  users: string[] = ["shaheer@1", "sergio@2", "johans@3"];
  passwords: string[] = ["shaheer", "sergio", "johans"];

  constructor(private route: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  goHome() {
    this.route.navigateByUrl('/home');
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    let introducedEmail:string = this.registerForm.controls.email.value;
    let introducedPassword:string = this.registerForm.controls.password.value;

    if(this.users.includes(introducedEmail) && this.passwords.includes(introducedPassword)){
      this.goHome();
    }else{
      document.getElementById("errorAlert").style.display = "block";
      console.log("Error!");
    }
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}
