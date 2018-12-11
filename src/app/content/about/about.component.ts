import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  articleContent = {
  	title: '',
  	entry: `<p>Ветеринарна клиника „Зодия Любов” е основана през 2004 г. в гр. Варна.</p>

		<p>Всичко започва с трима ентусиазирани млади хора в малко помещение, което с много усилия и любов е превърнато във ветеринарен кабинет.</p>

		<p>Днес, 13 години по-късно, в клиниката работят 11 души, а на площ от 250 кв. м. са разположени просторно фоайе с чакалня и рецепция, 4 зали за преглед, операционна зала, 3 стационара, зоомагазин и грууминг салон.</p>

		<p>В клиниката се извършват общи и специализирани прегледи, лечение на заразни и незаразни заболявания, болнично лечение и хирургия. Правят се няколко вида профилактични и диагностични ехографски изследвания.</p>

		<p>Особено внимание обръщаме на превантивната медицина и ранна диагностика. Клиниката разполага с добре оборудвана лаборатория за биохимични, хематологични , урологични и много други изследвания.</p>

		<p><strong>Не е нужно много – просто трябва да те е грижа!</strong></p>`,
  	image: 'article-2.jpeg'
  }

  banner = {
    title: 'За нас',
    breadcrumbs: [
        { link: '', label: 'Начало' }
        { link: 'about', label: 'За нас' }
    ]
  };

  team = {
    title: 'Запознай се с нашия екип',
    members: [
      { name: 'Д-р Свилен Василев' , image: 'team-member-1.jpeg' }
      { name: 'Д-р Десислава Дочева' , image: 'team-member-2.jpeg' }
      { name: 'Д-р Светослав Коцев' , image: 'team-member-3.jpeg' }
      { name: 'Д-р Юлия Тонева' , image: 'team-member-4.jpeg' }
      { name: 'Д-р Александър Койчев' , image: 'team-member-5.jpeg' }
      { name: 'Д-р Сергей Ангелов' , image: 'team-member-6.jpeg' }
    ]
  }

}
