import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private _http;
    //private _apiUrl = "https://localhost:5051/api/Values/";
  private _apiUrl = "https://guerillaprogrammer-azdemo-api.azurewebsites.net/api/Values/";
  private message;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._http = http;
  }

  private handleResponse(response) {
    debugger;
    //unpack the response and show the results
    //for now just show the first
    if (0 == response.length) {
      this.message = "No results found";
      return;
    }

    //need to process multiple results
    this.message = response;

  }

  private handleError(error) {
    debugger;
    this.message = "Error: " + error.message;
  }

  private callAPI()
  {
      debugger;
      this.message = "Calling API";

      let id = 10;

      let config = { headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Accept": "application/json"
      }};
  
      let callUrl = this._apiUrl + id;

      try {
        this._http.get(callUrl, config).subscribe(result => { this.handleResponse(result);}, error => this.handleError(error));
      } catch (e) {
        debugger;
        console.log("error - " + e);
      }
  }
}
