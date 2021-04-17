import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Route, Router } from '@angular/router'
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-addg',
  templateUrl: './addg.component.html',
  styleUrls: ['./addg.component.css']
})
export class AddgComponent implements OnInit {
  body: any;
  id: any;
  value
 
  constructor(private data : DataService, private router: Router, private fb : FormBuilder, private title : Title) { }
  glossaryForm: FormGroup;

  ngOnInit() {
    this.title.setTitle(`Glossary App - AddGlossary`)
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
