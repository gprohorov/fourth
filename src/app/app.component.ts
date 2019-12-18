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
  items = [];

  constructor(private http: HttpClient) {
    this.search();
  }
  search() {
    this.http.get('http://localhost:8080/student/list')
      .subscribe((response) => {
        this.response = response;
        this.items = this.response;
        console.log(this.response);

    });
  }
/*
  constructor(svc: MyServiceService) {
    svc.toCosole('Smth ');
  }
  */



}
