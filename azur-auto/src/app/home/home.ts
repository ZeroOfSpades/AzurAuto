import {Component} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.slider-container', {
      left: '-100px',
      scrollTrigger: {
        trigger: '.slider-container:first-of-type',
        endTrigger: '.slider-container:nth-of-type(2)',
        start: 'top 20%',
        end: 'top 80%',
        markers: true,
        scrub: true
      },
      ease: 'power1.inOut'
    });
  }
}
