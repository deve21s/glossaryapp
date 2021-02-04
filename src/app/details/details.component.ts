import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  word = null;
  id = null;
  constructor(private route: ActivatedRoute,private data: DataService) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params.id;
    console.log(this.id);

    if(this.id){
    this.data.getDataByid(this.id).subscribe( (res)=> {
      this.word = res;
      console.log(res)
    })
    
    }
    

  }

}
