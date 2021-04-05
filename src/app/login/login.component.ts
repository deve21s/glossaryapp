import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {NgForm} from '@angular/forms';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  body = null;
  
  constructor(private data: DataService,private localSt:LocalStorageService, private router : Router, private title : Title) { }

  ngOnInit(): void { 
    this.title.setTitle(`Glossary App - Login`)
  }
  onSubmit(form: NgForm) {
    this.body = form.value;
      this.data.login(this.body).subscribe(res => {
        this.localSt.store('user', res)
        this.router.navigateByUrl('admin');
      },
      err => {
        this.router.navigateByUrl("login");
      })
  }
}
