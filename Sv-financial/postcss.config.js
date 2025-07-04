import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
  ],
};
// This is a PostCSS configuration file that uses Tailwind CSS and Autoprefixer as plugins.
// It exports an object with a plugins array that includes the two plugins.