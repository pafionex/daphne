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
    { link: "#", label: 'Начало' },
    { link: "#", label: 'За нас' },
    { link: "#", label: 'Услуги' },
    { link: "#", label: 'Контакти' }
  ];

  navUtils = [
    { link: "tel:555338148", label: '555 338 148', icon: ['fas', 'phone'] },
    { link: "#", label: 'ул. "Студентска 1"', icon: ['fas', 'map-marker-alt'] }
  ];

  ngOnInit() {
  }

}
