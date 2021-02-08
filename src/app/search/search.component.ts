import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchres
  //@Input() searchres
  id: string;
  constructor(private data: DataService, private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      
      this.id = params.get('name')
      this.data.getsearch(this.id).subscribe( (res) =>{
        this.searchres = res
      })
      
    })
  }


}
