/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "nature-light": "url('./assets/main.png')",
        "avatar-pic": "url('./assets/avatar.jpg')",
        "search-pic": "url('./assets/search.png')",
        "trending-pic": "url('./assets/trending.jpg')",
        "trend-pic": "url('./assets/trend.png')",
        "tren-pic": "url('./assets/tren.jpg')",
        "location-pic": "url('./assets/map.png')",
        "event-pic": "url('./assets/events.jpg')",
        "wendy-pic": "url('./assets/wendy.jpg')",
        "main-pic": "url('./assets/main.jpg')",
      },
      colors: {
        primary: "#001235",
        mainRed: "#EA4C89",
        lightBG: "#D6E4E5",
        "darkBG-2": "#01407A",
        "orange-2": "#EA5933",
        "green-2": "#297980",
        "brown-2": "#9F616A",
      },
      fontFamily: {
        Lobster: ["Lobster", "cursive"],
      },
    },
  },
  plugins: [],
};
