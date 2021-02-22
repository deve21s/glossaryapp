import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DataService } from '../data.service';
import * as algoliasearch from "algoliasearch/lite";

const searchClient = algoliasearch(
  "B1G2GM9NG0",
  "aadef574be1f9252bb48d4ea09b5cfe5"
);

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  config = {
    indexName: "demo_ecommerce",
    searchClient
  };
  public searchParameters = {
    query: ""
  };

  public setQuery({ query }: { query: string }) {
    this.searchParameters.query = query;
  }



 // searchres
  @Input() searchres
  id: string;
  constructor(private data: DataService, private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      
      this.id = params.get('name')
      this.data.getsearch(this.id).subscribe( (res) =>{
        //this.searchres = res
      })
      
    })
  }


}
