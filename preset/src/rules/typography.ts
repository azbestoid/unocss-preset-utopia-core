import type { Rule } from '@unocss/core'
import type { RequiredOptions } from '../options/types'

export const typographyRules = (options: RequiredOptions): Rule[] => [
  // Numeric step notation: text-fluid-0, text-fluid-1, text-fluid--1, etc.
  [/^text-fluid-(-?\d+)$/, ([, step]) => {
    const stepNum = parseInt(step, 10)
    if (Number.isNaN(stepNum) || !options.typeScale)
      return

    const typeStep = options.typeScale.find(s => s.step === stepNum)
    if (!typeStep)
      return

    return [['font-size', typeStep.clamp]]
  }],

  // Label notation: text-fluid-xs, text-fluid-s, text-fluid-m, etc.
  [/^text-fluid-(.+)$/, ([, label]) => {
    if (!options.typeScale)
      return

    // Check if it's a numeric step that wasn't caught by the first rule
    const stepNum = parseFloat(label)
    if (!Number.isNaN(stepNum)) {
      const typeStep = options.typeScale.find(s => s.step === stepNum)
      if (!typeStep)
        return
      return [['font-size', typeStep.clamp]]
    }

    // Try to find by label
    const typeStep = options.typeScale.find(s => s.label === label)
    if (!typeStep)
      return

    return [['font-size', typeStep.clamp]]
  }],
]