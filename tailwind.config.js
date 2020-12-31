module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "alice-blue": "#e6f2ff",
        "hawkes-blue": "#ccddff",
        jade: "#00cb75",
        gossip: "#8ee26b",
        "golden-tainoi": "#fec258",
        mustard: "#fee058",
        "Light-Coral": "#ef6f6c",
      },
    },
  },
  variants: {
    extend: {
      outline: ["active"],
      margin: ["last"],
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
