import GothamBoldItalic from '~/assets/fonts/gotham-bold-italic.woff2';
import GothamBold from '~/assets/fonts/gotham-bold.woff2';
import GothamBookItalic from '~/assets/fonts/gotham-book-italic.woff2';
import GothamBook from '~/assets/fonts/gotham-book.woff2';
import GothamMediumItalic from '~/assets/fonts/gotham-medium-italic.woff2';
import GothamMedium from '~/assets/fonts/gotham-medium.woff2';
import IPAGothic from '~/assets/fonts/ipa-gothic.woff2';
import { createContext, useContext } from 'react';
import { classes, media } from '~/utils/style';
import { themes, tokens } from './theme';

export const ThemeContext = createContext({});

export const ThemeProvider = ({
  theme = 'dark',
  children,
  className,
  as: Component = 'div',
  toggleTheme,
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: toggleTheme || parentTheme.toggleTheme,
      }}
    >
      {isRootProvider && children}
      {/* Nested providers need a div to override theme tokens */}
      {!isRootProvider && (
        <Component className={classes(className)} data-theme={theme} {...rest}>
          {children}
        </Component>
      )}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}

/**
 * Squeeze out spaces and newlines
 */
export function squish(styles) {
  return styles.replace(/\s\s+/g, ' ');
}

/**
 * Transform theme token objects into CSS custom property strings
 */
export function createThemeProperties(theme) {
  return squish(
    Object.keys(theme)
      .map(key => `--${key}: ${theme[key]};`)
      .join('\n\n')
  );
}

/**
 * Transform theme tokens into a React CSSProperties object
 */
export function createThemeStyleObject(theme) {
  let style = {};

  for (const key of Object.keys(theme)) {
    style[`--${key}`] = theme[key];
  }

  return style;
}

/**
 * Generate media queries for tokens
 */
export function createMediaTokenProperties() {
  return squish(
    Object.keys(media)
      .map(key => {
        return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
      })
      .join('\n')
  );
}

const layerStyles = squish(`
  @layer theme, base, components, layout;
`);

const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(themes.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(themes.light)}
  }
`);

const fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBook}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBookItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMedium}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMediumItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBold}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBoldItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${IPAGothic}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`);

const baseStyles = squish(`
  :root {
    --mobileNavOffset: calc(var(--spaceOuter) * 2 + var(--space2XL));
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  :where(html, body) {
    min-height: 100%;
    width: 100%;
    font-family: var(--fontStack);
    font-weight: var(--fontWeightRegular);
    background-color: var(--background);
    color: var(--textBody);
    transition: var(--durationM) ease;
    transition-property: background, opacity;
    overflow-x: hidden;
    opacity: 1;
  }

  :where(*, *::before, *::after) {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
  }

  :where(input, textarea, select, button) {
    font: inherit;
    color: inherit;
    border: 0;
    padding: 0;
    background-color: transparent;
    border-radius: 0;
    appearance: none;
  }

  :where(button, a) {
    touch-action: manipulation;
  }

  :where(svg, img, picture, video, iframe, canvas) {
    display: block;
  }

  :where(code, pre) {
    font-family: var(--monoFontStack);
  }

  :any-link {
    text-decoration: none;
  }

  ul {
    padding: 0;
  }

  ::selection {
    background: var(--accent);
    color: var(--black);
  }

  :focus {
    outline: 4px solid var(--text);
    outline-offset: 4px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes reveal {
    0% {
      transform: scale3d(0, 1, 1);
      transform-origin: left;
    }
    50% {
      transform: scale3d(1, 1, 1);
      transform-origin: left;
    }
    51% {
      transform: scale3d(1, 1, 1);
      transform-origin: right;
    }
    100% {
      transform: scale3d(0, 1, 1);
      transform-origin: right;
    }
  }
`);

export const themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }

  @layer base {
    ${baseStyles}
  }
`);
