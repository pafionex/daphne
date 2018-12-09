import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  // Widgets
  widgetTitle = [ 'Работно време', 'Контакти' ];
  widgetList = [
   [
	  'Понеделник-Петък: 09:00 - 19:00',
	  'Събота: 09:00 - 18:00',
	  'Неделя - почивен ден'
   ],
   [
		`<span>Адрес: </span><a target="__blank" href="https://www.google.com/maps/place/ul.+%22Studentska%22+1,+9010+Levski,+Varna/@43.22318,27.9319313,17z/data=!3m1!4b1!4m5!3m4!1s0x40a4543efa127c01:0xb3ceb11a4a5d4055!8m2!3d43.22318!4d27.93412">Студентска 1</a>`,
		`<span>Телефон: </span><a href="tel:555338148">555 338 148</a>`,
		`<span>Имейл: </span><a href="mailto:zodialiubov@example.com">zodialiubov@example.com</a>`
   ]
  ];

  // Copyright
  copyright = new Date().getFullYear() + ' © Зодия Любов Всички права запазени.';

  ngOnInit() {
  }

}
