/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths based on your project structure
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E40AF", // Custom primary color
          secondary: "#9333EA", // Custom secondary color
          accent: "#FACC15", // Custom accent color
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"], // Custom font
          mono: ["Fira Code", "monospace"],
        },
        spacing: {
          "128": "32rem", // Custom spacing
          "144": "36rem",
        },
        borderRadius: {
          xl: "1.5rem",
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"), // Forms plugin
      require("@tailwindcss/typography"), // Typography plugin
      require("@tailwindcss/aspect-ratio"), // Aspect-ratio plugin
    ],
  };
  