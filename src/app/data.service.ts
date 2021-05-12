import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseurl = 'https://myglossary.herokuapp.com';
  constructor(private http: HttpClient, private local: LocalStorageService) {}

  getData() {
    return this.http.get(this.baseurl);
  }
  geteditData(id) {
    let end = '/edit/' + id;
    return this.http.get(this.baseurl + end);
  }
  getDataByletter(id) {
    let end = '/' + id;
    return this.http.get(this.baseurl + end);
  }
  //change letter
  getDataByid(id) {
    let end = '/details/' + id;
    return this.http.get(this.baseurl + end);
  }

  delete(id) {
    let end = '/delete/' + id;
    return this.http.get(this.baseurl + end);
  }

  addData(body) {
    let end = '/new';
    //change here again
    return this.http.post(this.baseurl + end, body);
  }
  editData(id, body) {
    let end = '/edit/' + id;
    return this.http.post(this.baseurl + end, body);
  }
  like(id, body) {
    let end = '/likes/' + id;
    return this.http.post(this.baseurl + end, body);
  }
  dislike(id, body) {
    let end = '/dislike/' + id;
    return this.http.post(this.baseurl + end, body);
  }

  login(body) {
    let end = '/login';
    return this.http.post(this.baseurl + end, body);
  }
  getsearch(title) {
    let end = '/search/' + title;
    return this.http.get(this.baseurl + end);
  }
  makecomment(id, body) {
    let end = '/comment/' + id;
    return this.http.post(this.baseurl + end, body);
  }
  makereply(cid, body) {
    let end = '/reply/' + cid;
    return this.http.post(this.baseurl + end, body);
  }
  isLoggedIn() {
    if (this.local.retrieve('user')) {
      return true;
    } else {
      return false;
    }
  }
  loginfirst(){
    let end = 'https://dev-bw4tzgej5i5.hub.loginradius.com/auth.aspx?action=register&return_url=https://localhost:4200/login'
    return this.http.get(end);
  }
}
