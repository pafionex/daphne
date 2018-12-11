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

  // Slider
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

  // Article
  articleContent = {
  title: 'Добре дошли в сайта на ветеринарна клиника „Зодия Любов”!',
  entry: `
    <p>След 13 години пълна отдаденост на работата и грижите за нашите пациенти, решихме че е време да споделим с вас това което правим, препоръчваме и предлагаме.</p>

    <p>Избрахме формата на този сайт по дизайн и функционалност, които да отговарят на нашите високи изисквания на работа. Смятаме, че вашата информираност като стопани е от ключово значение за общата ни цел.</p>

    <p>А тя е и винаги ще бъде: „По-здрави любимци – по-щастливи стопани!”</p>

    <p>Ще се стараем да бъдем изчерпателни и полезни, забавни и актуални, за да превърнем това място във ваша любима виртуална зона. Място, в което ще намирате точна и вярна информация по важни за вас теми, ще научавате все повече за нашите услуги, здравни планове и не на последно място ще се информирате за неустоимите ни текущи търговски предложения.</p>

    <p><strong>Благодарим ви!</strong></p>
  `,
  image: 'article-1.jpeg'
  }

}
