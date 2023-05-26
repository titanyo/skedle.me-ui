import {
  breakpoints,
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@skedle.me-ui/tokens'

import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  media: {
    sm: `(min-width: ${breakpoints.sm})`,
    md: `(min-width: ${breakpoints.md})`,
    lg: `(min-width: ${breakpoints.lg})`,
    xl: `(min-width: ${breakpoints.xl})`,
    xxl: `(min-width: ${breakpoints.xxl})`,
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
