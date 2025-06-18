import { Component, OnInit} from '@angular/core';
import {RestService} from "../services/rest-service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit{

  countries: any = [];
  states: any = [];

  constructor(private restService: RestService) {
  }

  ngOnInit(): void {
    this.getCountries();
    this.getStates();
  }

  getCountries() {
    this.restService.getCountries().subscribe(countries => {
      this.countries = countries;
    });
  }

  getStates() {
    this.restService.getStates().subscribe(states => {
      this.states = states;
    });
  }
}
