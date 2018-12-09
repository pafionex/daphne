import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-utils',
  templateUrl: './nav-utils.component.html',
  styleUrls: ['./nav-utils.component.css']
})
export class NavUtilsComponent implements OnInit {
	@Input() nav: string[];

  constructor() { }

  ngOnInit() {
  }

}
