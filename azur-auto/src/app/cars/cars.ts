import {Component, inject} from '@angular/core';
import { CarData } from '../car-data';
import {Card} from './card/card';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cars',
  imports: [
    Card
  ],
  templateUrl: './cars.html',
  styleUrl: './cars.scss',
})
export class Cars {
  carData: CarData = inject(CarData);
  protected readonly JSON = JSON;

  constructor(private router: Router) {}

  goToPage(id: number): void {
    this.router.navigate(['/cars/'+id]);
  }
}
