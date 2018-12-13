import { Component, OnInit } from '@angular/core';
import { contactMail, contactNumber } from '../constant/app.constant';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  contactMail = contactMail;
  contactNumber = contactNumber;
  constructor() {   }

  ngOnInit() {
  }

}
