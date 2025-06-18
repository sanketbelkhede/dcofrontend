import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})

export class RestService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(this.apiUrl + 'api/countries');
  }

  getStates() {
    return this.http.get(this.apiUrl + 'api/states?countryId=' + 2);
  }
}
