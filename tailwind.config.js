/** @type {import('tailwindcss').Config} */

module.exports = {
  /* Huh. Must be relative to projectRoot, because tailwindcss is run from the project root. */
  content: ["../../apps/example/src/**/*.{js,jsx,ts,tsx}", "../../packages/ui/src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
