import {Component, Input, Output} from '@angular/core';
import { ICar } from '../../interfaces/iCar'
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input({required: true}) car!: ICar;
  constructor() {}
}
