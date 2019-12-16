import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  constructor() { }

  toCosole(arg) {
    console.log(arg);
  }
}
