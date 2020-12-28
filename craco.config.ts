import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

const config = {
  style: {
    postcss: {
      plugins: [tailwind, autoprefixer],
    },
  },
};

export default config;
