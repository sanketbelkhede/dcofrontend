import { Component, OnInit} from '@angular/core';
import {RestService} from "../services/rest-service";
import {NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatError } from '@angular/material/form-field';
import {MessageService} from "../services/message.service"; // for mat-error
@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    NgIf,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatError
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit{

  countries: any = [];
  states: any = [];

  userForm!: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder, private restService: RestService, private messageService: MessageService) {}
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      panCard: ['', [Validators.required, Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]]
    });
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

  submit() {
    this.restService.verifyUser(this.userForm.value).subscribe((reply: any) => {
      this.messageService.closableSnackBar(reply.message);
    })
  }

  reset() {
    console.log("reset")
    this.userForm.reset();
  }
}
