// ====================================================================
// A. VARIABLES GLOBALES (Configuración, Temas, Contexto)
// ====================================================================

const mainColorProperty = '--main-color';

// Estructura de tema: Colores de Esfera | Color Principal | Color Base Tarjeta (R, G, B) | Opacidad Tarjeta | Color Borde | Color Texto | Blur | Fondo Body | Opacidad Esferas
const themes = {
    // TEMAS GLASSMORPHISM
    'theme-blue': { 
        '--sphere-1-color': '#ff3e3e', '--sphere-2-color': '#3e9dff', '--sphere-3-color': '#3eff75', 
        'main-color': '#3e9dff', 
        'card-base-color': '255, 255, 255', /* Blanco */
        'card-bg-opacity': 0.1, 'card-border-color': 'rgba(255, 255, 255, 0.18)', 'card-text-color': '#ffffff', 'glass-blur': 'blur(15px)',
        'body-background': 'linear-gradient(135deg, #1e3a8a, #0c0a09)', 'sphere-opacity': 0.8 
    },
    'theme-red': { 
        '--sphere-1-color': '#ff0080', '--sphere-2-color': '#ff3e3e', '--sphere-3-color': '#ff9d3e', 
        'main-color': '#ff3e3e', 
        'card-base-color': '255, 255, 255',
        'card-bg-opacity': 0.1, 'card-border-color': 'rgba(255, 255, 255, 0.18)', 'card-text-color': '#ffffff', 'glass-blur': 'blur(15px)',
        'body-background': 'linear-gradient(135deg, #1e3a8a, #0c0a09)', 'sphere-opacity': 0.8 
    },
    'theme-purple': { 
        '--sphere-1-color': '#3eff75', '--sphere-2-color': '#ff3ef2', '--sphere-3-color': '#3e9dff', 
        'main-color': '#ff3ef2', 
        'card-base-color': '255, 255, 255',
        'card-bg-opacity': 0.1, 'card-border-color': 'rgba(255, 255, 255, 0.18)', 'card-text-color': '#ffffff', 'glass-blur': 'blur(15px)',
        'body-background': 'linear-gradient(135deg, #1e3a8a, #0c0a09)', 'sphere-opacity': 0.8 
    },
    'theme-green': { 
        '--sphere-1-color': '#ff3eff', '--sphere-2-color': '#3eff75', '--sphere-3-color': '#3effd9', 
        'main-color': '#3eff75', 
        'card-base-color': '255, 255, 255',
        'card-bg-opacity': 0.1, 'card-border-color': 'rgba(255, 255, 255, 0.18)', 'card-text-color': '#ffffff', 'glass-blur': 'blur(15px)',
        'body-background': 'linear-gradient(135deg, #1e3a8a, #0c0a09)', 'sphere-opacity': 0.8 
    },
    'theme-orange': { 
        '--sphere-1-color': '#00d0ff', '--sphere-2-color': '#ff8c3e', '--sphere-3-color': '#ffff00', 
        'main-color': '#ff8c3e', 
        'card-base-color': '255, 255, 255',
        'card-bg-opacity': 0.1, 'card-border-color': 'rgba(255, 255, 255, 0.18)', 'card-text-color': '#ffffff', 'glass-blur': 'blur(15px)',
        'body-background': 'linear-gradient(135deg, #1e3a8a, #0c0a09)', 'sphere-opacity': 0.8 
    },
    'theme-cyan': { 
        '--sphere-1-color': '#ff0000', '--sphere-2-color': '#3efff2', '--sphere-3-color': '#00ff3e', 
        'main-color': '#3efff2', 
        'card-base-color': '255, 255, 255',
        'card-bg-opacity': 0.1, 'card-border-color': 'rgba(255, 255, 255, 0.18)', 'card-text-color': '#ffffff', 'glass-blur': 'blur(15px)',
        'body-background': 'linear-gradient(135deg, #1e3a8a, #0c0a09)', 'sphere-opacity': 0.8 
    },
    'theme-gold': { 
        '--sphere-1-color': '#3e9dff', '--sphere-2-color': '#ffd700', '--sphere-3-color': '#ff00d0', 
        'main-color': '#ffd700', 
        'card-base-color': '255, 255, 255',
        'card-bg-opacity': 0.1, 'card-border-color': 'rgba(255, 255, 255, 0.18)', 'card-text-color': '#ffffff', 'glass-blur': 'blur(15px)',
        'body-background': 'linear-gradient(135deg, #1e3a8a, #0c0a09)', 'sphere-opacity': 0.8 
    },
    'theme-magenta': { 
        '--sphere-1-color': '#ff9d3e', '--sphere-2-color': '#c03eff', '--sphere-3-color': '#3eff75', 
        'main-color': '#c03eff', 
        'card-base-color': '255, 255, 255',
        'card-bg-opacity': 0.1, 'card-border-color': 'rgba(255, 255, 255, 0.18)', 'card-text-color': '#ffffff', 'glass-blur': 'blur(15px)',
        'body-background': 'linear-gradient(135deg, #1e3a8a, #0c0a09)', 'sphere-opacity': 0.8 
    },

    // TEMAS DE ALTO CONTRASTE Y MINIMALISTAS
    // Tema Blanco/Claro
'theme-light': { 
    '--sphere-1-color': '#000', '--sphere-2-color': '#000', '--sphere-3-color': '#000', 
    'main-color': '#ff6f61', /* NUEVO: Coral Suave y Cálido */
    'card-base-color': '37, 47, 63', /* NUEVO: Base de tarjeta Gris Oscuro */
    'card-bg-opacity': 0.9, 
    'card-border-color': 'rgba(255, 255, 255, 0.1)', 
    'card-text-color': '#ecf0f1', /* NUEVO: Blanco roto */
    'glass-blur': 'blur(0px)', 
    'body-background': '#2c3a4f', /* NUEVO: Fondo Gris Medio Oscuro */
    'sphere-opacity': 0 
},
    // Tema Negro/Oscuro (CORREGIDO)
    'theme-dark': { 
        '--sphere-1-color': '#000', '--sphere-2-color': '#000', '--sphere-3-color': '#000', 
        'main-color': '#00aaff', 
        'card-base-color': '0, 0, 0', /* BASE NEGRA: ¡SOLUCIÓN! */
        'card-bg-opacity': 0.9, 
        'card-border-color': 'rgba(255, 255, 255, 0.1)', 
        'card-text-color': '#ffffff', 
        'glass-blur': 'blur(0px)', 
        'body-background': '#1a1a1a', 
        'sphere-opacity': 0 
    }
};

