import { Component, OnInit } from '@angular/core';
import { address, contactNumber, contactMail, contactUsDesription } from '../constant/app.constant';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  address = address;
  contactMail = contactMail;
  contactNumber = contactNumber;
  contactUsDesription = contactUsDesription;
  constructor() { }

  ngOnInit() {
  }

}
