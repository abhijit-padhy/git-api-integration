import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userdata: any;
  keys: any = [];
  repos: any;
  constructor(public _service: FetchService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('login');
    this.userdata = this._service.data1[id];
    let _url = this.userdata['repos_url'];
    this.keys = Object.keys(this.userdata);
    console.log(_url);
        this._service.getUserList(_url)
          .subscribe((response) => {            
            this.repos = response;
            console.log("item resp:",this.repos);
            
          }
          ); 
  }

}
