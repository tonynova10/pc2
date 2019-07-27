import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
