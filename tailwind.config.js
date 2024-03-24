/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {},
    fontFamily: {
      'maple': ["Maple Mono"],
      'inter': ["Inter"]
    },
  },
  safelist: [
    {
      pattern: /bg-ctp-*|text-ctp-*|border-ctp-*|from-ctp-*|to-ctp-*/,
    }
  ],
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "mocha",
    })
  ],
}
