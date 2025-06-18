import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    pathMatch: 'full',
  }
];
