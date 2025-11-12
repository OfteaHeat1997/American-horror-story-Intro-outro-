/* ========================================
   AMERICAN HORROR STORY: HOTEL INTRO
   Student Learning Project - Vanilla JavaScript
   ========================================

   This file controls all the interactivity:
   1. Background poster slideshow
   2. START button functionality
   3. Scene-by-scene intro animation
   4. Audio playback

========================================= */

// ========================================
// STEP 1: SELECT DOM ELEMENTS
// ========================================
// Using querySelector to get elements from HTML

const loadingScreen = document.querySelector('#loading-screen');
const startBtn = document.querySelector('.start-btn');
const mainIntro = document.querySelector('#main-intro');
const backgroundPosters = document.querySelectorAll('.before-img');  // All poster images
const scenes = document.querySelectorAll('.scene');  // All intro scenes
const transitionOverlay = document.querySelector('.transition-overlay');  // Transition effect

// Create audio object (Web Audio API)
// Make sure the path matches your audio file location!
const backgroundMusic = new Audio('audio/audio-intro-ahs.mp3');

// ========================================
// STEP 2: BACKGROUND POSTER SLIDESHOW
// ========================================
// This rotates through the 3 background poster images
// while the loading screen is visible

let currentPosterIndex = 0;  // Start with first image (index 0)

function rotateBackgroundPosters() {
    // Remove 'active' class from current image (makes it fade out)
    backgroundPosters[currentPosterIndex].classList.remove('active');

    // Move to next poster (use modulo to loop back to 0)
    currentPosterIndex = (currentPosterIndex + 1) % backgroundPosters.length;
    // Example: if length = 3
    // 0 + 1 = 1 % 3 = 1
    // 1 + 1 = 2 % 3 = 2
    // 2 + 1 = 3 % 3 = 0 (loops back!)

    // Add 'active' class to next image (makes it fade in)
    backgroundPosters[currentPosterIndex].classList.add('active');
}

// Run rotateBackgroundPosters every 4 seconds (4000 milliseconds)
setInterval(rotateBackgroundPosters, 4000);

// ========================================
// STEP 3: INTRO SCENE ANIMATION
// ========================================
// This function displays scenes one by one
// Each scene appears for a set duration, then moves to next

let currentSceneIndex = 0;  // Track which scene we're on
let sceneInterval;  // Will store the interval ID so we can stop it later

function startIntroSequence() {
    console.log('Starting intro sequence...');

    // Show first scene immediately
    scenes[currentSceneIndex].classList.add('active');

    // Set up interval to change scenes
    sceneInterval = setInterval(() => {
        // TRIGGER TRANSITION EFFECT BETWEEN SCENES!
        triggerTransition();

        // Remove 'active' class from current scene (hide it)
        scenes[currentSceneIndex].classList.remove('active');

        // Move to next scene
        currentSceneIndex++;

        // Check if we've shown all scenes
        if (currentSceneIndex >= scenes.length) {
            // All scenes done - stop the interval
            clearInterval(sceneInterval);
            console.log('Intro sequence complete!');

            // Optional: Reset after intro ends
            // setTimeout(resetIntro, 3000);  // Reset after 3 seconds

            return;  // Exit the function
        }

        // Show next scene
        scenes[currentSceneIndex].classList.add('active');
        console.log(`Showing scene ${currentSceneIndex + 1} of ${scenes.length}`);

    }, 2000);  // Change scene every 2 seconds (2000 milliseconds)
    // You can adjust this timing to match the original intro!
}

// ========================================
// NEW: TRIGGER TRANSITION EFFECTS
// ========================================
// This adds transition effects BETWEEN scenes!

function triggerTransition() {
    // Random transition type
    const transitionType = Math.floor(Math.random() * 3);

    if (transitionType === 0) {
        // Circular wipe transition
        transitionOverlay.classList.add('active');
        setTimeout(() => {
            transitionOverlay.classList.remove('active');
        }, 800);
    } else if (transitionType === 1) {
        // Static burst transition
        transitionOverlay.classList.add('static-burst');
        setTimeout(() => {
            transitionOverlay.classList.remove('static-burst');
        }, 400);
    }
    // else: No transition (direct cut) - more horror variety!
}

