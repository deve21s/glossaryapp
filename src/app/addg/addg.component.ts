import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Route, Router } from '@angular/router'
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';



@Component({
  selector: 'app-addg',
  templateUrl: './addg.component.html',
  styleUrls: ['./addg.component.css']
})
export class AddgComponent implements OnInit {
  body: any;
  id: any;
  value
  
  addrefrence(){
    let refSeq = 2
    var refdiv = document.getElementById("refdiv");

    var reflink = document.createElement("input")
    reflink.type = "text";
    reflink.className = "input"
    reflink.id = "ref_link" + refSeq
    reflink.name = "ref_link" + refSeq
    reflink.setAttribute('ngModel', '')

    var reflink_lable = document.createElement('Label')
    reflink_lable.setAttribute("for", "ref_link" + refSeq)
    reflink_lable.textContent = "Refrences - Link"

    var refname = document.createElement("input")
    refname.type = "text";
    refname.className = "input"
    refname.id = "ref_name" + refSeq
    refname.name = "ref_name" + refSeq
    refname.setAttribute('ngModel', '')

    var refname_lable = document.createElement('Label')
    refname_lable.setAttribute("for", "ref_name" + refSeq)
    refname_lable.textContent = "Refrences - Name"


    refSeq++;
    refdiv.appendChild(refname_lable)
    refdiv.appendChild(refname);
    refdiv.appendChild(reflink_lable)
    refdiv.appendChild(reflink);    
}

addreleted(){
  let relSeq = 2;
  var reldiv = document.getElementById("reldiv");

  var rellink = document.createElement("input")
  rellink.type = "text";
  rellink.className = "input"
  rellink.id = "rel_link"
  rellink.name = "rel_link" + relSeq
  rellink.setAttribute('ngModel', '')

  var rellink_lable = document.createElement('Label')
  rellink_lable.setAttribute("for", "rel_link" + relSeq)
  rellink_lable.textContent = "Related - Link:"

  var relname = document.createElement("input")
  relname.type = "text";
  relname.className = "input"
  relname.id = "rel_name" + relSeq
  relname.name = "rel_name" + relSeq
  relname.setAttribute('ngModel', '')

  var relname_lable = document.createElement('Label')
  relname_lable.setAttribute("for", "rel_name" + relSeq)
  relname_lable.textContent = "Related - Name:"

  relSeq++;
  reldiv.appendChild(relname_lable)
  reldiv.appendChild(relname);
  reldiv.appendChild(rellink_lable)
  reldiv.appendChild(rellink);
}

  constructor(private data : DataService, private router: Router, private fb : FormBuilder) { }
  glossaryForm: FormGroup;

  ngOnInit() {

    /* Initiate the form structure */
    this.glossaryForm = this.fb.group({
      title: [],
      details: [],
      ref: this.fb.array([this.fb.group({name:'',link:''})]),
      rel: this.fb.array([this.fb.group({name:'',link:''})])
    })
  }
  // ngOnInit(): void {

  // }
  get ref() {
    return this.glossaryForm.get('ref') as FormArray;
  }
  get rel() {
    return this.glossaryForm.get('rel') as FormArray;
  }
  addSellingPoint() {
    this.ref.push(this.fb.group({name:'',link:''}));
  }

  deleteSellingPoint(index) {
    this.ref.removeAt(index);
  }
  addrel() {
    this.rel.push(this.fb.group({name:'',link:''}));
  }

  deleterel(index) {
    this.rel.removeAt(index);
  }
  save() {
    this.value = this.value;
  }

  onSubmit(form: NgForm) {
    this.body = this.glossaryForm.value;
      this.data.addData(this.body).subscribe(res => {
        this.router.navigateByUrl("admin");
      },
      err => {
        this.router.navigateByUrl("admin");
      })
  }

}
