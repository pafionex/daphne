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

  slides = [
    {img: './assets/images/slide-1.jpeg'},
    {img: './assets/images/slide-2.jpeg'},
    {img: './assets/images/slide-3.jpeg'},
  ];
  slideConfig = {
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'dots': true,
    'autoplay': true,
  };

}
