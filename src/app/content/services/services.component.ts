import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	banner = {
    title: 'Услуги',
    breadcrumbs: [
        { link: '', label: 'Начало' }
        { link: 'services', label: 'За нас' }
    ]
  };

  services = [
    {
      category: 'Прегледи',
      items:
      [
        'Първоначален педиатричен преглед – 12.00 лв.',
        'Общ клиничен преглед – 15. 00 лв.',
        'Дерматологичен преглед – 20.00 лв.',
        'Неврологичен преглед – 20.00 лв.',
        'Офталмологичен преглед – 17.00 лв.',
        'Преглед на уши и отоскопия – 15.00 лв.',
        'Преглед на уши – пълен /с вкл. цитология, отоскопия и изследване за отодектоза/ – 20.00 лв.',
        'Стоматологичен преглед – 10.00 лв.',
        'Гериатричен преглед – 15.00 лв.'
      ]
    },
    {
      category: 'Профилактични',
      items:
      [
        'Първа ваксина куче – 26.00 лв.',
        'Втора ваксина куче – 28.00 лв.',
        'Трета ваксина куче – 28.00 лв.',
        'Ваксина бяс – 15.00 лв.',
        'Годишна ваксина куче – 35.00 лв.',
        'Микрочип – 35.00 лв.',
        'Евро паспорт – 10.00 лв.',
        'Ваксина котка – Purevax RCPChFeLV – 50.00 лв.',
        'Ваксина котка – Purevax RCP – 35.00 лв.',
        'Ваксина котка – Purevax Rabies – 40.00 лв.'
      ]
    },
    {
      category: 'Манипулации',
      items:
      [
        'Инжектиране iv – 10.00 лв.',
        'Инжектиране im, sc – 6.00 лв.',
        'Инжектиране на имитицид – 10.00 лв.',
        'субконюктивално- 10.00 лв.',
        'Превръзка проста – 5.00 лв.',
        'Превръзка сложна – 10.00 лв.',
        'Почистване на уши – 5.00 лв.',
        'Почистване на анална жлеза – 5.00 лв.'
        'Шиниране просто – 10.00 лв.',
        'Шиниране сложно – 20.00 лв.',
        'Катетеризация котка с вкл. консуматив – 25.00 лв.',
        'Катетеризация куче – 10.00 лв.',
        'Кислородна терапия / на час / – 10.00 лв.',
        'Клизма – 25.00 лв.',
        'Кръвопреливане – 10.00 лв.',
        'Изкуствено осеменяване в клиниката – 40.00 лв.',
        'Пункция на бурза – 10.00 лв.',
        'Изкуствено осеменяване на място – 50.00 лв.',
        'Перикардиоцентеза – 60.00 лв.',
        'Торакоцентеза -20.00 лв.',
        'Цистоцентеза – 20.00 лв.'
      ]
    },
    {
      category: 'Изследвания',
      items:
      [
        'Пълна кръвна картина – 10.00 лв.',
        'Биохимичен показател за 1 бр. – 3.00 лв.',
        'Голям биохимичен пакет – 25.00 лв.',
        'Малък биохимичен пакет – 15.00 лв.',
        'Микрофиларии – 15.00 лв.',
        'Вагинална цитонамазка – 8.00 лв.',
        'Кръвна настилка – 8.00 лв.',
        'Урина – седимент – 6.00 лв.',
        'Фекална проба – флотация – 10.00 лв.'
      ]
    }
  ];

}
