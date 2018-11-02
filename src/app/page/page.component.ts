import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  routes = [
    {linkName: "Profile", url: 'profile'},
    {linkName: "Contact Info", url: 'contact'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
