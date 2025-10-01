import type { Rule } from '@unocss/core'
import type { RequiredOptions } from '../options/types'
import { fluidSpaceHandler } from './spacing'

export const cssPropertyRules = (options: RequiredOptions): Rule[] => [
  // Custom CSS property with type scale: [line-height]-fluid-type-2
  [/^\[([\w-]+)]-fluid-type-(-?\d+)$/, ([, prop, step]) => {
    const stepNum = parseInt(step, 10)
    if (Number.isNaN(stepNum) || !options.typeScale)
      return

    const typeStep = options.typeScale.find(s => s.step === stepNum)
    if (!typeStep)
      return

    return { [prop]: typeStep.clamp }
  }],

  // Custom CSS property with space scale: [padding-inline]-fluid-space-m
  [/^\[([\w-]+)]-fluid-space-(.+)$/, ([, prop, label]) => {
    const value = fluidSpaceHandler(label)(options)
    if (!value)
      return

    return { [prop]: value }
  }],
]