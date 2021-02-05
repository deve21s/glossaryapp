import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { LocalStorageService } from 'ngx-webstorage'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  baseurl = 'https://myglossary.herokuapp.com'
  constructor(private http : HttpClient, private local : LocalStorageService ) { }

  getData() {
    return this.http.get(this.baseurl)
  }
  geteditData(id) {
    let end = '/edit/' + id
    return this.http.get(this.baseurl + end)
  }
  getDataByletter(id) {
    let end = '/' + id
    return this.http.get(this.baseurl + end)
    console.log
  }
  
  getDataByid(id) {
    let end = '/details/' + id
    return this.http.get(this.baseurl + end)
    console.log
  }
  
  delete(id){
    let end = '/delete/' + id
    return this.http.get(this.baseurl+end)
  }
  
  addData(body) {
    let end = "/new"
    console.log(body)
    return this.http.post(this.baseurl+end,body)
  }
  editData(id,body) {
    let end = "/edit/" + id
    console.log(body)
    return this.http.post(this.baseurl+end,body)
  }

  login(body) {
    let end = '/login'
    console.log(body)
    return this.http.post(this.baseurl+end,body)
  }
  isLoggedIn(){
    if(this.local.retrieve('user')){
      return true
    }else{
      return false
    }
  }
  
  


}
