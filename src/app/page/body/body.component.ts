import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  inputText: string;
  response: any;
  userLocation: any;

  userLocationEnable: boolean = false;
  httpCode: boolean;

  constructor(private https: HttpClient) { 
  }

  ngOnInit() {
    this.userLocationEnable = (this.getCookie() == "true");
    console.log(this.getCookie);
  }

  enableLocationService(){ 
    if (navigator.geolocation) {
      document.cookie = "userLocationEnable = true";
      this.ngOnInit();
    } else {
      document.cookie = "userLocationEnable = false";
      alert("Geolocation is not supported by this browser.");
    }
  }

  search() {
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(this.display);
      navigator.geolocation.getCurrentPosition(this.getData);
     } else {
       alert("Geolocation is not supported by this browser.");
     }
  }

  display = (position) => {
    this.httpCode = true;
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
  
    console.log(`longitude: ${ lng } | latitude: ${ lat }`);
  }

  getCookie():string {
    var name =  "userLocationEnable=";
    var decodedCookie = decodeURIComponent(document.cookie);
    console.log(decodedCookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

  getData = (position) => {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;

    this.https.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=')
    .subscribe((response) => {
       this.response = response;
       this.httpCode = this.response.status == "OK";
       console.log(this.response);
     });

}
