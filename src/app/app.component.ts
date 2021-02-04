import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private localst : LocalStorageService,private router: Router) {}
  title = 'glossaryapp';
  
  islogin() {
    if(this.localst.retrieve('user')){
      return 'logout'
    }
    else{
      return 'login'
    }
  }
  logout() {
      this.localst.clear('user')
      return this.router.navigateByUrl("")
  }



}
