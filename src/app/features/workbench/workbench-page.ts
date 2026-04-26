import { Component, computed, signal } from '@angular/core';
import { FrameDisplaySelect } from './components/frame-display-select/frame-display-select';
import { FlexDisplayOptions, FrameDisplayMode, FrameLayoutState } from './workbench.types';
import { GapSlider } from './components/gap-slider/gap-slider';
import { createFrameLayout, defaultFlexLayout, FrameDisplayOptions } from './workbench.constants';
import { FlexControls } from './components/controls/flex-controls/flex-controls';

@Component({
  selector: 'app-workbench-page',
  templateUrl: './workbench-page.html',
  styleUrl: './workbench-page.css',
  imports: [FrameDisplaySelect, GapSlider, FlexControls],
})
export class WorkbenchPage {
  protected readonly FrameDisplayOptions = FrameDisplayOptions;

  protected readonly panels = signal(['Components', 'Canvas', 'Inspector', 'Metrics'] as const);

  protected readonly frameLayout = signal<FrameLayoutState>(
    createFrameLayout(FrameDisplayOptions.Block),
  );

  protected readonly flexOptions = computed(() => {
    const layout = this.frameLayout();

    if (layout.display === FrameDisplayOptions.Flex) {
      return layout.displayOptions;
    }

    return defaultFlexLayout.displayOptions;
  });

  protected readonly frameStyles = computed(() => {
    const layout = this.frameLayout();
    const flexOptions = this.flexOptions();

    return {
      display: layout.display,
      gap: `${layout.gap}px`,
      'flex-direction': flexOptions.direction,
      'flex-wrap': flexOptions.wrap,
      'justify-content': flexOptions.justifyContent,
      'align-items': flexOptions.alignItems,
    };
  });

  protected setDisplayMode(display: FrameDisplayMode): void {
    this.frameLayout.update((layout) => createFrameLayout(display, layout.gap));
  }

  protected setFrameGap(gap: number): void {
    this.frameLayout.update((layout) => ({
      ...layout,
      gap,
    }));
  }

  protected setFlexOptions(displayOptions: FlexDisplayOptions): void {
    this.frameLayout.update((layout) => {
      if (layout.display !== FrameDisplayOptions.Flex) {
        return layout;
      }

      return {
        ...layout,
        displayOptions,
      };
    });
  }
}
