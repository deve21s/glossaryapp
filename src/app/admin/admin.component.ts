import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  alldata = null;
  id = null;
  count = null;
  filter;
  p: number = 1;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private router: Router,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle(`Glossary App - Admin`);
    this.data.getData().subscribe((res) => {
      this.alldata = res;
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }

  deleteItem(i) {
    this.data.delete(i._id).subscribe();
    this.alldata = this.alldata.filter((item) => item._id != i._id);
    this.router.navigateByUrl('/reload');
  }
}
