import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  body: any;
  searchres;
  letter: Object;

  constructor(
    private localst: LocalStorageService,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit() {}


  islogin() {
    if (this.data?.isLoggedIn()) {
      return 'logout';
    } else {
      return 'login';
    }
  }
  logout() {
    this.localst.clear('user');
    return this.router.navigateByUrl('');
  }
}
