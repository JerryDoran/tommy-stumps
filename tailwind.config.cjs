/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
      animation: {
        fade: 'fadeOut .3s ease-in-out',
        moveBanner: 'fadeBanner 1.5s ease-in',
      },
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeBanner: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      }),
    },
  },
  plugins: [],
};
