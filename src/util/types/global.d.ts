type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number];

type GithubSearchRepositoriesResponse = {
  pageInfo: {
    startCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    endCursor: string;
  };
  edges: {
    node: {
      id: string;
      name: string;
      forkCount: number;
      url: string;
      stargazerCount: number;
      nameWithOwner: string;
    };
  }[];
};

interface SearchInputOption {
  name: string;
}

type CustomThemeType = {
  zIndex: number;
  breakpoints: string[];
  boxShadow: string;
  boxShadowUnderline: string;
  clientBoxShadow: string;
  border: string;
  colors: {
    hover: string;
    active: string;
    dark: string;
    darkContrast: string;
    light: string;
    lightContrast: string;
  };

  opacity: {
    op50: number;
    op80: number;
    op70: number;
    op90: number;
    op95: number;
  };

  typography: {
    fontSizes: {
      size12: string;
      size14: string;
      size16: string;
      size20: string;
      size26: string;
      size32: string;
      size42: string;
    };

    lineHeight: string;
    lineHeightSmall: string;
    fontFamilyDisplay: string;
    fontFamily: string;
    fontWeight: string;
    fontWeightBold: string;
  };

  display: {
    borderRadius: string;
    inputHeight: string;

    navHeightSmall: number;
    navHeightMedium: number;
    navHeightLarge: number;
    navTextWidth: number;
    navIconWidth: number;
    navZIndex: number;
    subnavZIndex: number;
    dropdownWrapperZIndex: number;
    dropdownOptionsZIndex: number;
    modalHeadingZIndex: number;
    modalHeadingHeight: number;
    modalPadding: string;
    popOverWidthMin: number;
    popOverWidthMax: number;
    formMediumWidth: number;
    drawerNavWidth: number;
  };

  spacers: {
    size4: string;
    size8: string;
    size12: string;
    size16: string;
    size24: string;
    size32: string;
    size40: string;
    size48: string;
    size64: string;
    size80: string;
    size96: string;
    size128: string;
  };

  wrappers: {
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  };
};
