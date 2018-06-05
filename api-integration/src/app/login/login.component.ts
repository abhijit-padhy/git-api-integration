import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  userList: any = [];
  constructor(private _service: FetchService) { }

  ngOnInit() {
  }

  login(){
    if(this.userName){
        let _url = "https://api.github.com/search/users?q="+this.userName;
        this._service.getUserList(_url)
          .subscribe((response) => {            
            this.userList = response['items'];
            this._service.data1 = response['items'];
          }
          );        
    }
};
showData(){
  
    // var str = JSON.stringify(data);
    // dataService.data = data;
    // $location.path("/home");
}
}
