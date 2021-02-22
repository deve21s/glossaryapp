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
  }
  
  getDataByid(id) {
    let end = '/details/' + id
    return this.http.get(this.baseurl + end)
  }
  
  delete(id){
    let end = '/delete/' + id
    return this.http.get(this.baseurl+end)
  }
  
  addData(body) {
    let base = 'http://localhost:5000'
    let end = "/new"
    //change here again
    return this.http.post(base+end,body)
  }
  editData(id,body) {
    let end = "/edit/" + id
    return this.http.post(this.baseurl+end,body)
  }

  login(body) {
    let end = '/login'
    return this.http.post(this.baseurl+end,body)
  }
  getsearch(title) {
    let end = '/search/' + title
    let base = 'http://localhost:5000'
    return this.http.get(base + end)
  }
  isLoggedIn(){
    if(this.local.retrieve('user')){
      return true
    }else{
      return false
    }
  }
  
  


}
