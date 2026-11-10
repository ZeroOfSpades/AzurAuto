import {Component, inject} from '@angular/core';
import { CarData } from '../car-data';
import {Card} from './card/card';

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
}
