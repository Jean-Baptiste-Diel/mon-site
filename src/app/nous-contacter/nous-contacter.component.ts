import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-nous-contacter',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './nous-contacter.component.html',
  styleUrl: './nous-contacter.component.css'
})
export class NousContacterComponent {
imageUrl: string = 'assets/assets/r.jpg';
}