// ========================================
// STEP 4: START BUTTON CLICK EVENT
// ========================================
// This runs when user clicks the START button

startBtn.addEventListener('click', function() {
    console.log('START button clicked!');

    // Hide the loading screen
    loadingScreen.classList.add('hidden');

    // Show the main intro
    mainIntro.classList.add('active');

    // Start playing background music
    // Note: Modern browsers require user interaction before playing audio
    backgroundMusic.play()
        .then(() => {
            console.log('Music started successfully!');
        })
        .catch((error) => {
            console.error('Error playing music:', error);
            // Music might not play due to browser autoplay policies
            // User might need to interact with page first
        });

    // Start the scene animation sequence
    startIntroSequence();
});

// ========================================
// STEP 5: OPTIONAL - RESET FUNCTION
// ========================================
// This resets everything to start over

function resetIntro() {
    console.log('Resetting intro...');

    // Hide main intro
    mainIntro.classList.remove('active');

    // Show loading screen again
    loadingScreen.classList.remove('hidden');

    // Remove active class from all scenes
    scenes.forEach(scene => {
        scene.classList.remove('active');
    });

    // Reset scene index
    currentSceneIndex = 0;

    // Stop and reset music
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;

    // Clear the scene interval if it's running
    if (sceneInterval) {
        clearInterval(sceneInterval);
    }
}

// ========================================
// STEP 6: KEYBOARD CONTROLS (Optional Enhancement)
// ========================================
// Press 'R' key to reset the intro

document.addEventListener('keydown', function(event) {
    // Check if 'R' key was pressed
    if (event.key === 'r' || event.key === 'R') {
        console.log('R key pressed - resetting intro');
        resetIntro();
    }

    // Press 'Space' to start (if on loading screen)
    if (event.key === ' ' && !loadingScreen.classList.contains('hidden')) {
        event.preventDefault();  // Prevent page scroll
        startBtn.click();  // Trigger button click
    }
});

// ========================================
// DEBUGGING HELPERS
// ========================================
// These console.logs help you understand what's loaded

console.log('JavaScript loaded successfully!');
console.log('Number of background posters:', backgroundPosters.length);
console.log('Number of scenes:', scenes.length);
console.log('Audio file path:', backgroundMusic.src);

// Check if elements were found
if (scenes.length === 0) {
    console.error('ERROR: No scenes found! Check your HTML structure.');
}

if (backgroundPosters.length === 0) {
    console.warn('WARNING: No background posters found!');
}

/* ========================================
   WHAT YOU LEARNED:
   ========================================

   1. **querySelector / querySelectorAll**
      - Selecting elements from HTML
      - Difference between single element vs NodeList

   2. **classList.add() / .remove()**
      - Adding and removing CSS classes dynamically
      - Triggering CSS animations via classes

   3. **setInterval()**
      - Running code repeatedly at intervals
      - Clearing intervals with clearInterval()

   4. **addEventListener()**
      - Listening for user interactions (click, keydown)
      - Event callback functions

   5. **Web Audio API**
      - new Audio() constructor
      - .play() and .pause() methods
      - Handling async operations with promises (.then / .catch)

   6. **Modulo Operator (%)**
      - Creating infinite loops through arrays
      - (index + 1) % array.length

   7. **Array Methods**
      - .forEach() to loop through elements
      - .length to get array size

   8. **Conditional Statements**
      - if / else for decision making
      - Checking array bounds

   9. **Functions**
      - Defining reusable code blocks
      - Function parameters and scope

   10. **Console Methods**
       - console.log() for debugging
       - console.error() and console.warn() for different message types

   ========================================
   NEXT STEPS TO IMPROVE:
   ========================================

   - Adjust scene timing to match original intro exactly
   - Add more horror effects (glitch, static, distortion)
   - Sync scene changes with music beats
   - Add fade-to-black transitions
   - Preload all images before starting
   - Add loading progress bar
   - Add fullscreen mode option
   - Create custom cursor effect
   - Add sound effects for scene transitions

   ========================================
*/
