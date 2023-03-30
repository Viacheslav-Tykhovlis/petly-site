export const breakpoints = ['320', '768', '1280'];

export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    black: '#111111',
    accent: '#f59256', //orange
    backgroundFormInput: '#FDF7F2',
    transparentBackground: 'rgba(255, 255, 255, 0.6)',
    borderColor: 'rgba(245, 146, 86, 0.5)',
    secondaryText: 'rgba(17, 17, 17, 0.6)', // grey
    primaryText: '#535353', // grey text search
    error: '#FF0000', //red
  },
  fontWeight: {
    body: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  fontSizes: {
    xxxxs: '8px',
    xxxs: '12px',
    xxs: '14px',
    xs: '16px',
    s: '18px',
    m: '20px',
    l: '24px',
    xl: '28px',
    xxl: '32px',
    xxxl: '48px',
    xxxxl: '68px',
  },
  space: [
    '0',
    '4px',
    '8px',
    '16px',
    '20px',
    '24px',
    '32px',
    '64px',
    '128px',
    '256px',
    '512px',
  ],
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
    form: '7px 4px 14px rgba(0, 0, 0, 0.11)',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  breakpoints: [
    `${breakpoints[0]}px`,
    `${breakpoints[1]}px`,
    `${breakpoints[2]}px`,
  ],
  mq: {
    mobileOnly: `@media screen and (max-width: ${+breakpoints[1] - 1}px)`,
    tablet: `@media screen and (min-width: ${breakpoints[1]}px)`,
    tabletOnly: `@media screen and (min-width: ${
      breakpoints[1]
    }px) and (max-width: ${+breakpoints[2] - 1}px)`,
    desktop: `@media screen and (min-width: ${breakpoints[2]}px)`,
  },
});
