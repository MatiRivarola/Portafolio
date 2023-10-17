/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
  extend: {
    colors: {
      primary: "#131424",
      secondary: "#393A47",
      accent: "#F8DE22",
      other: "#",
    },
    backgroundImage: {
      explosion: 'url("/bg-explosion.png")',
      circles: 'url("/bg-circles.png")',
      circleStar: 'url("/circularformboton.svg")',
      site: 'url("/bg-site.png")',
    },
    animation: {
      "spin-slow": "spin 8s linear infinite",
    },
    fontFamily: {
      poppins: [`var(--font-poppins)`, "sans-serif"],
      sora: [`var(--font-sora)`, "sans-serif"],
    },
  },
};
export const plugins = [require("tailwind-scrollbar")];
