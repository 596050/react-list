import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: CustomThemeType }>`
    html,
    body,
    #root {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        background-color: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.lightContrast};
    }

    body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4 {
        margin: 0
    }
  `;
