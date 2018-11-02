import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() 
  name: string;

  @Input() 
  piphotoReference: string;

  @Input() 
  rating: string;

  constructor() { }

  ngOnInit() {
    console.log(this.name);
  }

}
