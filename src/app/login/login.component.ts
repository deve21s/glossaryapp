import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {NgForm} from '@angular/forms';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { Router } from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  body = null;
  
  constructor(private data: DataService,private localSt:LocalStorageService, private router : Router) { }

  ngOnInit(): void { 
    
  }
  onSubmit(form: NgForm) {
    this.body = form.value;
      this.data.login(this.body).subscribe(res => {
        this.localSt.store('user', res)
        console.log(this.router.navigateByUrl("admin"))
      },
      err => {
        this.router.navigateByUrl("login");
      })
  }
}
