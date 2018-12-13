import { Component, OnInit } from '@angular/core';
import { shortDescription } from '../constant/app.constant'
@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {
  shortDescription = shortDescription;
  constructor() { }

  ngOnInit() {
  }

}
