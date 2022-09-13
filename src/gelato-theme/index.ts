import { extendTheme, type ThemeOverride } from "@chakra-ui/react";

import { colors, config, fonts, fontSizes, fontWeights } from "./foundations";

const theme: ThemeOverride = extendTheme({
  colors,
  config,
  fonts,
  fontSizes,
  fontWeights,
});

export { theme };
