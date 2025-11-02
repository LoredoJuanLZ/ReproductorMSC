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
        'card-base-color': '255, 255, 255', 
        'card-bg-opacity': 0.1, 'card-border-color': 'rgba(255, 255, 255, 0.18)', 'card-text-color': '#ffffff', 'glass-blur-default': 15, 'opacity-default': 10,
        'body-background': 'linear-gradient(135deg, #1e3a8a, #0c0a09)', 'sphere-opacity': 0.8 
    },
    'theme-red': { 
        '--sphere-1-color': '#ff0080', '--sphere-2-color': '#ff3e3e', '--sphere-3-color': '#ff9d3e', 
        'main-color': '#ff3e3e', 
        'card-base-color': '255, 255, 255',
        'card-bg-opacity': 0.1, 'card-border-color': 'rgba(255, 255, 255, 0.18)', 'card-text-color': '#ffffff', 'glass-blur-default': 15, 'opacity-default': 10,
        'body-background': 'linear-gradient(135deg, #1e3a8a, #0c0a09)', 'sphere-opacity': 0.8 
    },
    'theme-purple': { 
        '--sphere-1-color': '#3eff75', '--sphere-2-color': '#ff3ef2', '--sphere-3-color': '#3e9dff', 
        'main-color': '#ff3ef2', 
        'card-base-color': '255, 255, 255',
        'card-bg-opacity': 0.1, 'card-border-color': 'rgba(255, 255, 255, 0.18)', 'card-text-color': '#ffffff', 'glass-blur-default': 15, 'opacity-default': 10,
        'body-background': 'linear-gradient(135deg, #1e3a8a, #0c0a09)', 'sphere-opacity': 0.8 
    },
    'theme-green': { 
        '--sphere-1-color': '#ff3eff', '--sphere-2-color': '#3eff75', '--sphere-3-color': '#3effd9', 
        'main-color': '#3eff75', 
        'card-base-color': '255, 255, 255',
        'card-bg-opacity': 0.1, 'card-border-color': 'rgba(255, 255, 255, 0.18)', 'card-text-color': '#ffffff', 'glass-blur-default': 15, 'opacity-default': 10,
        'body-background': 'linear-gradient(135deg, #1e3a8a, #0c0a09)', 'sphere-opacity': 0.8 
    },
    'theme-orange': { 
        '--sphere-1-color': '#00d0ff', '--sphere-2-color': '#ff8c3e', '--sphere-3-color': '#ffff00', 
        'main-color': '#ff8c3e', 
        'card-base-color': '255, 255, 255',
        'card-bg-opacity': 0.1, 'card-border-color': 'rgba(255, 255, 255, 0.18)', 'card-text-color': '#ffffff', 'glass-blur-default': 15, 'opacity-default': 10,
        'body-background': 'linear-gradient(135deg, #1e3a8a, #0c0a09)', 'sphere-opacity': 0.8 
    },
    'theme-cyan': { 
        '--sphere-1-color': '#ff0000', '--sphere-2-color': '#3efff2', '--sphere-3-color': '#00ff3e', 
        'main-color': '#3efff2', 
        'card-base-color': '255, 255, 255',
        'card-bg-opacity': 0.1, 'card-border-color': 'rgba(255, 255, 255, 0.18)', 'card-text-color': '#ffffff', 'glass-blur-default': 15, 'opacity-default': 10,
        'body-background': 'linear-gradient(135deg, #1e3a8a, #0c0a09)', 'sphere-opacity': 0.8 
    },
    'theme-gold': { 
        '--sphere-1-color': '#3e9dff', '--sphere-2-color': '#ffd700', '--sphere-3-color': '#ff00d0', 
        'main-color': '#ffd700', 
        'card-base-color': '255, 255, 255',
        'card-bg-opacity': 0.1, 'card-border-color': 'rgba(255, 255, 255, 0.18)', 'card-text-color': '#ffffff', 'glass-blur-default': 15, 'opacity-default': 10,
        'body-background': 'linear-gradient(135deg, #1e3a8a, #0c0a09)', 'sphere-opacity': 0.8 
    },
    'theme-magenta': { 
        '--sphere-1-color': '#ff9d3e', '--sphere-2-color': '#c03eff', '--sphere-3-color': '#3eff75', 
        'main-color': '#c03eff', 
        'card-base-color': '255, 255, 255',
        'card-bg-opacity': 0.1, 'card-border-color': 'rgba(255, 255, 255, 0.18)', 'card-text-color': '#ffffff', 'glass-blur-default': 15, 'opacity-default': 10,
        'body-background': 'linear-gradient(135deg, #1e3a8a, #0c0a09)', 'sphere-opacity': 0.8 
    },

    // TEMAS DE ALTO CONTRASTE Y MINIMALISTAS (¡SIN BLUR!)
    // Tema Blanco/Claro
    'theme-light': { 
        '--sphere-1-color': '#000', '--sphere-2-color': '#000', '--sphere-3-color': '#000', 
        'main-color': '#ff6f61', // Color de énfasis por defecto
        'card-base-color': '37, 47, 63', // Base de tarjeta Gris Oscuro
        'card-bg-opacity': 0.9, 
        'card-border-color': 'rgba(255, 255, 255, 0.1)', 
        'card-text-color': '#ecf0f1', 
        'glass-blur-default': 0, 'opacity-default': 90, // Valores fijos (0 blur, 0.9 opacidad)
        'body-background': '#2c3a4f', 
        'sphere-opacity': 0 
    },
    // Tema Negro/Oscuro
    'theme-dark': { 
        '--sphere-1-color': '#000', '--sphere-2-color': '#000', '--sphere-3-color': '#000', 
        'main-color': '#00aaff', 
        'card-base-color': '0, 0, 0', 
        'card-bg-opacity': 0.9, 
        'card-border-color': 'rgba(255, 255, 255, 0.1)', 
        'card-text-color': '#ffffff', 
        'glass-blur-default': 0, 'opacity-default': 90, // Valores fijos (0 blur, 0.9 opacidad)
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

// Nuevas variables DOM para la sección de énfasis y glassmorphism
let accentOptionsPanel, accentOptionsContainer;
let glassCustomizationPanel, blurSlider, opacitySlider, blurValueDisplay, opacityValueDisplay;

// VARS DE ESTILO DE PROGRESO
let progressStylePanel, progressStyleOptions; 
let progressStyle; 

// NUEVAS VARS para el visualizador de frecuencia
const NUM_BARS = 128; // <--- Se mantiene a 128
let dynamicBars = []; // Array para almacenar los elementos DOM de las barras
let visualizerBarContainer; // Contenedor nuevo que siempre será 100% de ancho

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
 * Aplica solo el color de énfasis (para temas Minimalistas) y lo guarda.
 */
function applyAccentColor(color, save = true) {
    if (!root) return;
    
    root.style.setProperty(mainColorProperty, color); 
    
    document.querySelectorAll('.accent-swatch').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.accentColor === color) {
            btn.classList.add('active');
        }
    });

    if (save) {
        localStorage.setItem('userAccentColor', color);
    }
}

