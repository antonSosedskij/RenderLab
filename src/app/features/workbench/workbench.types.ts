import { FrameDisplayOptions } from './workbench.constanst';

export type FrameDisplayMode = (typeof FrameDisplayOptions)[keyof typeof FrameDisplayOptions];

export type DisplaySelectButtonOption = {
  option: FrameDisplayMode;
};
