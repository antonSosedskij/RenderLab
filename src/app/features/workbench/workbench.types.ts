import { FrameDisplayOptions } from './workbench.constants';

export type FrameDisplayMode = (typeof FrameDisplayOptions)[keyof typeof FrameDisplayOptions];

export type DisplaySelectButtonOption = {
  option: FrameDisplayMode;
};

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexJustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type FlexAlignItems = 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';

export type FlexDisplayOptions = {
  direction: FlexDirection;
  wrap: FlexWrap;
  justifyContent: FlexJustifyContent;
  alignItems: FlexAlignItems;
};

export type BlockDisplayOptions = Record<string, never>;

export type GridDisplayOptions = {
  columns: number;
  minColumnWidth: number;
  justifyItems: 'stretch' | 'start' | 'center' | 'end';
  alignItems: 'stretch' | 'start' | 'center' | 'end';
};

type BaseFrameLayoutState = {
  gap: number;
};

export type BlockFrameLayoutState = BaseFrameLayoutState & {
  display: typeof FrameDisplayOptions.Block;
  displayOptions: BlockDisplayOptions;
};

export type FlexFrameLayoutState = BaseFrameLayoutState & {
  display: typeof FrameDisplayOptions.Flex;
  displayOptions: FlexDisplayOptions;
};

export type GridFrameLayoutState = BaseFrameLayoutState & {
  display: typeof FrameDisplayOptions.Grid;
  displayOptions: GridDisplayOptions;
};

export type FrameLayoutState = BlockFrameLayoutState | FlexFrameLayoutState | GridFrameLayoutState;
