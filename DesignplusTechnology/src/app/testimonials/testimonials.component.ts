import {Component, OnInit} from '@angular/core';
import {
  testimonials,
  testimonialsDesription,
  testimonialsMembers,
  quoteLeft,
  quoteRight
} from '../constant/app.constant';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials = testimonials;
  testimonialsDesription = testimonialsDesription;
  testimonialsMembers = testimonialsMembers;
  quoteLeft = quoteLeft;
  quoteRight = quoteRight;

  constructor() {
  }

  ngOnInit() {
  }

}
