const WIDTH = 1500;
const HEIGHT = 1500;
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyser;

function handleError(err) {
    console.log("You must give permission to proceed!");
}

async function getAudio() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true }).catch(handleError);
    const audioCtx = new AudioContext();
    analyser = audioCtx.createAnalyser();
    const source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyser);
    // How much data should be collected
    analyser.fftSize = 2 ** 10;
    // Pull the data off the audio
    const timeData = new Uint8Array(analyser.frequencyBinCount);
    const frequencyData = new Uint8Array(analyser.frequencyBinCount);
    console.log(frequencyData);
}

getAudio();
