/* eslint-disable no-use-before-define */
const WIDTH = 1500;
const HEIGHT = 1500;
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyser;
let bufferLength;

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
    // How many pieces of data are there
    bufferLength = analyser.frequencyBinCount;
    const timeData = new Uint8Array(bufferLength);
    const frequencyData = new Uint8Array(bufferLength);
    drawTimeData(timeData);
}

function drawTimeData(timeData) {
    // inject the time data into our timeData array
    analyser.getByteTimeDomainData(timeData);

    // turning the data collected into something visual
    // 1. Clear the canvas TODO
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // 2. Setup some canvas drawing
    ctx.lineWidth = 10;
    ctx.strokeStyle = "orange";
    ctx.beginPath();
    const sliceWidth = WIDTH / bufferLength;
    let x = 0;
    timeData.forEach((data, i) => {
        const v = data / 128;
        const y = (v * HEIGHT) / 2;
        // draw the lines
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
        x += sliceWidth;
    });

    ctx.stroke();

    // call itself as soon as possible
    requestAnimationFrame(() => drawTimeData(timeData));
}

getAudio();
