import { Component } from '@angular/core';
import {MyServiceService} from './my-service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  param: string;
  response: any;

  constructor(private http: HttpClient){

  }
  search(){
    this.http.get('url')
      .subscribe((response) =>{
        this.response = response;
        console.log(this.response);

    });
  }
/*
  constructor(svc: MyServiceService) {
    svc.toCosole('Smth ');
  }
  */



}
