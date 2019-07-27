import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-innovate',
  templateUrl: './innovate.component.html',
  styleUrls: ['./innovate.component.css']
})
export class InnovateComponent implements OnInit {
  @Input() work;

  constructor() { }

  ngOnInit() {
  }

}
