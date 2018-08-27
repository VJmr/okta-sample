// app.component.ts

import { Component } from '@angular/core';
import { OktaAuthService as okta } from './app.service';
import { Router } from "@angular/router";
//import * as OktaAuth from '@okta/okta-auth-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isAuthenticated: boolean;
  constructor(public oktaAuth: okta, private router: Router) {
    
  }
  login(){
    this.oktaAuth.login();
  }
  ngOnInit() {
    //this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    //console.log(this.oktaAuth.isAuthenticated());
    let t= this;
    this.oktaAuth.isAuthenticated().then(function(response){
      console.log(response);
      if(!response){
        t.oktaAuth.login();
      }
      
    })
  }
}