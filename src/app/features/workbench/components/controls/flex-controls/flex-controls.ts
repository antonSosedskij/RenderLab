import { Component, model, signal } from '@angular/core';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import {
  FlexAlignItems,
  FlexDirection,
  FlexDisplayOptions,
  FlexJustifyContent,
  FlexWrap,
} from '../../../workbench.types';

@Component({
  selector: 'app-flex-controls',
  imports: [SelectButton, FormsModule],
  templateUrl: './flex-controls.html',
  styleUrl: './flex-controls.css',
})
export class FlexControls {
  readonly options = model.required<FlexDisplayOptions>();

  protected readonly directionOptions = signal([
    { option: 'row' },
    { option: 'row-reverse' },
    { option: 'column' },
    { option: 'column-reverse' },
  ]);

  protected readonly wrapOptions = signal([
    { option: 'nowrap' },
    { option: 'wrap' },
    { option: 'wrap-reverse' },
  ]);

  protected readonly justifyOptions = signal([
    { option: 'flex-start' },
    { option: 'center' },
    { option: 'flex-end' },
    { option: 'space-between' },
    { option: 'space-around' },
    { option: 'space-evenly' },
  ]);

  protected readonly alignOptions = signal([
    { option: 'stretch' },
    { option: 'flex-start' },
    { option: 'center' },
    { option: 'flex-end' },
    { option: 'baseline' },
  ]);

  protected setDirection(direction: FlexDirection): void {
    this.options.update((options) => ({
      ...options,
      direction,
    }));
  }

  protected setWrap(wrap: FlexWrap): void {
    this.options.update((options) => ({
      ...options,
      wrap,
    }));
  }

  protected setJustifyContent(justifyContent: FlexJustifyContent): void {
    this.options.update((options) => ({
      ...options,
      justifyContent,
    }));
  }

  protected setAlignItems(alignItems: FlexAlignItems): void {
    this.options.update((options) => ({
      ...options,
      alignItems,
    }));
  }
}
