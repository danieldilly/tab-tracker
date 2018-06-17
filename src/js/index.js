// Import Styles
import scss from '../scss/style.scss';

// Import Images & Fonts
function importAll(r) { return r.keys().map(r); }
importAll(require.context('../img', true, /\.(png|jpe?g|gif|svg)$/));
importAll(require.context('../fonts', true, /\.(ttf|eot|woff|woff2)$/));
