import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'web2-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <web2-analog-welcome /> `,
})
export default class HomeComponent {}
