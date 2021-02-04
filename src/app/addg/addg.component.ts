import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Route, Router } from '@angular/router'
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-addg',
  templateUrl: './addg.component.html',
  styleUrls: ['./addg.component.css']
})
export class AddgComponent implements OnInit {
  body: any;
  id: any;
  
  addrefrence(){
    let refSeq = 2
    var refdiv = document.getElementById("refdiv");

    var reflink = document.createElement("input")
    reflink.type = "text";
    reflink.className = "input"
    reflink.id = "ref_link" + refSeq
    reflink.name = "ref_link" + refSeq

    var reflink_lable = document.createElement('Label')
    reflink_lable.setAttribute("for", "ref_link" + refSeq)
    reflink_lable.textContent = "Refrences - Link"

    var refname = document.createElement("input")
    refname.type = "text";
    refname.className = "input"
    refname.id = "ref_name" + refSeq
    refname.name = "ref_name" + refSeq

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

  var rellink_lable = document.createElement('Label')
  rellink_lable.setAttribute("for", "rel_link" + relSeq)
  rellink_lable.textContent = "Related - Link:"

  var relname = document.createElement("input")
  relname.type = "text";
  relname.className = "input"
  relname.id = "rel_name" + relSeq
  relname.name = "rel_name" + relSeq

  var relname_lable = document.createElement('Label')
  relname_lable.setAttribute("for", "rel_name" + relSeq)
  relname_lable.textContent = "Related - Name:"

  relSeq++;
  reldiv.appendChild(relname_lable)
  reldiv.appendChild(relname);
  reldiv.appendChild(rellink_lable)
  reldiv.appendChild(rellink);
}

  constructor(private data : DataService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    this.body = form.value;
    console.log(form.value)
      this.data.addData(this.body).subscribe(res => {
        this.router.navigateByUrl("admin");
      },
      err => {
        this.router.navigateByUrl("admin");
      })
  }

}
