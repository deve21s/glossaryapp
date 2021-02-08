import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  alphabet = ['all','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  letter = null;
  id = null;
  
  constructor(private data: DataService, private route : ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      
      this.id = params.get('id')
    if(this.id !== 'all'){
      this.data.getDataByletter(this.id).subscribe( (res) => {
        this.letter = res;
      })
    }else {
      this.data.getData().subscribe( (res)=> {
        this.letter = res;
      })
    }
    })
  
    // this.data.getsearch(this.body).subscribe(res => {
    //     this.searchres = res
    //   },
    //   err => {
    //     console.log(err)
    //   })
  }

}
