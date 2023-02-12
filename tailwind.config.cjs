/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "nature-light": "url('./assets/main.png')",
        "avatar-pic": "url('./assets/avatar.jpg')",
        "search-pic": "url('./assets/search.png')",
        "trending-pic": "url('./assets/trending.png')",
        "trend-pic": "url('./assets/trend.png')",
        "tren-pic": "url('./assets/tren.png')",
        "location-pic": "url('./assets/map.png')",
      },
      color: {
        primary: "#001235",
        "primary-bg": "#ff8700",
        "bord-bg": "#EF5DA8",
      },
    },
  },
  plugins: [],
};
