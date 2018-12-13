import { Component, OnInit } from '@angular/core';
import { copyrights, designedby, designedbyMail } from '../constant/app.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyrights = copyrights;
  designedby = designedby;
  designedbyMail = designedbyMail;
  constructor() { }

  ngOnInit() {
  }

}
