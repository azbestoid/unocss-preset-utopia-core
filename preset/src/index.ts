import type { Preset } from '@unocss/core'
import { calculateTypeScale, calculateSpaceScale } from 'utopia-core'
import { defaultOptions } from './options/default'
import type { PresetUtopiaOptions, RequiredOptions } from './options/types'
import { cssPropertyRules } from './rules/misc'
import { spacingRules } from './rules/spacing'
import { typographyRules } from './rules/typography'
import { variantSpace } from './variants'

export function presetUtopia(presetOptions?: PresetUtopiaOptions): Preset {
  const options: RequiredOptions = {
    ...defaultOptions,
    ...presetOptions,
  }

  // Pre-calculate type scale and space scale using utopia-core
  const typeScale = calculateTypeScale({
    minWidth: options.minWidth,
    maxWidth: options.maxWidth,
    minFontSize: options.minFontSize,
    maxFontSize: options.maxFontSize,
    minTypeScale: options.minTypeScale,
    maxTypeScale: options.maxTypeScale,
    positiveSteps: options.positiveSteps,
    negativeSteps: options.negativeSteps,
    relativeTo: options.relativeTo,
  })

  const spaceScale = calculateSpaceScale({
    minWidth: options.minWidth,
    maxWidth: options.maxWidth,
    minSize: options.minSpaceSize,
    maxSize: options.maxSpaceSize,
    positiveSteps: options.positiveSpaceSteps,
    negativeSteps: options.negativeSpaceSteps,
    customSizes: options.customSpaceSizes,
    relativeTo: options.relativeTo,
  })

  // Augment options with pre-calculated scales
  const optionsWithScales = {
    ...options,
    typeScale,
    spaceScale,
  }

  return {
    name: 'unocss-preset-utopia',
    rules: [
      ...typographyRules(optionsWithScales),
      ...spacingRules(optionsWithScales),
      ...cssPropertyRules(optionsWithScales),
    ],
    options: optionsWithScales,
    variants: [
      ...(options.usesPresetMini ? [] : [variantSpace]),
    ],
  }
}

export type { PresetUtopiaOptions }
export * from './options/types'