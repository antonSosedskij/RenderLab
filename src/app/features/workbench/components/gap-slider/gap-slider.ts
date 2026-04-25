import { Component, model } from '@angular/core';
import { Slider } from 'primeng/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gap-slider',
  imports: [Slider, FormsModule],
  templateUrl: './gap-slider.html',
  styleUrl: './gap-slider.css',
})
export class GapSlider {
  gap = model(10);

  onChange(value: number) {
    this.gap.set(value);
  }
}
