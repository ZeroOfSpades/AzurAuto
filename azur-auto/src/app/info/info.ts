import {Component, inject} from '@angular/core';
import {ICar} from '../interfaces/iCar';
import {CarData} from '../car-data';
import {ActivatedRoute, Router} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-info',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './info.html',
  styleUrl: './info.scss',
})
export class Info {
  carData: CarData = inject(CarData);
  route: ActivatedRoute = inject(ActivatedRoute);
  carId: string | null = this.route.snapshot.paramMap.get('id');
  carInfo: ICar = {
    name: 'Default Car',
    year: 1997,
    month: 12,
    day: 25,
    img: ''
  };
  constructor(private router: Router) {
    if (this.carId) {
      this.carInfo = JSON.parse(this.carData.cars[+this.carId]);
    }
  }
}
