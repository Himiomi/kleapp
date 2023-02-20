import { Component, ViewEncapsulation } from '@angular/core';
import {ApiService} from "@kleapp/networking";

@Component({
  selector: 'kleapp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {

  constructor(private apiService:ApiService) {
  }

  getSensorValue() {
    this.apiService.getAllSensor()
  }
}
