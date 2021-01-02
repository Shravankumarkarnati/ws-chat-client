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
        "color-primary": "#4ecdc4ff",
        "color-secondary": "#ff6b6bff",
        "color-teritary": "#ffe66dff",
        "color-black": "#292f36ff",
        "color-white": "#f7fff7ff",
      },
      outline: {
        "solid-black": "2px solid #292f36ff",
      },
      gridTemplateColumns: {
        userProfile: "1fr min-content",
      },
      animation: {
        "spin-once": "spin 1s linear 1",
      },
    },
  },
  variants: {
    extend: {
      outline: ["active"],
      margin: ["last", "focus-within"],
      animation: ["hover", "focus"],
    },
  },
  plugins: [],
};

// "alice-blue": "#e6f2ff",
//         "alice-blue-light": "#CAD1E5",
//         "hawkes-blue": "#ccddff",
//         jade: "#00cb75",
//         gossip: "#8ee26b",
//         "golden-tainoi": "#fec258",
//         mustard: "#fee058",
//         "Light-Coral": "#ef6f6c",
//         "kar-blue": "#2F4858",
//         "kar-blue-light": "#95b3c7",
//         "nati-blue": "#186773",
//         "madhuri-green": "#1A8678",
//         "kar-black": "#000619",

/*
"alice-blue":"#e6f2ff"
"hawkes-blue":"#ccddff"
"jade":"#00cb75"
"gossip":"#8ee26b"
"golden-tainoi":"#fec258" 
"mustard":"#fee058" 
*/

// /* CSS HEX */
// --gunmetal: #292f36ff;
// --medium-turquoise: #4ecdc4ff;
// --mint-cream: #f7fff7ff;
// --bittersweet: #ff6b6bff;
// --naples-yellow: #ffe66dff;

// /* CSS HSL */
// --gunmetal: hsla(212, 14%, 19%, 1);
// --medium-turquoise: hsla(176, 56%, 55%, 1);
// --mint-cream: hsla(120, 100%, 98%, 1);
// --bittersweet: hsla(0, 100%, 71%, 1);
// --naples-yellow: hsla(50, 100%, 71%, 1);

// /* SCSS HEX */
// $gunmetal: #292f36ff;
// $medium-turquoise: #4ecdc4ff;
// $mint-cream: #f7fff7ff;
// $bittersweet: #ff6b6bff;
// $naples-yellow: #ffe66dff;

// /* SCSS HSL */
// $gunmetal: hsla(212, 14%, 19%, 1);
// $medium-turquoise: hsla(176, 56%, 55%, 1);
// $mint-cream: hsla(120, 100%, 98%, 1);
// $bittersweet: hsla(0, 100%, 71%, 1);
// $naples-yellow: hsla(50, 100%, 71%, 1);

// /* SCSS RGB */
// $gunmetal: rgba(41, 47, 54, 1);
// $medium-turquoise: rgba(78, 205, 196, 1);
// $mint-cream: rgba(247, 255, 247, 1);
// $bittersweet: rgba(255, 107, 107, 1);
// $naples-yellow: rgba(255, 230, 109, 1);

// /* SCSS Gradient */
// $gradient-top: linear-gradient(0deg, #292f36ff, #4ecdc4ff, #f7fff7ff, #ff6b6bff, #ffe66dff);
// $gradient-right: linear-gradient(90deg, #292f36ff, #4ecdc4ff, #f7fff7ff, #ff6b6bff, #ffe66dff);
// $gradient-bottom: linear-gradient(180deg, #292f36ff, #4ecdc4ff, #f7fff7ff, #ff6b6bff, #ffe66dff);
// $gradient-left: linear-gradient(270deg, #292f36ff, #4ecdc4ff, #f7fff7ff, #ff6b6bff, #ffe66dff);
// $gradient-top-right: linear-gradient(45deg, #292f36ff, #4ecdc4ff, #f7fff7ff, #ff6b6bff, #ffe66dff);
// $gradient-bottom-right: linear-gradient(135deg, #292f36ff, #4ecdc4ff, #f7fff7ff, #ff6b6bff, #ffe66dff);
// $gradient-top-left: linear-gradient(225deg, #292f36ff, #4ecdc4ff, #f7fff7ff, #ff6b6bff, #ffe66dff);
// $gradient-bottom-left: linear-gradient(315deg, #292f36ff, #4ecdc4ff, #f7fff7ff, #ff6b6bff, #ffe66dff);
// $gradient-radial: radial-gradient(#292f36ff, #4ecdc4ff, #f7fff7ff, #ff6b6bff, #ffe66dff);
