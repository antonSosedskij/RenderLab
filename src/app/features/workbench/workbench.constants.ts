import type {
  BlockFrameLayoutState,
  FlexFrameLayoutState,
  FrameDisplayMode,
  FrameLayoutState,
  GridFrameLayoutState,
} from './workbench.types';

export const FrameDisplayOptions = {
  Grid: 'grid',
  Flex: 'flex',
  Block: 'block',
} as const;

export const defaultBlockLayout: BlockFrameLayoutState = {
  display: FrameDisplayOptions.Block,
  gap: 0,
  displayOptions: {},
};

export const defaultFlexLayout: FlexFrameLayoutState = {
  display: FrameDisplayOptions.Flex,
  gap: 0,
  displayOptions: {
    direction: 'row',
    wrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
};

export const defaultGridLayout: GridFrameLayoutState = {
  display: FrameDisplayOptions.Grid,
  gap: 0,
  displayOptions: {
    columns: 3,
    minColumnWidth: 120,
    justifyItems: 'stretch',
    alignItems: 'stretch',
  },
};

type FrameLayoutFactory = (gap: number) => FrameLayoutState;

const frameLayoutFactories = {
  [FrameDisplayOptions.Block]: (gap) => ({
    ...defaultBlockLayout,
    gap,
  }),
  [FrameDisplayOptions.Flex]: (gap) => ({
    ...defaultFlexLayout,
    gap,
  }),
  [FrameDisplayOptions.Grid]: (gap) => ({
    ...defaultGridLayout,
    gap,
  }),
} satisfies Record<FrameDisplayMode, FrameLayoutFactory>;

export const createFrameLayout = (display: FrameDisplayMode, gap = 0): FrameLayoutState =>
  frameLayoutFactories[display](gap);
