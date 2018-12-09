import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {
	@Input() socials: Object[];
  constructor() { }

  ngOnInit() {
  }

}
