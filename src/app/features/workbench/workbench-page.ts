import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-workbench-page',
  templateUrl: './workbench-page.html',
  styleUrl: './workbench-page.css',
})
export class WorkbenchPage {
  protected readonly panels = signal(['Components', 'Canvas', 'Inspector', 'Metrics'] as const);
}
