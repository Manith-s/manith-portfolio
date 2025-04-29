/**
 * This file ensures proper path references for GitHub Pages deployment
 */

const basename = process.env.NODE_ENV === 'production' 
  ? '/manith-portfolio' // Change this to match your GitHub repo name
  : '';

export default basename;