import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  works: Array<object> = [
    {
      work: 'Work name',
      description: 'A super descriptive, description pendant to be written',
      imgSrc: 'http://www.mgsarchitecture.in/images/MGS-Architecture/Architects/471-NU-DE-Architecture.jpg'
    },
    {
      work: 'Work name',
      description: 'A super descriptive, description pendant to be written',
      imgSrc: 'http://www.mgsarchitecture.in/images/MGS-Architecture/Architects/471-NU-DE-Architecture.jpg'
    },
    {
      work: 'Work name',
      description: 'Place name',
      imgSrc: 'http://www.mgsarchitecture.in/images/MGS-Architecture/Architects/471-NU-DE-Architecture.jpg'
    },
    {
      work: 'Work name',
      description: 'Place name',
      imgSrc: 'http://www.mgsarchitecture.in/images/MGS-Architecture/Architects/471-NU-DE-Architecture.jpg'
    }
  ]
}
