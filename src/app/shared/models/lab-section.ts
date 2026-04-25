export type LabSectionId = 'layout' | 'rendering' | 'loading' | 'runtime';

export type LabSection = {
  readonly id: LabSectionId;
  readonly title: string;
  readonly route: string;
  readonly focus: readonly string[];
};
