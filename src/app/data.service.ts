import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import jwtDecode, { JwtDecodeOptions } from 'jwt-decode'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseurl = 'https://myglossary.herokuapp.com';
  // baseurl = 'http://localhost:5000'
  user
  constructor(private http: HttpClient, private local: LocalStorageService) {
    this.user =  this.local.retrieve('user')
  }
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
    let end = '/delete/' + id +"?"+ "token"+ "=" + this.user;
    return this.http.get(this.baseurl + end);
  }
  auth(body){
    let end = "/auth"
    return this.http.get(this.baseurl + end, body)
  }

  addData(body) {
    let end = '/new' +"?"+ "token"+ "=" + this.user;
    //change here again
    return this.http.post(this.baseurl + end, body);
  }
  editData(id, body) {
    let end = '/edit/' + id +"?"+ "token"+ "=" + this.user;
    return this.http.post(this.baseurl + end, body);
  }
  like(id, body) {
    let end = '/likes/' + id +"?"+ "token"+ "=" + this.user;
    return this.http.post(this.baseurl + end, body);
  }
  dislike(id, body) {
    let end = '/dislike/' + id +"?"+ "token"+ "=" + this.user;
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
    let end = '/comment/' + id +"?"+ "token"+ "=" + this.user;
    return this.http.post(this.baseurl + end, body);
  }
  makereply(cid, body) {
    let end = '/reply/' + cid +"?"+ "token"+ "=" + this.user;
    return this.http.post(this.baseurl + end, body);
  }
  isLoggedIn() {
    let token = this.local.retrieve('user')
    if (token) {
      let decode = jwtDecode(token)
      if(decode["Roles"] === "user" || decode["Roles"] === "admin"){
        return true;
      }
      return false
      
    } else {
      return false;
    }
  }
}
