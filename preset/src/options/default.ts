import type { RequiredOptions } from './types'

export const defaultOptions: RequiredOptions = {
  minWidth: 320,
  maxWidth: 1240,
  minFontSize: 18,
  maxFontSize: 20,
  minTypeScale: 1.2,
  maxTypeScale: 1.25,
  positiveSteps: 5,
  negativeSteps: 2,
  minSpaceSize: 18,
  maxSpaceSize: 20,
  positiveSpaceSteps: [1.5, 2, 3, 4, 6],
  negativeSpaceSteps: [0.75, 0.5, 0.25],
  customSpaceSizes: [],
  relativeTo: 'viewport',
  usesPresetMini: true,
}