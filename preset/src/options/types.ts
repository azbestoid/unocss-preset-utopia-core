import type { UtopiaStep, UtopiaSpaceScale } from 'utopia-core'

export type UtopiaRelativeTo = 'viewport' | 'container'

export interface PresetUtopiaOptions {
  /**
   * Minimum viewport width
   * @default 320
   */
  minWidth?: number

  /**
   * Maximum viewport width
   * @default 1240
   */
  maxWidth?: number

  /**
   * Minimum font size for base type scale
   * @default 18
   */
  minFontSize?: number

  /**
   * Maximum font size for base type scale
   * @default 20
   */
  maxFontSize?: number

  /**
   * Minimum type scale ratio
   * @default 1.2
   */
  minTypeScale?: number

  /**
   * Maximum type scale ratio
   * @default 1.25
   */
  maxTypeScale?: number

  /**
   * Number of positive steps in the type scale
   * @default 5
   */
  positiveSteps?: number

  /**
   * Number of negative steps in the type scale
   * @default 2
   */
  negativeSteps?: number

  /**
   * Minimum space size for base spacing scale
   * @default 18
   */
  minSpaceSize?: number

  /**
   * Maximum space size for base spacing scale
   * @default 20
   */
  maxSpaceSize?: number

  /**
   * Positive step multipliers for spacing scale
   * @default [1.5, 2, 3, 4, 6]
   */
  positiveSpaceSteps?: number[]

  /**
   * Negative step multipliers for spacing scale
   * @default [0.75, 0.5, 0.25]
   */
  negativeSpaceSteps?: number[]

  /**
   * Custom space size pairs (e.g., ['s-l', '2xl-4xl'])
   * @default []
   */
  customSpaceSizes?: string[]

  /**
   * Whether sizes are relative to viewport or container
   * @default 'viewport'
   */
  relativeTo?: UtopiaRelativeTo

  /**
   * Indicates if @unocss/preset-mini, or a preset that extends it is being used
   * @default true
   */
  usesPresetMini?: boolean
}

export interface RequiredOptions {
  minWidth: number
  maxWidth: number
  minFontSize: number
  maxFontSize: number
  minTypeScale: number
  maxTypeScale: number
  positiveSteps: number
  negativeSteps: number
  minSpaceSize: number
  maxSpaceSize: number
  positiveSpaceSteps: number[]
  negativeSpaceSteps: number[]
  customSpaceSizes: string[]
  relativeTo: UtopiaRelativeTo
  usesPresetMini: boolean
  typeScale?: UtopiaStep[]
  spaceScale?: UtopiaSpaceScale
}