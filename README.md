
# UnoCSS Preset Utopia Core

A UnoCSS preset that integrates [Utopia's fluid responsive design system](https://utopia.fyi) using the official [utopia-core](https://github.com/trys/utopia-core) JavaScript library. Inspired by [unocss-preset-utopia](https://github.com/adameier/unocss-preset-utopia).

## Features

-   🎯 **Fluid Typography** - Responsive type scales using `text-fluid-*` utilities
-   📏 **Fluid Spacing** - Responsive spacing with `p-fluid-*`, `m-fluid-*`, `gap-fluid-*`, etc.
-   **Customizable** - Configure scales, steps, and viewport ranges
-    **Custom Pairs** - Support for one-up pairs and custom size combinations

## Installation

```bash
npm install utopia-core github:azbestoid/unocss-preset-utopia-core

```

## Usage

### Basic Setup

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetUtopia } from 'unocss-preset-utopia-core'

export default defineConfig({
  presets: [
    presetUtopia(),
  ],
})

```

### With Options

```ts
import { defineConfig } from 'unocss'
import { presetUtopia } from 'unocss-preset-utopia-core'

export default defineConfig({
  presets: [
    presetUtopia({
      // Viewport configuration
      minWidth: 320,
      maxWidth: 1240,
      
      // Typography scale
      minFontSize: 18,
      maxFontSize: 20,
      minTypeScale: 1.2,
      maxTypeScale: 1.25,
      positiveSteps: 5,
      negativeSteps: 2,
      
      // Spacing scale
      minSpaceSize: 18,
      maxSpaceSize: 20,
      positiveSpaceSteps: [1.5, 2, 3, 4, 6],
      negativeSpaceSteps: [0.75, 0.5, 0.25],
      customSpaceSizes: ['s-l', 'xl-3xl'],
      
      // Container queries support
      relativeTo: 'viewport', // or 'container'
    }),
  ],
})

```

## Typography Utilities

### Numeric Steps

Use numeric steps from your configured type scale:

```html
<h1 class="text-fluid-5">Largest heading</h1>
<h2 class="text-fluid-4">Large heading</h2>
<p class="text-fluid-0">Base text</p>
<small class="text-fluid--1">Small text</small>
<small class="text-fluid--2">Smaller text</small>

```

With default settings (5 positive, 2 negative steps), you get:

-   `text-fluid-5` through `text-fluid-0` (positive/base)
-   `text-fluid--1` and `text-fluid--2` (negative)

## Spacing Utilities

Spacing utilities use labels from the utopia-core space scale. By default, these are based on the `positiveSpaceSteps` and `negativeSpaceSteps` arrays.

### Available Space Labels

With default configuration:

-   Negative: `3xs`, `2xs`, `xs`
-   Base: `s` (base size)
-   Positive: `m`, `l`, `xl`, `2xl`, `3xl`

### Padding

```html
<div class="p-fluid-m">Padding medium</div>
<div class="px-fluid-l">Padding X large</div>
<div class="py-fluid-s">Padding Y small</div>
<div class="pt-fluid-xl">Padding top extra large</div>

```

### Margin

```html
<div class="m-fluid-l">Margin large</div>
<div class="mx-fluid-m">Margin X medium</div>
<div class="my-fluid-s">Margin Y small</div>
<div class="mb-fluid-2xl">Margin bottom 2xl</div>

```

### Gap

```html
<div class="gap-fluid-m">Gap medium</div>
<div class="gap-x-fluid-l">Column gap large</div>
<div class="gap-y-fluid-s">Row gap small</div>

```

### Width & Height

```html
<div class="w-fluid-xl">Width extra large</div>
<div class="h-fluid-m">Height medium</div>
<div class="min-w-fluid-s">Min width small</div>
<div class="max-h-fluid-2xl">Max height 2xl</div>

```

### Space Between

```html
<div class="space-x-fluid-m">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

```

### Custom Pairs

You can create custom size pairs that interpolate between two sizes:

```ts
presetUtopia({
  customSpaceSizes: ['s-l', 'xl-3xl', 'm-2xl']
})

```

Then use them:

```html
<div class="p-fluid-s-l">Padding from small to large</div>
<div class="gap-fluid-xl-3xl">Gap from xl to 3xl</div>

```

### One-Up Pairs

Utopia-core automatically generates one-up pairs (consecutive size combinations). These follow the pattern `{size1}-{size2}`:

```html
<div class="m-fluid-s-m">Margin from s to m</div>
<div class="p-fluid-m-l">Padding from m to l</div>
<div class="gap-fluid-l-xl">Gap from l to xl</div>

```

## Custom CSS Properties

Use arbitrary CSS properties with fluid values:

```html
<!-- With type scale -->
<div class="[line-height]-fluid-type-2">Custom line height</div>

<!-- With space scale -->
<div class="[border-radius]-fluid-space-m">Custom border radius</div>
<div class="[padding-inline]-fluid-space-l">Custom logical padding</div>

```

## Container Queries

To use container query units instead of viewport units:

```ts
presetUtopia({
  relativeTo: 'container'
})

```

This changes the generated CSS from using `vi` (viewport width) to `cqi` (container query inline size).

## Migration from unocss-preset-utopia

If you're migrating from the original `unocss-preset-utopia`, here are the key differences:

### Configuration Changes

**Old (unocss-preset-utopia):**

```ts
{
  minSize: 18,  // Used for both type and space
  maxSize: 20,  // Used for both type and space
  spaceValues: {
    's': 1,
    'm': 1.5,
    'l': 2,
    // ...
  }
}

```

**New (unocss-preset-utopia-core):**

```ts
{
  // Separate type configuration
  minFontSize: 18,
  maxFontSize: 20,
  minTypeScale: 1.2,
  maxTypeScale: 1.25,
  positiveSteps: 5,
  negativeSteps: 2,
  
  // Separate space configuration
  minSpaceSize: 18,
  maxSpaceSize: 20,
  positiveSpaceSteps: [1.5, 2, 3, 4, 6],
  negativeSpaceSteps: [0.75, 0.5, 0.25],
  customSpaceSizes: ['s-l'],  // New!
}

```

### Utility Changes

**Typography:**

-   Old: `text-fluid-1.5` (multiplier notation)
-   New: `text-fluid-2` (step notation)

**Spacing:**

-   Works the same! Labels like `s`, `m`, `l`, etc. still work
-   Bonus: Now includes one-up pairs automatically (`s-m`, `m-l`, etc.)
-   Bonus: Custom pairs support

## License

MIT
