import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  socials = [
  	{ url:'https://facebook.com' , icon: ['fab', 'facebook'] },
  	{ url:'https://twitter.com' , icon: ['fab', 'twitter'] },
  	{ url:'https://instagram.com' , icon: ['fab', 'instagram'] },
  	{ url:'https://google-plus.com' , icon: ['fab', 'google-plus'] },
  ]

  ngOnInit() {
  }

}
