const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    require("tailwindcss-animate"),
    nextui({
    prefix: 'sotru',
    layout: {
      spacingUnit: 4, // in px
      disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
      dividerWeight: "1px", // h-divider the default height applied to the divider component
      fontSize: {
        tiny: "0.75rem", // text-tiny
        small: "0.875rem", // text-small
        medium: "1rem", // text-medium
        large: "1.125rem", // text-large
      },
      lineHeight: {
        tiny: "1rem", // text-tiny
        small: "1.25rem", // text-small
        medium: "1.5rem", // text-medium
        large: "1.75rem", // text-large
      },
      radius: {
        small: "8px", // rounded-small
        medium: "12px", // rounded-medium
        large: "14px", // rounded-large
      },
      borderWidth: {
        small: "1px", // border-small
        medium: "2px", // border-medium (default)
        large: "3px", // border-large
      },
    },
    themes: {
      "sotru-dark": {
        extend: "dark", // <- inherit default values from dark theme
        colors: {
          background: "#010311",
          foreground: "#ffffff",
          primary: {
            50: "#001731",
            100: "#002e62",
            200: "#004493",
            300: "#005bc4",
            400: "#006FEE",
            500: "#338ef7",
            600: "#66aaf9",
            700: "#99c7fb",
            800: "#cce3fd",
            900: "#e6f1fe",
            DEFAULT: "#338ef7",
          },
          secondary: {
            50: "#180828",
            100: "#301050",
            200: "#481878",
            300: "#6020a0",
            400: "#7828c8",
            500: "#9353d3",
            600: "#ae7ede",
            700: "#c9a9e9",
            800: "#e4d4f4",
            900: "#f2eafa",
            DEFAULT: "#7828c8",
          },
          success: {
            50: "#052814",
            100: "#095028",
            200: "#0e793c",
            300: "#12a150",
            400: "#17c964",
            500: "#45d483",
            600: "#74dfa2",
            700: "#a2e9c1",
            800: "#d1f4e0",
            900: "#e8faf0",
            DEFAULT: "#45d483",
          },
          warning: {
            50: "#312107",
            100: "#62420e",
            200: "#936316",
            300: "#c4841d",
            400: "#f5a524",
            500: "#f7b750",
            600: "#f9c97c",
            700: "#fbdba7",
            800: "#fdedd3",
            900: "#fefce8",
            DEFAULT: "#f7b750",
          },
          danger: {
            50: "#310413",
            100: "#610726",
            200: "#920b3a",
            300: "#c20e4d",
            400: "#f31260",
            500: "#f54180",
            600: "#f871a0",
            700: "#faa0bf",
            800: "#fdd0df",
            900: "#fee7ef",
            DEFAULT: "#f54180",
          },
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
    },
    spacingUnit: {
      'unit-xs': '8px', // 2 * spacingUnit
      'unit-sm': '12px', // 3 * spacingUnit
      'unit-md': '16px', // 4 * spacingUnit
      'unit-lg': '22px', // 5.5 * spacingUnit
      'unit-xl': '36px', // 9 * spacingUnit
      'unit-2xl': '48px', // 12 * spacingUnit
      'unit-3xl': '80px', // 20 * spacingUnit
      'unit-4xl': '120px', // 30 * spacingUnit
      'unit-5xl': '224px', // 56 * spacingUnit
      'unit-6xl': '288px', // 72 * spacingUnit
      'unit-7xl': '384px', // 96 * spacingUnit
      'unit-8xl': '512px', // 128 * spacingUnit
      'unit-9xl': '640px', // 160 * spacingUnit
      'unit-0': '0px', // 0 * spacingUnit
      'unit-1': '4px', // 1 * spacingUnit
      'unit-2': '8px', // 2 * spacingUnit
      'unit-3': '12px', // 3 * spacingUnit
      'unit-3_5': '14px', // 3.5 * spacingUnit
      'unit-4': '16px', // 4 * spacingUnit
      'unit-5': '20px', // 5 * spacingUnit
      'unit-6': '24px', // 6 * spacingUnit
      'unit-7': '28px', // 7 * spacingUnit
      'unit-8': '32px', // 8 * spacingUnit
      'unit-9': '36px', // 9 * spacingUnit
      'unit-10': '40px', // 10 * spacingUnit
      'unit-11': '44px', // 11 * spacingUnit
      'unit-12': '48px', // 12 * spacingUnit
      'unit-13': '52px', // 13 * spacingUnit
      'unit-14': '56px', // 14 * spacingUnit
      'unit-15': '60px', // 15 * spacingUnit
      'unit-16': '64px', // 16 * spacingUnit
      'unit-17': '68px', // 17 * spacingUnit
      'unit-18': '72px', // 18 * spacingUnit
      'unit-20': '80px', // 20 * spacingUnit
      'unit-24': '96px', // 24 * spacingUnit
      'unit-28': '112px', // 28 * spacingUnit
      'unit-32': '128px', // 32 * spacingUnit
      'unit-36': '144px', // 36 * spacingUnit
      'unit-40': '160px', // 40 * spacingUnit
      'unit-44': '176px', // 44 * spacingUnit
      'unit-48': '192px', // 48 * spacingUnit
      'unit-52': '208px', // 52 * spacingUnit
      'unit-56': '224px', // 56 * spacingUnit
      'unit-60': '240px', // 60 * spacingUnit
      'unit-64': '256px', // 64 * spacingUnit
      'unit-72': '288px', // 72 * spacingUnit
      'unit-80': '320px', // 80 * spacingUnit
      'unit-96': '384px', // 96 * spacingUnit
    }
  })],
}