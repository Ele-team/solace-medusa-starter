export const colors = {
  colors: {
    grey: {
      10: 'rgb(255, 255, 255)',
      50: 'rgb(249, 249, 249)',
      100: 'rgb(237, 237, 237)',
      200: 'rgb(229, 229, 229)',
      300: 'rgb(210, 210, 210)',
      400: 'rgb(165, 165, 165)',
      500: 'rgb(140, 140, 140)',
      600: 'rgb(108, 108, 108)',
      700: 'rgb(70, 70, 70)',
      800: 'rgb(34, 34, 34)',
      900: 'rgb(9, 9, 9)',
    },
    brand: {
      10: 'rgb(255, 255, 255)',
      50: 'rgb(249, 249, 249)',
      100: 'rgb(237, 237, 237)',
      200: 'rgb(229, 229, 229)',
      300: 'rgb(210, 210, 210)',
      400: 'rgb(165, 165, 165)',
      500: 'rgb(140, 140, 140)',
      600: 'rgb(108, 108, 108)',
      700: 'rgb(26, 26, 26)',
      800: 'rgb(17, 17, 17)',
      900: 'rgb(9, 9, 9)',
    },
    red: {
      50: 'rgb(254, 243, 242)',
      100: 'rgb(254, 228, 226)',
      200: 'rgb(254, 205, 202)',
      300: 'rgb(253, 162, 155)',
      400: 'rgb(249, 112, 102)',
      500: 'rgb(240, 68, 56)',
      600: 'rgb(217, 45, 32)',
      700: 'rgb(180, 35, 24)',
      800: 'rgb(145, 32, 24)',
      900: 'rgb(122, 39, 26)',
    },
    green: {
      50: 'rgb(236, 253, 243)',
      100: 'rgb(209, 250, 223)',
      200: 'rgb(166, 244, 197)',
      300: 'rgb(108, 233, 166)',
      400: 'rgb(50, 213, 131)',
      500: 'rgb(18, 183, 106)',
      600: 'rgb(3, 152, 85)',
      700: 'rgb(2, 122, 72)',
      800: 'rgb(5, 96, 58)',
      900: 'rgb(5, 79, 49)',
    },
    yellow: {
      50: 'rgb(255, 250, 235)',
      100: 'rgb(254, 240, 199)',
      200: 'rgb(254, 223, 137)',
      300: 'rgb(254, 200, 75)',
      400: 'rgb(253, 176, 34)',
      500: 'rgb(247, 144, 9)',
      600: 'rgb(220, 104, 3)',
      700: 'rgb(181, 71, 8)',
      800: 'rgb(147, 55, 13)',
      900: 'rgb(122, 46, 14)',
    },
  },
  backgroundImage: {
    'doc-gradient':
      'linear-gradient(to left top, rgba(128, 245, 145,0.85) 0%, rgba(14, 171, 39,0.7) 50%, rgb(16, 87, 29) 100%)',
  },
  backgroundColor: {
    static: 'rgb(var(--bg-static) / <alpha-value>)',
    primary: 'rgb(var(--bg-primary) / <alpha-value>)',
    secondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
    brand: 'rgb(var(--bg-brand) / <alpha-value>)',
    hover: 'rgb(var(--bg-hover) / <alpha-value>)',
    pressed: 'rgb(var(--bg-pressed) / <alpha-value>)',
    disabled: 'rgb(var(--bg-disabled) / <alpha-value>)',
    'fg-primary': 'rgb(var(--fg-primary) / <alpha-value>)',
    'fg-primary-hover': 'rgb(var(--fg-primary-hover) / <alpha-value>)',
    'fg-primary-pressed': 'rgb(var(--fg-primary-pressed) / <alpha-value>)',
    'fg-secondary': 'rgb(var(--fg-secondary))',
    'fg-secondary-hover': 'rgb(var(--fg-secondary-hover))',
    'fg-secondary-pressed': 'rgb(var(--fg-secondary-pressed))',
    'fg-tertiary': 'rgb(var(--fg-tertiary))',
    'fg-tertiary-hover': 'rgb(var(--fg-tertiary-hover))',
    'fg-tertiary-pressed': 'rgb(var(--fg-tertiary-pressed))',
    'fg-primary-negative': 'rgb(var(--fg-primary-negative) / <alpha-value>)',
    'fg-primary-negative-hover':
      'rgb(var(--fg-primary-negative-hover) / <alpha-value>)',
    'fg-primary-negative-pressed':
      'rgb(var(--fg-primary-negative-pressed) / <alpha-value>)',
    'fg-secondary-negative': 'rgb(var(--fg-secondary-negative))',
    'fg-positive': 'rgb(var(--fg-positive))',
  },
  textColor: {
    static: 'rgb(var(--content-static) / <alpha-value>)',
    'basic-primary': 'rgb(var(--content-basic-primary) / <alpha-value>)',
    'inverse-primary': 'rgb(var(--content-inverse-primary) / <alpha-value>)',
    secondary: 'rgb(var(--content-secondary) / <alpha-value>)',
    disabled: 'rgb(var(--content-disabled) / <alpha-value>)',
    'action-primary': 'rgb(var(--content-action-primary) / <alpha-value>)',
    'action-primary-hover':
      'rgb(var(--content-action-primary-hover) / <alpha-value>)',
    'action-primary-pressed':
      'rgb(var(--content-action-primary-pressed) / <alpha-value>)',
    negative: 'rgb(var(--content-negative) / <alpha-value>)',
    positive: 'rgb(var(--content-positive) / <alpha-value>)',
    warning: 'rgb(var(--content-warning) / <alpha-value>)',
    yellow: 'rgb(var(--content-yellow) / <alpha-value>)',
  },
  borderColor: {
    'basic-primary': 'rgb(var(--border-basic-primary) / <alpha-value>)',
    secondary: 'rgb(var(--border-secondary))',
    disabled: 'rgb(var(--border-disabled) / <alpha-value>)',
    'action-primary': 'rgb(var(--border-action-primary) / <alpha-value>)',
    'action-primary-hover':
      'rgb(var(--border-action-primary-hover) / <alpha-value>)',
    'action-primary-pressed':
      'rgb(var(--border-action-primary-pressed) / <alpha-value>)',
    negative: 'rgb(var(--border-negative) / <alpha-value>)',
    positive: 'rgb(var(--border-positive) / <alpha-value>)',
    warning: 'rgb(var(--border-warning) / <alpha-value>)',
  },
}

export const boxShadow = {
  'complementary-basic': '0 2px 10px rgba(0, 0, 0, 0.2)',
  'black-basic': '0px 2px 10px 0px rgba(9, 9, 9, 0.1)',
}