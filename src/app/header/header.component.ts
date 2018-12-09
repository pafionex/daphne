import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  socials = [
  	{ url: 'https://facebook.com' , icon: ['fab', 'facebook'] },
  	{ url: 'https://twitter.com' , icon: ['fab', 'twitter'] },
  	{ url: 'https://instagram.com' , icon: ['fab', 'instagram'] },
  	{ url: 'https://google-plus.com' , icon: ['fab', 'google-plus'] },
  ]

  navMain = [
    { link: "", label: 'Начало' },
    { link: "about", label: 'За нас' },
    { link: "services", label: 'Услуги' },
    { link: "contact", label: 'Контакти' }
  ];

  navUtils = [
    { link: "tel:555338148", label: '555 338 148', icon: ['fas', 'phone'] },
    { link: "https://www.google.com/maps/place/ul.+%22Studentska%22+1,+9010+Levski,+Varna/@43.22318,27.9319313,17z/data=!3m1!4b1!4m5!3m4!1s0x40a4543efa127c01:0xb3ceb11a4a5d4055!8m2!3d43.22318!4d27.93412", label: 'ул. "Студентска 1"', icon: ['fas', 'map-marker-alt'] }
  ];

  ngOnInit() {
  }

}
