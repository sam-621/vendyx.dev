import { vendyxStylesForTw } from '@vendyx/theme';

/** @type {import('tailwindcss').Config} */
export default {
  ...vendyxStylesForTw(),
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
};
