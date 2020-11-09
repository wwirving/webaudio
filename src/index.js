// src/index.js

// quick and dirty:
import { Synth } from 'tone';

// better
// import Synth from 'tone/Tone/instrument/Synth';

let synth = new Synth().toMaster();

const playButton = document.getElementById("play-button");

playButton.addEventListener('click', () => {
    synth.triggerAttackRelease('A3', '4n');
});