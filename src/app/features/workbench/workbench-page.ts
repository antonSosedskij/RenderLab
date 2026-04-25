import { Component, model, signal } from '@angular/core';
import { FrameDisplaySelect } from './components/frame-display-select/frame-display-select';
import { FrameDisplayMode } from './workbench.types';

@Component({
  selector: 'app-workbench-page',
  templateUrl: './workbench-page.html',
  styleUrl: './workbench-page.css',
  imports: [FrameDisplaySelect],
})
export class WorkbenchPage {
  protected readonly panels = signal(['Components', 'Canvas', 'Inspector', 'Metrics'] as const);

  protected readonly displayMode = model<FrameDisplayMode>('block');
}