/**
 * Aplica los valores de Blur y Opacidad y los guarda.
 */
function applyBlurOpacity(blurValue, opacityValue, save = true) {
    if (!root) return;
    
    const opacityDecimal = parseFloat(opacityValue) / 100;

    root.style.setProperty('--glass-blur', `blur(${blurValue}px)`);
    root.style.setProperty('--card-bg-opacity', opacityDecimal); 

    if (blurValueDisplay && opacityValueDisplay) {
        blurValueDisplay.textContent = `${blurValue}px`;
        opacityValueDisplay.textContent = `${opacityValue}%`;
    }

    if (save) {
        localStorage.setItem('userBlur', blurValue.toString());
        localStorage.setItem('userOpacity', opacityValue.toString());
    }
}


/**
 * Aplica todas las variables CSS basadas en el tema seleccionado y gestiona los paneles.
 */
function applyThemeVariables(theme, themeName) {
    if (!root) return; 
    
    // 1. Aplicar variables de tema base
    root.style.setProperty('--sphere-1-color', theme['--sphere-1-color']);
    root.style.setProperty('--sphere-2-color', theme['--sphere-2-color']);
    root.style.setProperty('--sphere-3-color', theme['--sphere-3-color']);
    root.style.setProperty('--card-base-color', theme['card-base-color']); 
    root.style.setProperty('--card-border-color', theme['card-border-color']);
    root.style.setProperty('--card-text-color', theme['card-text-color']);
    root.style.setProperty('--body-bg', theme['body-background']); 
    root.style.setProperty('--sphere-opacity', theme['sphere-opacity']); 

    if (themeName) {
        localStorage.setItem('userTheme', themeName);
    }
    
    // 2. Controlar la visibilidad de los paneles de personalización
    const isGlassmorphism = !(themeName === 'theme-light' || themeName === 'theme-dark');

    if (isGlassmorphism) {
        // MODO GLASSmORPHISM: Mostrar Blur/Opacidad
        accentOptionsPanel.classList.add('hidden');
        glassCustomizationPanel.classList.remove('hidden');

        // Obtener valores guardados o usar los por defecto del tema
        const savedBlur = localStorage.getItem('userBlur') || theme['glass-blur-default'];
        const savedOpacity = localStorage.getItem('userOpacity') || theme['opacity-default'];
        
        // Sincronizar sliders y aplicar
        blurSlider.value = savedBlur;
        opacitySlider.value = savedOpacity;
        applyBlurOpacity(savedBlur, savedOpacity, false); 
        
        // Aplicar el main-color por defecto del tema (los temas Glassmorphism lo definen)
        root.style.setProperty(mainColorProperty, theme['main-color']);

    } else {
        // MODO MINIMALISTA: Mostrar Color de Énfasis
        glassCustomizationPanel.classList.add('hidden');
        accentOptionsPanel.classList.remove('hidden');

        // Forzar Blur/Opacidad a los valores fijos minimalistas
        applyBlurOpacity(theme['glass-blur-default'], theme['opacity-default'], false); 

        // Aplicar color de énfasis guardado o el valor por defecto del tema
        const savedAccent = localStorage.getItem('userAccentColor');
        const colorToApply = savedAccent || theme['main-color']; 
        
        applyAccentColor(colorToApply, false); // Aplicar, no guardar
    }

    updatePlaylistUI(); 
}

