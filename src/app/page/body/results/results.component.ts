import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() 
  childData: any;

  places: []

  constructor() { 

  }

  ngOnInit() {
    this.places = this.childData.results;
    this.places = this.childData;

  }

}
