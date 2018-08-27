// callback.component.ts

import { Component } from '@angular/core';
import { OktaAuthService } from './app.service';

@Component({ template: `<p>callback</p>` })
export class CallbackComponent {

  constructor(private okta: OktaAuthService) {
    // Handles the response from Okta and parses tokens
    this.okta.handleAuthentication();
  }
}