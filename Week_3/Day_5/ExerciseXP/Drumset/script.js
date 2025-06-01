// Themes configuration
const themes = {
    rock: {
        name: 'Rock',
        background: 'https://ext.same-assets.com/3596756454/1029946439.jpeg',
        drumPads: [
            { key: 'A', keyCode: 65, sound: 'Boom', audioSrc: 'https://ext.same-assets.com/3596756454/3968049239.wav' },
            { key: 'S', keyCode: 83, sound: 'Clap', audioSrc: 'https://ext.same-assets.com/3596756454/1147091045.wav' },
            { key: 'D', keyCode: 68, sound: 'HiHat', audioSrc: 'https://ext.same-assets.com/3596756454/3305224599.wav' },
            { key: 'F', keyCode: 70, sound: 'Kick', audioSrc: 'https://ext.same-assets.com/3596756454/3978898488.wav' },
            { key: 'G', keyCode: 71, sound: 'OpenHat', audioSrc: 'https://ext.same-assets.com/3596756454/373126005.wav' },
            { key: 'H', keyCode: 72, sound: 'Ride', audioSrc: 'https://ext.same-assets.com/3596756454/569969605.wav' },
            { key: 'J', keyCode: 74, sound: 'Snare', audioSrc: 'https://ext.same-assets.com/3596756454/3893929532.wav' },
            { key: 'K', keyCode: 75, sound: 'Tink', audioSrc: 'https://ext.same-assets.com/3596756454/2275160505.wav' },
            { key: 'L', keyCode: 76, sound: 'Tom', audioSrc: 'https://ext.same-assets.com/3596756454/3465791037.wav' }
        ]
    },
    jazz: {
        name: 'Jazz',
        background: 'https://thumbs.dreamstime.com/b/saxophone-microphone-dimly-lit-stage-ready-jazz-music-smoky-saxophones-creates-moody-atmosphere-perfect-concerts-368143816.jpg',
        drumPads: [
            { key: 'A', keyCode: 65, sound: 'Brush', audioSrc: 'https://ext.same-assets.com/3596756454/3968049239.wav' },
            { key: 'S', keyCode: 83, sound: 'Snap', audioSrc: 'https://ext.same-assets.com/3596756454/1147091045.wav' },
            { key: 'D', keyCode: 68, sound: 'HiHat', audioSrc: 'https://ext.same-assets.com/3596756454/3305224599.wav' },
            { key: 'F', keyCode: 70, sound: 'Bass', audioSrc: 'https://ext.same-assets.com/3596756454/3978898488.wav' },
            { key: 'G', keyCode: 71, sound: 'Splash', audioSrc: 'https://ext.same-assets.com/3596756454/373126005.wav' },
            { key: 'H', keyCode: 72, sound: 'Ride', audioSrc: 'https://ext.same-assets.com/3596756454/569969605.wav' },
            { key: 'J', keyCode: 74, sound: 'Snare', audioSrc: 'https://ext.same-assets.com/3596756454/3893929532.wav' },
            { key: 'K', keyCode: 75, sound: 'Bell', audioSrc: 'https://ext.same-assets.com/3596756454/2275160505.wav' },
            { key: 'L', keyCode: 76, sound: 'Tom', audioSrc: 'https://ext.same-assets.com/3596756454/3465791037.wav' }
        ]
    },
    electronic: {
        name: 'Electronic',
        background: 'https://images.stockcake.com/public/b/4/3/b43ba526-451e-40e3-8336-7a5332ebb75e_large/neon-dj-performance-stockcake.jpg',
        drumPads: [
            { key: 'A', keyCode: 65, sound: 'Bass', audioSrc: 'https://ext.same-assets.com/3596756454/3968049239.wav' },
            { key: 'S', keyCode: 83, sound: 'Clap', audioSrc: 'https://ext.same-assets.com/3596756454/1147091045.wav' },
            { key: 'D', keyCode: 68, sound: 'Synth', audioSrc: 'https://ext.same-assets.com/3596756454/3305224599.wav' },
            { key: 'F', keyCode: 70, sound: 'Kick', audioSrc: 'https://ext.same-assets.com/3596756454/3978898488.wav' },
            { key: 'G', keyCode: 71, sound: 'Laser', audioSrc: 'https://ext.same-assets.com/3596756454/373126005.wav' },
            { key: 'H', keyCode: 72, sound: 'Pulse', audioSrc: 'https://ext.same-assets.com/3596756454/569969605.wav' },
            { key: 'J', keyCode: 74, sound: 'Beat', audioSrc: 'https://ext.same-assets.com/3596756454/3893929532.wav' },
            { key: 'K', keyCode: 75, sound: 'Zap', audioSrc: 'https://ext.same-assets.com/3596756454/2275160505.wav' },
            { key: 'L', keyCode: 76, sound: 'Drop', audioSrc: 'https://ext.same-assets.com/3596756454/3465791037.wav' }
        ]
    }
};

