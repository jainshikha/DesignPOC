import { Component, OnInit } from '@angular/core';
import { contactMail } from '../projectInfo';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  constactDetails = contactMail;
  constructor() {   }

  ngOnInit() {
  }

}
