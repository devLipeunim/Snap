// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "first-color": "var(--first-color)",
        "second-color": "var(--second-color)",
        "third-color": "var(--third-color)",
        "deep-blue": "var(--deep-blue)",
        "white": "var(--white)",
      },
    },
  },
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    options: {
      safelist: ['first-color', 'second-color', 'third-color', 'deep-blue', 'white'],
    },
  },
  plugins: [],
};
