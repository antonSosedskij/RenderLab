import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

import { FrameDisplayOptions } from '../../workbench.constants';
import { DisplaySelectButtonOption, FrameDisplayMode } from '../../workbench.types';

@Component({
  selector: 'app-frame-display-select',
  imports: [FormsModule, SelectButton],
  templateUrl: './frame-display-select.html',
})
export class FrameDisplaySelect {
  readonly value = model.required<FrameDisplayMode>();

  protected readonly options = signal<DisplaySelectButtonOption[]>([
    {
      option: FrameDisplayOptions.Flex,
    },
    {
      option: FrameDisplayOptions.Block,
    },
    {
      option: FrameDisplayOptions.Grid,
    },
  ]);

  protected setValue(value: FrameDisplayMode): void {
    this.value.set(value);
  }
}
