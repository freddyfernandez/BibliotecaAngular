import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session2teoria',
  template: `
    <div>
      <!-- Hello, Padma -->
      <h1>Template desde el archivo . ts</h1>
      <h2>{{customer}}</h2>
      <ul>
        <!-- Ebony and Chiho in a list-->
        <li *ngFor="let customer of customers">{{ customer.value }}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./session2teoria.component.css']
})
export class Session2teoriaComponent implements OnInit {
  customers = [{value: 'Ebony'}, {value: 'Chiho'}];
  customer = 'listado';
  constructor() { }

  ngOnInit(): void {
  }

}
