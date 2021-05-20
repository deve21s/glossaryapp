import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  body = null;
  token
  apiResponse
  massage

  constructor(
    private data: DataService,
    private localSt: LocalStorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {
    this.token = "";
    this.apiResponse = "";
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.token = params['token'];
      console.log(this.token)
    })
  }
  loginradius(){
    this.data.loginfirst().subscribe(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log('error')
      }
    )
  }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  onSubmit(form: NgForm) {
    this.body = this.loginForm.value;
    this.data.login(this.body).subscribe(
      (res) => {
        this.localSt.store('user', res);
        this.router.navigateByUrl('admin');
        console.log("here")
      },
      (err) => {
        this.massage = err.error.text
        console.log(err.error.text)
        // this.router.navigateByUrl('login');
      }
    );
  }
}