/**
 * Aplica el estilo de la barra de progreso y lo guarda.
 * Usa opacity/visibility para una transición suave entre 'bars' y otros estilos.
 */
function applyProgressStyle(styleName, save = true) {
    if (!progressLine || !visualizerBarContainer) return;

    progressStyle = styleName;
    
    // Aplicar el data-attribute para que CSS lo maneje
    progressLine.setAttribute('data-style', styleName); 
    
    // CLAVE: Controlar la visibilidad con Opacity y Visibility para la transición
    if (styleName === 'bars') {
        // MODO BARS: Mostrar el visualizador full-width (suavemente)
        visualizerBarContainer.style.opacity = '1';
        visualizerBarContainer.style.visibility = 'visible';
        
        // Ocultar la línea de progreso para evitar conflictos estéticos
        progressLine.style.opacity = '0'; 
        
    } else {
        // MODO LINE/SPARK: Ocultar el visualizador (suavemente)
        visualizerBarContainer.style.opacity = '0';
        visualizerBarContainer.style.visibility = 'hidden';

        // Mostrar la línea de progreso de tiempo
        progressLine.style.opacity = '1'; 
        progressLine.style.height = '100%'; 
        
        // Reiniciar estilos estructurales si se sale del modo 'bars'
        if (progressLine.style.transform === 'none') {
            progressLine.style.transform = `scaleY(1)`; 
            progressLine.style.boxShadow = 'none'; 
        }
    }
    
    // Actualizar los swatches
    document.querySelectorAll('#progress-style-options .style-swatch').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.style === styleName) {
            btn.classList.add('active');
        }
    });

    if (save) {
        localStorage.setItem('userProgressStyle', styleName);
    }
}


