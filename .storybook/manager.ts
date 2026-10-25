import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const royverseTheme = create({
  base: 'dark',
  brandTitle: "Roy Mootsana · Ecosystem Design System",
  brandUrl: 'https://roymootsana.art/',
  brandTarget: '_self',

  colorPrimary: '#F97316',
  colorSecondary: '#3B82F6',

  // UI
  appBg: '#090A0D',
  appContentBg: '#0F1117',
  appBorderColor: '#1F2430',
  appBorderRadius: 8,

  // Typography
  fontBase: '"Plus Jakarta Sans", sans-serif',
  fontCode: '"JetBrains Mono", monospace',

  // Text colors
  textColor: '#F3F4F6',
  textInverseColor: '#111827',

  // Toolbar default and active colors
  barTextColor: '#9CA3AF',
  barSelectedColor: '#FFFFFF',
  barBg: '#0D0E14',

  // Form colors
  inputBg: '#161922',
  inputBorder: '#272B38',
  inputTextColor: '#F9FAFB',
  inputBorderRadius: 6,
});

addons.setConfig({
  theme: royverseTheme,
});
