import { renderClock } from './components/clock/clock.js';
import { progressBar } from './components/progress-bar/progressBar.js';
import { socials } from './components/socials/socials.js';
import { socialsData } from './data/socialsData.js';
import { progressBarData } from './data/progressBarData.js';


renderClock('#hero_clock', '04-19 10:00:00');
socials('#socials_block', socialsData);
progressBar('.left-column > p', progressBarData);

const logoDom = document.querySelector('.logo');

function handleLogoClick(){
    console.log('Paspaustas');
}

logoDom.addEventListener ('click', handleLogoClick);