// C. FUNCIONES DEL REPRODUCTOR Y VISUALIZADOR
function loadTrack(index, autoPlay = false) {
    if (index >= 0 && index < playlist.length && audioPlayer) {
        currentTrackIndex = index;
        const track = playlist[currentTrackIndex];
        
        // Variable para la URL de la portada que usaremos en Media Session
        let albumArtUrl = 'https://via.placeholder.com/512x512.png?text=M+Icon'; // Inicializado con un fallback de 512x512

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
                    const title = tags.title || track.name.replace(/\.[^/.]+$/, "");
                    const artist = tags.artist || 'Artista Desconocido';
                    
                    songTitle.textContent = title;
                    artistName.textContent = artist;

                    if (tags.picture) {
                        const picture = tags.picture;
                        // Genera la URL de datos (data URL)
                        let base64String = btoa(picture.data.map(c => String.fromCharCode(c)).join(''));
                        const format = picture.format || 'image/png'; // Usar 'image/png' como fallback
                        const dataUrl = `url(data:${format};base64,${base64String})`;
                        
                        albumArtContainer.style.backgroundImage = dataUrl;
                        albumIcon.style.display = 'none';
                        
                        // CLAVE: Asignar la URL de datos a albumArtUrl para la Media Session
                        albumArtUrl = `data:${format};base64,${base64String}`;
                    } else {
                        albumIcon.style.display = 'block';
                        // Si no hay portada, mantiene el valor del fallback (placeholder)
                    }
                    
                    // **** LLAMADA CLAVE: ACTUALIZAR MEDIA SESSION CON LOS METADATOS ****
                    updateMediaSession(title, artist, albumArtUrl);
                    // *****************************************************************
                },
                onError: function(error) {
                    const title = track.name.replace(/\.[^/.]+$/, "");
                    const artist = 'Artista Desconocido (Metadata no encontrada)';
                    
                    songTitle.textContent = title;
                    artistName.textContent = artist;
                    albumIcon.style.display = 'block';

                    // Actualizar Media Session incluso sin portada
                    updateMediaSession(title, artist, albumArtUrl); // Usa el placeholder
                }
            });
        } else {
            const title = track.name.replace(/\.[^/.]+$/, "");
            songTitle.textContent = title;
            artistName.textContent = 'Librería ID3 no cargada';

            // Actualizar Media Session
            updateMediaSession(title, 'Librería ID3 no cargada', albumArtUrl); // Usa el placeholder
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
            // Configuración de Decibeles optimizada para una mejor reacción visual
            analyser.minDecibels = -90;
            analyser.maxDecibels = -20;
        }
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
    } catch (e) {
        console.error('Web Audio API no compatible o falló al iniciar:', e);
    }
}

