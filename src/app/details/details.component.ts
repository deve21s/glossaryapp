import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  word = null;
  id = null;
  myform;
  body;
  showhide = 'none';
  dlike = false;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    if (this.id) {
      this.data.getDataByid(this.id).subscribe((res) => {
        this.word = res;
      });
    }
  }

  show(replyform) {
    this.showhide = 'block';
  }
  hide() {
    this.showhide = 'none';
  }
  dilike() {
    this.dlike = !this.dlike;
  }
  like() {
    this.data.like(this.id, this.body).subscribe(
      (res) => {
        console.log(res);
        this.dilike();
        location.reload();
      },
      (err) => {
        this.dilike();
        location.reload();
      }
    );
  }
  dislike() {
    this.data.dislike(this.id, this.body).subscribe(
      (res) => {
        console.log(res);
        this.dilike();
        location.reload();
      },
      (err) => {
        this.dilike();
        location.reload();
      }
    );
  }

  onSubmit(form: NgForm) {
    this.body = form.value;
    console.log(this.body);
    this.data.makecomment(this.id, this.body).subscribe(
      (res) => {
        location.reload();
      },
      (err) => {
        location.reload();
      }
    );
  }
  onReply(form: NgForm) {
    this.body = form.value;
    console.log(this.body);
    const { name, text, cid } = this.body;
    const body = new Object({ name, text });
    console.log(body);
    this.data.makereply(cid, body).subscribe(
      (res) => {
        console.log(res);
        location.reload();
      },
      (err) => {
        location.reload();
      }
    );
  }
}
