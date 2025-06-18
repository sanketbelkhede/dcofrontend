import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {
  }

  onStart() {
    console.log('Starting...');
    this.router.navigate(['/add-user']);
  }
}
