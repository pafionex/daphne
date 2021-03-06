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
        { link: '', label: 'Начало' },
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
        'Почистване на анална жлеза – 5.00 лв.',
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
    },
    {
      category: 'Пакетни Услуги',
      items:
      [
        'Лечение на инфекциозно болно животно до 5 кг. – 45.00 лв.',
        'Лечение на инфекциозно болно животно от 6 до 13 кг. – 60.00 лв.',
        'Лечение на инфекциозно болно животно над 13 кг. – 80.00 лв.'
      ]
    },
    {
      category: 'Кастрации',
      items:
      [
        'Кастрация мъжка котка – 60.00 лв.',
        'Кастрация мъжко куче 0 – 10 кг. – 80.00 лв.',
        'Кастрация мъжко куче 10 – 20 кг. – 100.00 лв.',
        'Кастрация мъжко куче 20 – 40 кг. – 150.00 лв.',
        'Кастрация мъжко куче над 40 кг. – 180.00 лв.',
        'Кастрация женска котка – 90.00 лв.',
        'Кастрация женско куче 0 – 10 кг. – 100.00 лв.',
        'Кастрация женско куче 10 – 20 кг. – 130.00 лв.',
        'Кастрация женско куче 20 – 40 кг. – 180.00 лв.',
        'Кастрация женско куче над 40 кг. – 200.00 лв.'
      ]
    },
    {
      category: 'Ехография',
      items:
      [
        'Ехография на цяла коремна кухина – 30.00 лв.',
        'Ехография бременност – 20.00 лв.',
        'Ехо-кардиография /първична/ – 50.00 лв.',
        'Ехо-кардиография /контролна/ – 40.00 лв.'
      ]
    },
    {
      category: 'Фризури',
      items:
      [
        'Йоркширски териер – 20.00 лв.',
        'Кокер шпаньол – 30.00 лв.',
        'Болонезе – 20.00 лв.',
        'Пудел – 20.00 лв.',
        'Лагото романьоло – 30.00 лв.',
        'Пекинез – 20.00 лв.',
        'Померан – 20.00 лв.',
        'Уест хайленд уайт териер – 20.00 лв.',
        'Нюфаундленд – 40.00 лв.',
        'Голдън ретривър – 30.00 лв.',
        'Ши тцу – 20.00 лв.',
        'Мопс – 20.00 лв.',
        'Бишон фризе – 20.00 лв.',
        'Кавалер Кинг Чарлз Шпаньол – 20.00 лв.',
        'Котка – 20.00 лв.',
        'Къпане – 10.00 лв. до 30.00 лв.'
      ]
    },
    {
      category: 'Хирургия',
      items:
      [
        'Гастро – ентеротомия – 160.00 лв.',
        'Гастротомия – 150.00 лв.',
        'Диафрагмална херния – 170.00 лв.',
        'Ентероанастомоза – 180.00 лв.',
        'Ентеротомия – 120.00 лв.',
        'Ингвинална херния – двустранно – 80.00 лв.',
        'Ингвинална херния – едностранно – 40.00 лв.',
        'Вправяне на тарзална жлеза /Cherry eye/ – двустранно – 100.00 лв.',
        'Вправяне на тарзална жлеза /Cherry eye/ – едностранно – 60.00 лв.',
        'Ентропиум – двустранно – 100.00 лв.',
        'Ентропиум – едностранно – 60.00 лв.',
        'Пришиване на трети клепач – 20.00 лв.',
        'Каудектомия до 10 кг. – 30.00 лв.',
        'Каудектомия над 40 кг. – 40.00 лв.',
        'Отхематом – едностранно -50.00 лв.',
        'Отхематом – двустранно – 80.00 олв.',
        'Уретростомия – 150.00 лв.',
        'Цистостомия – 120.00 лв.'
      ]
    },
    {
      category: 'Коремна хирургия',
      items:
      [
        '50.00 – 200.00 лв.'
      ]
    },
    {
      category: 'Онкологична хирургия',
      items:
      [
        '40.00 – 150.00 лв.'
      ]
    },
    {
      category: 'Ортопедична хирургия',
      items:
      [
        '80.00 – 240.00 лв.'
      ]
    },
    {
      category: 'Офталмологична хирургия',
      items:
      [
        '40.00 – 120.00 лв.'
      ]
    },
    {
      category: 'Ранева хирургия',
      items:
      [
        '15.00 – 80.00 лв.'
      ]
    },
    {
      category: 'Урологична хирургия',
      items:
      [
        '15.00 – 80.00 лв.'
      ]
    },
    {
      category: 'Стоматология',
      items:
      [
        'Почистване на зъбен камък котка – 50.00 лв.',
        'Почистване на зъбен камък куче до 15 кг. – 60.00 лв.',
        'Почистване на зъбен камък куче 15 – 30 кг. – 85.00 лв.',
        'Почистване на зъбен камък куче 30 – 45 кг. – 100.00 лв.',
        'Почистване на зъбен камък куче над 45 кг. – 100.00 лв.',
      ]
    }
  ];

}