// State
let currentTheme = 'rock';
let volumes = {};
let showControls = false;
let audioElements = {};

// Initialize the application
function init() {
    initializeVolumes();
    renderDrums();
    renderVolumeControls();
    setupEventListeners();
    // Set initial background
    const app = document.getElementById('app');
    app.style.backgroundImage = `url(${themes[currentTheme].background})`;
}

// Initialize default volumes
function initializeVolumes() {
    volumes = {};
    for (const pad of themes[currentTheme].drumPads) {
        volumes[pad.keyCode] = 0.8; // Default 80% volume
    }
}

// Render drum pads
function renderDrums() {
    const container = document.getElementById('drumContainer');
    container.innerHTML = '';

    // Clear existing audio elements
    for (const key in audioElements) {
        document.body.removeChild(audioElements[key]);
    }
    audioElements = {};

    themes[currentTheme].drumPads.forEach(pad => {
        // Create drum pad
        const drumDiv = document.createElement('div');
        drumDiv.className = 'drum';
        drumDiv.setAttribute('data-key', pad.keyCode);
        drumDiv.addEventListener('click', () => playSound(pad.keyCode));

        const kbd = document.createElement('kbd');
        kbd.textContent = pad.key;

        const span = document.createElement('span');
        span.className = 'note';
        span.textContent = pad.sound;

        drumDiv.appendChild(kbd);
        drumDiv.appendChild(span);
        container.appendChild(drumDiv);

        // Create audio element
        const audio = document.createElement('audio');
        audio.preload = 'auto';
        audio.src = pad.audioSrc;
        audioElements[pad.keyCode] = audio;
        document.body.appendChild(audio);
    });
}

// Render volume controls
function renderVolumeControls() {
    const volumeControlsDiv = document.getElementById('volumeControls');
    volumeControlsDiv.innerHTML = '';

    themes[currentTheme].drumPads.forEach(pad => {
        const controlDiv = document.createElement('div');
        controlDiv.className = 'volume-control';

        const label = document.createElement('label');
        label.textContent = `${pad.key} - ${pad.sound}:`;

        const input = document.createElement('input');
        input.type = 'range';
        input.min = '0';
        input.max = '1';
        input.step = '0.1';
        input.value = volumes[pad.keyCode] || 0.8;
        input.addEventListener('input', (e) => handleVolumeChange(pad.keyCode, parseFloat(e.target.value)));

        const span = document.createElement('span');
        span.textContent = `${Math.round((volumes[pad.keyCode] || 0.8) * 100)}%`;
        span.id = `volume-${pad.keyCode}`;

        controlDiv.appendChild(label);
        controlDiv.appendChild(input);
        controlDiv.appendChild(span);
        volumeControlsDiv.appendChild(controlDiv);
    });
}

// Play sound
function playSound(keyCode) {
    const audio = audioElements[keyCode];
    if (!audio) return;

    audio.currentTime = 0; // Reset to start
    audio.volume = volumes[keyCode] || 0.8;
    audio.play().catch(e => console.error('Error playing audio:', e));

    // Add visual feedback
    const drumElement = document.querySelector(`[data-key="${keyCode}"]`);
    if (drumElement) {
        drumElement.classList.add('playing');
        setTimeout(() => {
            drumElement.classList.remove('playing');
        }, 200);
    }
}

// Handle volume change
function handleVolumeChange(keyCode, volume) {
    volumes[keyCode] = volume;
    const volumeSpan = document.getElementById(`volume-${keyCode}`);
    if (volumeSpan) {
        volumeSpan.textContent = `${Math.round(volume * 100)}%`;
    }
}

// Toggle controls panel
function toggleControls() {
    showControls = !showControls;
    const controlsContent = document.getElementById('controlsContent');
    controlsContent.classList.toggle('visible', showControls);
}

// Change theme
function changeTheme() {
    const themeSelector = document.getElementById('themeSelector');
    currentTheme = themeSelector.value;

    // Update background
    const app = document.getElementById('app');
    app.style.backgroundImage = `url(${themes[currentTheme].background})`;

    // Reinitialize everything for new theme
    initializeVolumes();
    renderDrums();
    renderVolumeControls();
}

// Setup event listeners
function setupEventListeners() {
    // Controls toggle button
    const controlsToggle = document.getElementById('controlsToggle');
    controlsToggle.addEventListener('click', toggleControls);

    // Theme selector change
    const themeSelector = document.getElementById('themeSelector');
    themeSelector.addEventListener('change', changeTheme);

    // Keyboard events
    document.addEventListener('keydown', (e) => {
        const keyCode = e.keyCode || e.which;
        playSound(keyCode);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);
