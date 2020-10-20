import { rem } from "polished";
import {
  BaseThemeProviderComponent,
  DefaultTheme,
  ThemeContext as TContext,
  ThemeProvider as TProvider,
} from "styled-components";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    custom: CustomThemeType;
  }
  interface ThemeOptions {
    custom?: CustomThemeType;
  }
}

export const theme: CustomThemeType = {
  zIndex: 0,
  breakpoints: ["700px", "1024px"],
  boxShadow:
    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  boxShadowUnderline: `black 0px -2px 0px 0px inset`,
  clientBoxShadow: "0px 4px 10px rgba(28, 36, 82, 0.1)",
  border: "2px solid #444444",
  colors: {
    hover: "hsla(0, 0%, 100%, 0.07)",
    active: "hsla(0, 0%, 100%, 0.2)",
    dark: "#444444",
    darkContrast: "#FFFFFF",
    light: "#FFFFFF",
    lightContrast: "#444444",
  },

  opacity: {
    op50: 0.5,
    op70: 0.7,
    op80: 0.8,
    op90: 0.9,
    op95: 0.95,
  },

  typography: {
    fontSizes: {
      size12: "12px",
      size14: "14px",
      size16: "16px",
      size20: "20px",
      size26: "26px",
      size32: "32px",
      size42: "42px",
    },

    lineHeight: "1.6",
    lineHeightSmall: "1.4",

    fontFamilyDisplay: "Playfair Display, serif",
    fontFamily: "Futura, Roboto, sans-serif",
    fontWeight: "400",
    fontWeightBold: "600",
  },

  display: {
    inputHeight: "48px",
    borderRadius: "6px",

    navHeightSmall: 50,
    navHeightMedium: 112,
    navHeightLarge: 156,
    navTextWidth: 120,
    navIconWidth: 50,
    navZIndex: 2,
    subnavZIndex: 1,
    popOverWidthMin: 180,
    popOverWidthMax: 400,
    dropdownWrapperZIndex: 10,
    dropdownOptionsZIndex: 11,
    modalHeadingZIndex: 100,
    modalHeadingHeight: 96,
    modalPadding: "3rem",
    formMediumWidth: 480,
    drawerNavWidth: 320,
  },

  spacers: {
    size4: rem("4px"),
    size8: rem("8px"),
    size12: rem("12px"),
    size16: rem("16px"),
    size24: rem("24px"),
    size32: rem("32px"),
    size40: rem("40px"),
    size48: rem("48px"),
    size64: rem("64px"),
    size80: rem("80px"),
    size96: rem("96px"),
    size128: rem("128px"),
  },

  wrappers: {
    small: "320px",
    medium: "480px",
    large: "800px",
    extraLarge: "98%",
  },
};

type DefaultMUITheme = DefaultTheme & CustomThemeType;

export const ThemeProvider: BaseThemeProviderComponent<
  CustomThemeType,
  DefaultMUITheme
> = TProvider;
export const ThemeContext = TContext;

export const createMyTheme = (options?: ThemeOptions) => {
  return createMuiTheme({
    custom: theme,
    ...options,
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
  });
};

export const muiTheme = createMyTheme({});