let playlist = [];
let currentTrackIndex = -1;
let audioContext;
let analyser;

// Variables del DOM
let audioPlayer, fileInput, playPauseBtn, playIcon, prevBtn, nextBtn, progressLine, progressBarContainer, 
    currentTimeDisplay, totalTimeDisplay, songTitle, artistName, albumArtContainer, albumIcon, 
    playlistList, playerCard, root, themeOptionsContainer, sensitivitySlider, sensitivityMultiplier;

// ====================================================================
// B. FUNCIONES DE UI Y TEMAS
// ====================================================================

function updatePlaylistUI() {
    if (!playlistList) return; 
    
    playlistList.innerHTML = '';
    
    if (playlist.length === 0) {
        playlistList.innerHTML = '<li class="empty-message">Carga archivos para ver la lista.</li>';
        return;
    }

    playlist.forEach((track, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${track.name}`;
        li.dataset.index = index; 

        if (index === currentTrackIndex) {
            li.classList.add('current-track');
            setTimeout(() => li.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
        }

        playlistList.appendChild(li);
    });
}

/**
 * Aplica todas las variables CSS basadas en el tema seleccionado.
 */
function applyThemeVariables(theme) {
    if (!root) return; 

    // Colores de Esferas y Color Principal
    root.style.setProperty('--sphere-1-color', theme['--sphere-1-color']);
    root.style.setProperty('--sphere-2-color', theme['--sphere-2-color']);
    root.style.setProperty('--sphere-3-color', theme['--sphere-3-color']);
    root.style.setProperty(mainColorProperty, theme['main-color']); 

    // ¡NUEVA VARIABLE BASE DE LA TARJETA! (CORRECCIÓN)
    root.style.setProperty('--card-base-color', theme['card-base-color']); 

    // Variables de Glassmorphism/Contraste de Tarjetas
    root.style.setProperty('--card-bg-opacity', theme['card-bg-opacity']);
    root.style.setProperty('--card-border-color', theme['card-border-color']);
    root.style.setProperty('--card-text-color', theme['card-text-color']);
    root.style.setProperty('--glass-blur', theme['glass-blur']);
    
    // VARIABLES PARA EL FONDO DEL BODY Y LAS ESFERAS
    root.style.setProperty('--body-bg', theme['body-background']); 
    root.style.setProperty('--sphere-opacity', theme['sphere-opacity']); 

    updatePlaylistUI(); 
}

// C. FUNCIONES DEL REPRODUCTOR Y VISUALIZADOR (Código sin cambios en la lógica)
function loadTrack(index, autoPlay = false) {
    if (index >= 0 && index < playlist.length && audioPlayer) {
        currentTrackIndex = index;
        const track = playlist[currentTrackIndex];
        
        if (audioPlayer.src && audioPlayer.src.startsWith('blob:')) {
             URL.revokeObjectURL(audioPlayer.src);
        }
        
        const objectURL = URL.createObjectURL(track);
        audioPlayer.src = objectURL;
        
        songTitle.textContent = 'Cargando metadatos...';
        artistName.textContent = '';
        albumArtContainer.style.backgroundImage = 'none';
        albumIcon.style.display = 'block';

        if (window.jsmediatags) {
            window.jsmediatags.read(track, {
                onSuccess: function(tag) {
                    const tags = tag.tags;
                    
                    songTitle.textContent = tags.title || track.name.replace(/\.[^/.]+$/, "");
                    artistName.textContent = tags.artist || 'Artista Desconocido';

                    if (tags.picture) {
                        const picture = tags.picture;
                        let base64String = btoa(picture.data.map(c => String.fromCharCode(c)).join(''));
                        const dataUrl = `url(data:${picture.format};base64,${base64String})`;
                        
                        albumArtContainer.style.backgroundImage = dataUrl;
                        albumIcon.style.display = 'none';
                    } else {
                        albumIcon.style.display = 'block';
                    }
                },
                onError: function(error) {
                    songTitle.textContent = track.name.replace(/\.[^/.]+$/, "");
                    artistName.textContent = 'Artista Desconocido (Metadata no encontrada)';
                    albumIcon.style.display = 'block';
                }
            });
        } else {
            songTitle.textContent = track.name.replace(/\.[^/.]+$/, "");
            artistName.textContent = 'Librería ID3 no cargada';
        }

        updatePlaylistUI();

        function tryPlayOnce() {
            if (autoPlay) {
                audioPlayer.play().catch(e => {
                    playIcon.textContent = 'play_arrow';
                });
            }
            audioPlayer.removeEventListener('canplaythrough', tryPlayOnce);
        }

        audioPlayer.addEventListener('canplaythrough', tryPlayOnce);
        
        audioPlayer.load();
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function initAudioContext() {
    if (audioContext && audioContext.state === 'running') return;
    
    try {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioContext.createAnalyser();
            const source = audioContext.createMediaElementSource(audioPlayer); 
            
            source.connect(analyser);
            analyser.connect(audioContext.destination);

            analyser.fftSize = 256;
            analyser.minDecibels = -90;
            analyser.maxDecibels = -10;
        }

        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

    } catch (e) {
        console.error('Web Audio API no compatible o falló al iniciar:', e);
    }
}

const bufferLength = 128; 
const canvas = document.getElementById('visualizer-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;
const dataArray = new Uint8Array(bufferLength);
const barWidth = 4;
const barSpacing = 1;

function visualize() {
    if (!analyser || audioPlayer.paused || !ctx || !root || !playerCard) {
        return;
    }

    requestAnimationFrame(visualize);
    analyser.getByteFrequencyData(dataArray);

    const highFreqAvg = (dataArray[bufferLength - 1] + dataArray[bufferLength - 2] + dataArray[bufferLength - 3]) / 3;
    const normalizedHigh = highFreqAvg / 255; 
    const midFreqAvg = (dataArray[10] + dataArray[11] + dataArray[12] + dataArray[13] + dataArray[14] + dataArray[15]) / 6; 
    const normalizedMid = midFreqAvg / 255;
    const lowFreqAvg = (dataArray[0] + dataArray[1] + dataArray[2]) / 3; 
    const normalizedLow = lowFreqAvg / 255; 
    
    const multiplier = sensitivityMultiplier;
    
    // Movimiento y opacidad de Esferas
    const sphere1 = document.getElementById('sphere-1');
    const sphere2 = document.getElementById('sphere-2');
    const sphere3 = document.getElementById('sphere-3');

    const currentSphereOpacity = parseFloat(getComputedStyle(root).getPropertyValue('--sphere-opacity'));

    if (sphere1 && sphere2 && sphere3) {
        if (currentSphereOpacity > 0) {
            sphere1.style.transform = `scale(${1 + normalizedHigh * 0.5 * multiplier})`;
            sphere2.style.transform = `scale(${1 + normalizedMid * 0.4 * multiplier})`;
            sphere3.style.transform = `scale(${1 + normalizedLow * 0.6 * multiplier})`; 
        } else {
            sphere1.style.transform = 'scale(1)';
            sphere2.style.transform = 'scale(1)';
            sphere3.style.transform = 'scale(1)';
        }
    }
    
    playerCard.style.transform = 'none'; 

    // Visualizador en la Portada
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const mainColor = getComputedStyle(root).getPropertyValue('--main-color').trim();
    ctx.fillStyle = mainColor;

    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i] / 2; 
        const centerY = canvas.height / 2;
        ctx.fillRect(x, centerY - (barHeight / 2), barWidth, barHeight);
        x += barWidth + barSpacing;
        if (x > canvas.width) break;
    }
}

// ====================================================================
// D. INICIALIZACIÓN (Todos los eventos y asignaciones de DOM aquí)
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. ASIGNACIÓN DE ELEMENTOS DEL DOM
    audioPlayer = document.getElementById('audio-player');
    fileInput = document.getElementById('file-input');
    playPauseBtn = document.getElementById('play-pause-btn');
    playIcon = playPauseBtn.querySelector('.material-icons');
    prevBtn = document.getElementById('prev-btn');
    nextBtn = document.getElementById('next-btn');
    progressLine = document.getElementById('progress-line');
    progressBarContainer = document.getElementById('progress-bar');
    currentTimeDisplay = document.getElementById('current-time');
    totalTimeDisplay = document.getElementById('total-time');
    songTitle = document.querySelector('.song-title');
    artistName = document.querySelector('.artist-name');
    albumArtContainer = document.getElementById('album-art-container');
    albumIcon = document.getElementById('album-icon');
    playlistList = document.getElementById('playlist-list');
    playerCard = document.querySelector('.player-card'); 
    root = document.documentElement;
    themeOptionsContainer = document.getElementById('theme-options');
    sensitivitySlider = document.getElementById('sensitivity-slider');
    
    // Elementos para Drag and Drop
    const cards = document.querySelectorAll('.player-card, .playlist-panel, .color-selector');
    const mainContainer = document.querySelector('.main-container');

    // Inicialización de valores CSS/JS
    sensitivityMultiplier = parseFloat(getComputedStyle(root).getPropertyValue('--sensitivity-multiplier'));
    sensitivitySlider.value = 50;


    // 2. APLICAR COLORES INICIALES (Tema Azul por defecto)
    const defaultTheme = themes['theme-blue'];
    applyThemeVariables(defaultTheme); 
    
    
    // 3. LISTENERS
    
    // Listener ÚNICO para los botones predefinidos (los circulitos)
    themeOptionsContainer.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('color-swatch')) {
            const themeName = target.dataset.theme;
            const selectedTheme = themes[themeName];
            
            if (selectedTheme) {
                applyThemeVariables(selectedTheme); 
                document.querySelectorAll('.color-swatch').forEach(btn => {
                    btn.classList.remove('active');
                });
                target.classList.add('active');
            }
        }
    });

    sensitivitySlider.addEventListener('input', (event) => {
        sensitivityMultiplier = event.target.value / 100; 
        root.style.setProperty('--sensitivity-multiplier', sensitivityMultiplier);
    });
    
    // Listeners de Audio
    fileInput.addEventListener('change', (event) => {
        playlist = Array.from(event.target.files); 
        if (playlist.length > 0) {
            initAudioContext();
            loadTrack(0, true); 
        }
    });
    playlistList.addEventListener('click', (event) => {
        const li = event.target.closest('li');
        if (li && li.dataset.index && !li.classList.contains('empty-message')) { 
            const index = parseInt(li.dataset.index);
            if (index !== currentTrackIndex) {
                loadTrack(index, true);
            } else {
                audioPlayer.play().catch(() => {}); 
            }
        }
    });
    playPauseBtn.addEventListener('click', () => {
        if (playlist.length === 0) {
            alert("Por favor, selecciona archivos de música (MP3/WAV) primero.");
            return;
        }
        if (audioPlayer.paused) {
            initAudioContext();
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });
    nextBtn.addEventListener('click', () => {
        if (playlist.length > 0) {
            let nextIndex = (currentTrackIndex + 1) % playlist.length;
            loadTrack(nextIndex, true); 
        }
    });
    prevBtn.addEventListener('click', () => {
        if (playlist.length > 0) {
            let prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
            loadTrack(prevIndex, true); 
        }
    });
    audioPlayer.addEventListener('ended', () => {
        if (playlist.length > 0) {
            let nextIndex = (currentTrackIndex + 1) % playlist.length;
            loadTrack(nextIndex, true);
        }
    });
    audioPlayer.addEventListener('play', () => {
        playIcon.textContent = 'pause';
        if (analyser) requestAnimationFrame(visualize);
        updatePlaylistUI();
    });
    audioPlayer.addEventListener('pause', () => {
        playIcon.textContent = 'play_arrow';
    });
    audioPlayer.addEventListener('timeupdate', () => {
        const duration = audioPlayer.duration;
        const currentTime = audioPlayer.currentTime;
        
        if (!isNaN(duration)) {
            const progressPercent = (currentTime / duration) * 100;
            progressLine.style.width = `${progressPercent}%`;

            currentTimeDisplay.textContent = formatTime(currentTime);
            totalTimeDisplay.textContent = formatTime(duration);
        }
    });
    progressBarContainer.addEventListener('click', (e) => {
        const width = progressBarContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;

        if (!isNaN(duration)) {
            const timeToSet = (clickX / width) * duration;
            audioPlayer.currentTime = timeToSet;
        }
    });
    audioPlayer.addEventListener('loadedmetadata', () => {
        if (!isNaN(audioPlayer.duration)) {
            totalTimeDisplay.textContent = formatTime(audioPlayer.duration);
        }
    });


    // 4. LÓGICA DE DRAG AND DROP
    
    let draggingCard = null;

    cards.forEach(card => {
        card.addEventListener('dragstart', (e) => {
            draggingCard = card;
            setTimeout(() => card.classList.add('dragging'), 0);
            e.dataTransfer.effectAllowed = 'move';
        });

        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
            draggingCard = null;
        });
        
        card.addEventListener('dragenter', (e) => {
            e.preventDefault();
            if (card !== draggingCard) {
                const reference = getDragAfterElement(mainContainer, e.clientX);
                
                if (reference == null) {
                    mainContainer.appendChild(draggingCard);
                } else {
                    mainContainer.insertBefore(draggingCard, reference);
                }
            }
        });
        
        card.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });
        
        card.addEventListener('dragleave', () => {
        });
    });

    function getDragAfterElement(container, x) {
        const draggableCards = [...container.querySelectorAll('.player-card:not(.dragging), .playlist-panel:not(.dragging), .color-selector:not(.dragging)')];

        return draggableCards.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = x - box.left - box.width / 2; 

            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
});