import {Component, OnInit} from '@angular/core';
import {
  shortDescription,
  portfolioDescription,
  portfolio,
  portfolioItems,
  client,
  clientsDescription,
  allClients, companyName, companyDescription
} from '../constant/app.constant'
@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {
  shortDescription = shortDescription;
  portfolioDescription = portfolioDescription;
  portfolio = portfolio;
  portfolioItems = portfolioItems;
  client = client;
  clientsDescription = clientsDescription;
  allClients = allClients;
  companyDescription = companyDescription;
  companyName = companyName;

  constructor() {
  }

  ngOnInit() {
  }

}
