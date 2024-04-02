import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '550px',
        sm: '744px',
        md: '950px',
        lg: '1128px',
        xl: '1440px',
      },
      colors: {
        'airbnb-red': '#FF385C',
        'airbnb-pink': '#FFB2A6',
        'airbnb-light-gray': '#F7F7F7',
        'airbnb-gray': '#DDDDDD',
        'airbnb-medium-gray': '#717171',
        'airbnb-deep-gray': '#EBEBEB',
        'airbnb-dark': '#222222',
      },
      fontFamily: {
        sans: [
          'Circular',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '16': '4rem',
        // Adicione mais conforme necessário
      },
      borderRadius: {
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        // Personalize de acordo com o design do Airbnb
      },
      boxShadow: {
        xs: 'rgb(0 0 0/8%) 0 1px 0',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        // Adapte os shadows conforme o design do Airbnb
      },
      // Continue personalizando conforme necessário
    },
  },
  plugins: [],
};
export default config;