const bufferLength = 128; // Es la mitad de fftSize (256)
const canvas = document.getElementById('visualizer-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;
const dataArray = new Uint8Array(bufferLength); 
const barWidth = 4;
const barSpacing = 1;

/**
 * Función de visualización actualizada.
 */
function visualize() {
    if (!analyser || audioPlayer.paused) {
        requestAnimationFrame(visualize);
        return;
    }

    analyser.getByteFrequencyData(dataArray); 
    const mainColor = getComputedStyle(root).getPropertyValue(mainColorProperty);
    const multiplier = parseFloat(getComputedStyle(root).getPropertyValue('--sensitivity-multiplier'));
    
    let shadowSize;
    let scaleY;

switch (progressStyle) {
    case 'bars':
        // Asegurar que las barras dinámicas existan antes de intentar actualizarlas
        if (dynamicBars.length === 0) {
            createDynamicBars(); 
        }

        // Si el visualizador está oculto (por applyProgressStyle), no aplicar efectos
        if (visualizerBarContainer && visualizerBarContainer.style.opacity === '0') break; 

        // --- Lógica del Espectro: Mapeo 1:1 (128 valores a 128 barras) ---

        dynamicBars.forEach((bar, i) => {
            
            // CORREGIDO: Mapeo directo del valor de la frecuencia al índice de la barra
            const freqValue = dataArray[i]; 
            
            // Ajuste de sensibilidad por rango de frecuencia (Graves, Medios, Agudos)
            let sensitivity;
            if (i < NUM_BARS * 0.15) { // Graves (0-15%) 
                sensitivity = 1.5;
            } else if (i < NUM_BARS * 0.45) { // Medios (15-45%)
                sensitivity = 1.2;
            } else { // Agudos (45-100%)
                sensitivity = 0.9;
            } 
            
            // Normalización y Escalamiento
            const normalizedVolume = Math.pow(Math.min(freqValue / 255, 1), 0.7) * sensitivity;
            const scaleY = 0.5 + normalizedVolume * 12 * multiplier;
            
            // Efecto Glow
            const shadowSize = normalizedVolume * 30 * multiplier;
            const mainColor = root.style.getPropertyValue(mainColorProperty);
            const shadowColor = `0 0 ${shadowSize}px ${mainColor}, 0 0 ${shadowSize/2}px ${mainColor}, 0 -3px ${shadowSize/3}px ${mainColor}`;

            // APLICAR TRANSFORM Y GLOW A LA BARRA INDIVIDUAL
            bar.style.transform = `scaleY(${scaleY})`;
            bar.style.boxShadow = shadowColor;
            bar.style.transition = 'transform 0.04s ease-out, box-shadow 0.04s ease-out';
        });

        // Aseguramos que la línea de progreso (que ahora está invisible por CSS) no pulse
        progressLine.style.transform = 'none';
        progressLine.style.boxShadow = 'none';
        
        break;
        case 'spark':
            
            // Se mantiene la lógica original para Spark
            const avgVolumeSpark = dataArray.slice(0, bufferLength * 0.8).reduce((a, b) => a + b, 0) / (bufferLength * 0.8);
            const effectIntensitySpark = Math.min(avgVolumeSpark / 150, 1) * multiplier;
            shadowSize = 2 + (effectIntensitySpark * 10);
            scaleY = 1 + effectIntensitySpark * 0.5;
            progressLine.style.transformOrigin = 'center';
            progressLine.style.boxShadow = `0 0 ${shadowSize}px ${mainColor}`;
            progressLine.style.transform = `scaleY(${scaleY})`;
            break;
        case 'line':
        default:
            // Se mantiene la lógica original para Line
            const avgVolumeLine = dataArray.slice(0, bufferLength * 0.8).reduce((a, b) => a + b, 0) / (bufferLength * 0.8);
            const effectIntensityLine = Math.min(avgVolumeLine / 150, 1) * multiplier;
            shadowSize = 5 + (effectIntensityLine * 15);
            scaleY = 1 + effectIntensityLine * 0.2; // Pulso más sutil que spark
            progressLine.style.transformOrigin = 'center';
            progressLine.style.boxShadow = `0 0 ${shadowSize}px ${mainColor}`;
            progressLine.style.transform = `scaleY(${scaleY})`;
            break;
    }

    // LÓGICA DE PULSO DE ESFERAS (SE MANTIENE IGUAL)
    const normalizedHigh = dataArray.slice(30, 60).reduce((a, b) => a + b, 0) / (30 * 255);
    const normalizedMid = dataArray.slice(5, 30).reduce((a, b) => a + b, 0) / (25 * 255);
    const normalizedLow = dataArray.slice(0, 5).reduce((a, b) => a + b, 0) / (5 * 255); 
    
    // Movimiento y opacidad de Esferas
    const sphere1 = document.getElementById('sphere-1');
    const sphere2 = document.getElementById('sphere-2');
    const sphere3 = document.getElementById('sphere-3');
    const currentSphereOpacity = parseFloat(getComputedStyle(root).getPropertyValue('--sphere-opacity'));

    if (sphere1 && sphere2 && sphere3) {
        if (currentSphereOpacity > 0) {
            // Se usa el volumen de las bandas específicas para controlar la escala
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

    // Visualizador en la Portada (Canvas) - Se mantiene igual
    if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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

    requestAnimationFrame(visualize);
}

/**
 * Crea dinámicamente los elementos .dyn-bar dentro del nuevo contenedor full-width.
 */
function createDynamicBars() {
    if (!progressBarContainer) return;

    // 1. Crear o encontrar el contenedor visualizador
    visualizerBarContainer = document.getElementById('visualizer-bar-container');
    if (!visualizerBarContainer) {
        visualizerBarContainer = document.createElement('div');
        visualizerBarContainer.id = 'visualizer-bar-container';
        // Estilos para que cubra el 100% del contenedor padre (#progress-bar)
        visualizerBarContainer.style.cssText = `
            position: absolute; 
            top: 0; 
            left: 0; 
            width: 100%; 
            height: 100%; 
            display: flex; 
            justify-content: space-between;
            align-items: flex-end;
            padding: 0;
            z-index: 2; 
            opacity: 0; 
            visibility: hidden; 
            transition: opacity 0.3s ease-in-out, visibility 0.3s linear; 
        `;
        // Lo insertamos como el primer hijo de #progress-bar
        progressBarContainer.prepend(visualizerBarContainer); 
    }
    
    // 2. Limpiar barras existentes y el array
    visualizerBarContainer.innerHTML = '';
    dynamicBars = [];

    // Cálculo para el ancho de cada barra:
    // (100% / 128) * 0.9 = ~0.70% de ancho, lo que deja un pequeño espacio.
    const BAR_WIDTH_PERCENT = (100 / NUM_BARS) * 0.9; 
    
    for (let i = 0; i < NUM_BARS; i++) {
        const bar = document.createElement('div');
        bar.classList.add('dyn-bar');
        bar.style.width = `${BAR_WIDTH_PERCENT}%`; 
        bar.style.minWidth = '0.1px'; // Mínimo absoluto para que el porcentaje domine
        bar.style.height = '100%';
        bar.style.backgroundColor = 'var(--main-color)';
        bar.style.transformOrigin = 'bottom';
        bar.style.transition = 'transform 0.04s ease-out, box-shadow 0.04s ease-out';
        visualizerBarContainer.appendChild(bar);
        dynamicBars.push(bar);
    }
    
    // Aseguramos que progressLine no tenga barras residuales
    if(progressLine) progressLine.innerHTML = '';
}

// ====================================================================
// E. MEDIA SESSION API (Notificaciones de Sistema y Widgets)
// ====================================================================

/**
 * 1. Configura los metadatos de la canción para la notificación/widget del sistema.
 */
function updateMediaSession(title, artist, albumArtUrl) {
    if ('mediaSession' in navigator) {
        // Obtenemos el tipo de imagen del inicio de la data URL (ej: image/jpeg)
        const formatMatch = albumArtUrl.match(/^data:(image\/\w+);base64/);
        const imageType = formatMatch ? formatMatch[1] : 'image/png';

        // Establece los metadatos
        navigator.mediaSession.metadata = new MediaMetadata({
            title: title || 'Título Desconocido',
            artist: artist || 'Artista Desconocido',
            album: 'Tu Reproductor Web', 
            artwork: [
                // CLAVE: Un tamaño grande y un tipo válido son cruciales para el fondo de la notificación
                { 
                    src: albumArtUrl, 
                    sizes: '512x512', // Tamaño recomendado para alta resolución
                    type: imageType 
                }
            ]
        });
        
        console.log(`Media Session Metadata Updated: ${title} by ${artist} with image type ${imageType}`);
    }
}

/**
 * 2. Configura los manejadores para los botones de control del sistema (Play/Pause/Next/Prev).
 */
function setupMediaSessionHandlers() {
    if ('mediaSession' in navigator) {
        const audioPlayer = document.getElementById('audio-player');

        // Manejar el botón de Reproducir
        navigator.mediaSession.setActionHandler('play', () => {
            if (audioPlayer.paused) {
                // Llama al play() del reproductor para reanudar
                audioPlayer.play().catch(e => console.error("Error al reanudar la reproducción:", e)); 
            }
        });

        // Manejar el botón de Pausa
        navigator.mediaSession.setActionHandler('pause', () => {
            if (!audioPlayer.paused) {
                // Llama al pause() del reproductor
                audioPlayer.pause();
            }
        });

        // Manejar el botón de Pista Siguiente
        navigator.mediaSession.setActionHandler('nexttrack', () => {
            console.log('Media Session: Ejecutando nexttrack');
            // Reutiliza la lógica de tu botón nextBtn
            if (playlist.length > 0) {
                let nextIndex = (currentTrackIndex + 1) % playlist.length;
                loadTrack(nextIndex, true);
            }
        });

        // Manejar el botón de Pista Anterior
        navigator.mediaSession.setActionHandler('previoustrack', () => {
            console.log('Media Session: Ejecutando previoustrack');
            // Reutiliza la lógica de tu botón prevBtn
            if (playlist.length > 0) {
                let prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
                loadTrack(prevIndex, true);
            }
        });
        
        // Opcional: El manejador 'stop' para cerrar la notificación de medios
        navigator.mediaSession.setActionHandler('stop', () => {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        });
    }
}


// ====================================================================
// D. INICIALIZACIÓN (Todos los eventos y asignaciones de DOM aquí)
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. ASIGNACIONES INICIALES DE ELEMENTOS DEL DOM
    audioPlayer = document.getElementById('audio-player');
    fileInput = document.getElementById('file-input');
    playPauseBtn = document.getElementById('play-pause-btn');
    playIcon = playPauseBtn ? playPauseBtn.querySelector('.material-icons') : null;
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

    // Asignaciones de paneles de personalización
    accentOptionsPanel = document.getElementById('accent-options-panel');
    accentOptionsContainer = document.getElementById('accent-options');
    glassCustomizationPanel = document.getElementById('glass-customization-panel');
    blurSlider = document.getElementById('blur-slider');
    opacitySlider = document.getElementById('opacity-slider');
    blurValueDisplay = document.getElementById('blur-value');
    opacityValueDisplay = document.getElementById('opacity-value');
    
    // NUEVAS ASIGNACIONES
    progressStylePanel = document.getElementById('progress-style-panel');
    progressStyleOptions = document.getElementById('progress-style-options');

    // Elementos para Drag and Drop
    const cards = document.querySelectorAll('.player-card, .playlist-panel, .color-selector');
    const mainContainer = document.querySelector('.main-container');

    // Valor por defecto
    sensitivityMultiplier = parseFloat(getComputedStyle(root).getPropertyValue('--sensitivity-multiplier'));

    // CLAVE: Crear el visualizador de barras dinámicas (lo inyecta en el DOM)
    createDynamicBars(); 
    
    // ** CLAVE: CONFIGURAR LOS MANEJADORES DE MEDIA SESSION **
    setupMediaSessionHandlers();

    // 2. CARGAR Y APLICAR ESTADOS GUARDADOS
    // 2.1 Cargar Tema
    const savedThemeName = localStorage.getItem('userTheme');
    let initialThemeName = savedThemeName && themes[savedThemeName] ? savedThemeName : 'theme-blue';
    let initialTheme = themes[initialThemeName];
    applyThemeVariables(initialTheme, initialThemeName);
    
    // Marcar el swatch de color base activo
    document.querySelectorAll('.color-swatch').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.theme === initialThemeName) {
            btn.classList.add('active');
        }
    });

    // 2.2 Cargar Color de Énfasis (si estamos en Minimalista)
    const savedAccent = localStorage.getItem('userAccentColor');
    if (savedAccent) {
        applyAccentColor(savedAccent, false);
    }
    
    // 2.3 Cargar Sensibilidad
    const savedSensitivity = localStorage.getItem('userSensitivity');
    if (savedSensitivity !== null) {
        sensitivityMultiplier = parseFloat(savedSensitivity);
        // Actualizar el slider y la variable CSS
        sensitivitySlider.value = sensitivityMultiplier * 100;
        root.style.setProperty('--sensitivity-multiplier', sensitivityMultiplier);
    } else {
        // Si no hay valor guardado, usar el valor por defecto (0.5 = 50%)
        sensitivitySlider.value = sensitivityMultiplier * 100;
        root.style.setProperty('--sensitivity-multiplier', sensitivityMultiplier);
    }
    
    // 2.4 Cargar Estilo de Progreso
    const savedProgressStyle = localStorage.getItem('userProgressStyle');
    progressStyle = savedProgressStyle && ['line', 'spark', 'bars'].includes(savedProgressStyle) ? savedProgressStyle : 'line'; // Array actualizado
    applyProgressStyle(progressStyle, false); // Aplica el estilo y la visibilidad inicial

    // 3. LISTENERS
    // Listener para los botones de TEMA BASE
    themeOptionsContainer.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('color-swatch')) {
            const themeName = target.dataset.theme;
            const selectedTheme = themes[themeName];
            if (selectedTheme) {
                applyThemeVariables(selectedTheme, themeName);
                document.querySelectorAll('.color-swatch').forEach(btn => {
                    btn.classList.remove('active');
                });
                target.classList.add('active');
            }
        }
    });

    // Listener para los swatches de COLOR DE ÉNFASIS (Minimalista)
    accentOptionsContainer.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('accent-swatch')) {
            const color = target.dataset.accentColor;
            applyAccentColor(color);
        }
    });

    // Listener para los sliders de BLUR y OPACIDAD
    blurSlider.addEventListener('input', (event) => {
        const blur = event.target.value;
        const opacity = opacitySlider.value;
        applyBlurOpacity(blur, opacity);
    });

    opacitySlider.addEventListener('input', (event) => {
        const blur = blurSlider.value;
        const opacity = event.target.value;
        applyBlurOpacity(blur, opacity);
    });
    
    // Listener para los swatches de ESTILO DE PROGRESO
    progressStyleOptions.addEventListener('click', (event) => {
        const target = event.target.closest('.style-swatch');
        if (target) {
            const styleName = target.dataset.style;
            applyProgressStyle(styleName);
        }
    });

    // Listener para el slider de SENSIBILIDAD
    sensitivitySlider.addEventListener('input', (event) => {
        sensitivityMultiplier = event.target.value / 100;
        root.style.setProperty('--sensitivity-multiplier', sensitivityMultiplier);
        localStorage.setItem('userSensitivity', sensitivityMultiplier.toString());
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

audioPlayer.addEventListener('timeupdate', () => {
    // ESTA LÓGICA DEBE EJECUTARSE SIEMPRE para que la barra de tiempo avance
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressLine.style.width = `${progress}%`;
    
    // Actualiza la hora
    currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
});

    audioPlayer.addEventListener('loadedmetadata', () => {
        totalTimeDisplay.textContent = formatTime(audioPlayer.duration);
    });

    audioPlayer.addEventListener('play', () => {
        playIcon.textContent = 'pause';
        requestAnimationFrame(visualize);
    });

    audioPlayer.addEventListener('pause', () => {
        playIcon.textContent = 'play_arrow';
    });
    
    audioPlayer.addEventListener('ended', () => {
        // Pasa automáticamente a la siguiente canción
        if (playlist.length > 0) {
            let nextIndex = (currentTrackIndex + 1) % playlist.length;
            loadTrack(nextIndex, true);
        } else {
            audioPlayer.currentTime = 0;
            progressLine.style.width = '0%';
            playIcon.textContent = 'play_arrow';
        }
    });
    
    // Listener para buscar en la barra de progreso
    progressBarContainer.addEventListener('click', (e) => {
        if (audioPlayer.duration > 0) {
            const clickX = e.clientX - progressBarContainer.getBoundingClientRect().left;
            const width = progressBarContainer.clientWidth;
            const seekTime = (clickX / width) * audioPlayer.duration;
            audioPlayer.currentTime = seekTime;
        }
    });

    // Iniciar el loop de visualización inmediatamente (se detiene si no hay audio o está pausado)
    requestAnimationFrame(visualize);
    
    // DRAG AND DROP (Se mantiene la lógica original)
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
