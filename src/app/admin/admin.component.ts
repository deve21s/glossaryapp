import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  alldata = null;
  id = null;
  count = null;

  constructor(private route : ActivatedRoute, private data : DataService, private router: Router) { }

  ngOnInit(): void {

    this.data.getData().subscribe( (res) => {
      this.alldata = res
    } )
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
    })
  }

  deleteItem(i){
    this.data.delete(i._id).subscribe( res => this.router.navigateByUrl('reload'))
     
  }

}
