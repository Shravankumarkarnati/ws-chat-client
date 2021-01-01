module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    screens: {
      xsm: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1800px",
      "4xl": "2400px",
    },
    extend: {
      colors: {
        "alice-blue": "#e6f2ff",
        "alice-blue-light": "#CAD1E5",
        "hawkes-blue": "#ccddff",
        jade: "#00cb75",
        gossip: "#8ee26b",
        "golden-tainoi": "#fec258",
        mustard: "#fee058",
        "Light-Coral": "#ef6f6c",
        "kar-blue": "#2F4858",
        "nati-blue": "#186773",
        "madhuri-green": "#1A8678",
        "kar-black": "#000619",
      },
      outline: {
        "solid-black": "2px solid #2F4858",
      },
      gridTemplateColumns: {
        userProfile: "1fr min-content",
      },
    },
  },
  variants: {
    extend: {
      outline: ["active"],
      margin: ["last", "focus-within"],
    },
  },
  plugins: [],
};

/*
"alice-blue":"#e6f2ff"
"hawkes-blue":"#ccddff"
"jade":"#00cb75"
"gossip":"#8ee26b"
"golden-tainoi":"#fec258" 
"mustard":"#fee058" 
*/
