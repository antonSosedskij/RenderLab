import { Component, model, signal } from '@angular/core';
import { FrameDisplaySelect } from './components/frame-display-select/frame-display-select';
import { FrameDisplayMode } from './workbench.types';
import { GapSlider } from './components/gap-slider/gap-slider';

@Component({
  selector: 'app-workbench-page',
  templateUrl: './workbench-page.html',
  styleUrl: './workbench-page.css',
  imports: [FrameDisplaySelect, GapSlider],
})
export class WorkbenchPage {
  protected readonly panels = signal(['Components', 'Canvas', 'Inspector', 'Metrics'] as const);

  protected readonly displayMode = model<FrameDisplayMode>('block');
  protected readonly frameGap = model(0);
}
