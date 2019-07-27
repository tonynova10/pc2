import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innovate-sec',
  templateUrl: './innovate-sec.component.html',
  styleUrls: ['./innovate-sec.component.css']
})
export class InnovateSecComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  works: Array<object> = [
    {
      work: 'Work name',
      place: 'Place name',
      imgSrc: 'http://www.mgsarchitecture.in/images/MGS-Architecture/Architects/471-NU-DE-Architecture.jpg'
    },
    {
      work: 'Work name',
      place: 'Place name',
      imgSrc: 'http://www.mgsarchitecture.in/images/MGS-Architecture/Architects/471-NU-DE-Architecture.jpg'
    },
    {
      work: 'Work name',
      place: 'Place name',
      imgSrc: 'http://www.mgsarchitecture.in/images/MGS-Architecture/Architects/471-NU-DE-Architecture.jpg'
    }
  ]
}
