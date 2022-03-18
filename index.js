import test from './js/drawingFunctions.js';
import NoiseMaker from './js/noiseFunctions.js';
import colorizer from './js/dataVisualizer.js';
const screen = document.getElementById('screen');
screen.style.height = window.innerHeight;
screen.style.width = window.innerWidth;
let g = new test(screen,window.innerWidth,window.innerHeight);
let trumpet = new NoiseMaker();
// g.drawRectangle('green');
// g.drawHexRow(['green','brown','red','brown','brown','brown','green','green'],0,0);
let dataLayer = trumpet.enhance(trumpet.swapXY(trumpet.noise2D(80,60)),50,100);
let colorGrid = colorizer(dataLayer);
const colorGridOld = [
  ['green','brown','brown','brown','brown','brown','green','green','green','green','green','green'],
  ['green','green','red','brown','brown','brown','green','green','green','green','green','green'],
  ['green','green','green','brown','brown','brown','brown','green','green','green','green','green']
];
g.drawHexGrid(colorGrid);