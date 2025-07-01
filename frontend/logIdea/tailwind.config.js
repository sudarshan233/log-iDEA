import * as url from "node:url";


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'button': '#2E2E2E',
        'accent': '#FF7601',
        'background-color': '#151515',
        'sec-background-color': '#303030'
      },
      textColor: {
        "faded": "F2F2F2"
      },
      height: {
        'fiveHundredPixels': "700px"
      },
      stroke: {
        'accent': '#FF7601'
      },
      width: {
        'viewBar': '440px'
      }
    },
  },
  plugins: [],
}
