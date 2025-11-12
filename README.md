# Recreate A Movie/TV/Game Intro - Learning Project

## Student Learning Challenge - S3 CB

This is a student-level project where I'm learning to recreate intro/outro sequences from movies, TV series, or games using **only vanilla HTML, CSS, and JavaScript** (no frameworks or libraries).

---

## What is This Challenge?

**Recreate part of an intro or outro** from a movie, TV series, or game using only vanilla HTML, CSS, and JavaScript.

### Requirements:
- **No frameworks** (no React, Vue, Angular, etc.)
- **No external libraries** (no jQuery, GSAP, etc.)
- **No copy-paste modules**
- Must work on **desktop** (Chrome/Brave browser)
- Target resolution: **1920x1080**
- Use your own imagination and vanilla techniques

### Deadline:
Submit before next Thursday in the Canvas assignment (link or zip file)

---

## My Project: American Horror Story Intro

I chose to recreate the **American Horror Story** intro sequence!

### Watch the Original:
[American Horror Story Intro on YouTube](https://www.youtube.com/watch?v=ScY179qa5pM)

---

## What I'm Learning

This project is teaching me fundamental web development skills:

### HTML (Structure)
- Semantic HTML5 elements
- Organizing content with divs and sections
- Using data attributes for JavaScript manipulation
- Proper document structure and metadata
- Linking external resources (CSS, JavaScript, fonts, audio)

### CSS (Styling & Animation)
- CSS Reset with universal selector (`*`)
- Flexbox for centering and layout
- Positioning (fixed, absolute, relative)
- CSS Animations with `@keyframes`
- CSS Transforms (scale, rotate, translate)
- CSS Transitions for smooth effects
- Opacity and visibility control
- Custom fonts integration
- Gradient backgrounds
- Box-shadow effects
- Pseudo-elements (::before, ::after)
- Animation timing functions (ease, linear, cubic-bezier)

### JavaScript (Interactivity)
- DOM manipulation (querySelector, querySelectorAll)
- Event listeners (click events)
- Web Audio API (playing background music)
- Timer functions (setInterval)
- Array iteration and loops
- Function declarations
- Controlling CSS display properties via JavaScript
- Class manipulation (add/remove classes)

---

## Project Structure

```
recreate-a-intro-outro/
├── AHS/                          # My American Horror Story project
│   ├── index.html                # Main HTML file
│   ├── CSS/
│   │   └── style.css             # All styling and animations
│   ├── javascript/
│   │   └── javascript.js         # Interactive functionality
│   ├── images/                   # Image assets
│   │   ├── Intro-names/          # Intro slideshow images
│   │   ├── cut-scene/            # Scene transition images
│   │   ├── name-of-cast/         # Cast name overlays
│   │   └── toma/                 # Additional scenes
│   └── audio/                    # Background music
├── README.md                     # This file - project overview
├── LEARNING.md                   # Detailed explanations of techniques
└── RESOURCES.md                  # Links and helpful resources
```

---

## Features I Implemented

### 1. **Loading Screen**
- Custom loading animation with progress bar
- Text effects with shadows and glows
- Loading bar that fills up over 5 seconds
- Animated "START" button with hover effects

### 2. **Intro Slideshow (Before Main Intro)**
- Rotating background images
- Distorted animation effect (rotation + scale)
- Automatic image transitions

### 3. **Main Intro Sequence**
- Scene-by-scene slideshow
- Zoom in/out animations
- Flashing/flickering effects (like the original)
- Cast name overlays
- Synchronized with background audio

### 4. **Audio Integration**
- Web Audio API to play background music
- Audio starts when user clicks "START"
- Synced with visual animations

### 5. **Button Animations**
- Custom hover effects
- Rotating border animations
- Smooth transitions

---

## Techniques I Used

### CSS Animations
- `@keyframes` for defining animation sequences
- `animation` property for applying animations
- Multiple animations: distorted, zoom-in-out, flashing, loading, line-top, line-bottom
- Animation timing: `ease`, `linear`, `ease-in-out`, `cubic-bezier()`
- `animation-duration`, `animation-delay`, `animation-iteration-count`

### CSS Transforms
- `transform: translate()` - Moving elements
- `transform: scale()` - Zooming effects
- `transform: rotate()` - Rotation effects
- Combining multiple transforms

### Positioning Techniques
- `position: fixed` - For overlay elements (header, loading screen)
- `position: absolute` - For precise element placement
- `position: relative` - For parent containers
- Centering with `top: 50%; left: 50%; transform: translate(-50%, -50%)`

### Flexbox Layout
- `display: flex`
- `justify-content: center` / `align-items: center`
- `flex-direction: column`
- Centering content vertically and horizontally

### JavaScript DOM Manipulation
- Selecting elements: `querySelector()`, `querySelectorAll()`
- Changing styles: `element.style.display`
- Adding/removing classes: `classList.add()`, `classList.remove()`
- Event handling: `addEventListener()`

### Web Audio API
- Creating audio objects: `new Audio()`
- Playing audio: `audio.play()`

---

## How to Run My Project

1. **Clone or download this repository**
2. **Navigate to the AHS folder**
3. **Open `index.html` in Chrome or Brave browser**
4. **Click the "START" button** to begin the intro sequence

**Note:** For best experience, view in fullscreen (F11) at 1920x1080 resolution

---

## Why This Project is Good for Learning

### Portfolio Value
- Shows ability to recreate complex animations
- Demonstrates understanding of timing and sequencing
- Shows creativity and attention to detail

### Skill Development
- **CSS Mastery:** Animations, transforms, positioning
- **JavaScript Fundamentals:** DOM manipulation, events, timing
- **Problem-solving:** Figuring out how to recreate effects without libraries
- **Attention to Detail:** Matching timing and feel of original

### Real-world Applications
- Landing pages with animations
- Interactive storytelling websites
- Product showcase pages
- Portfolio websites with engaging intros

---

## Resources I Used

### Fonts
- [CDN Fonts - American Horror Story Font](https://fonts.cdnfonts.com/css/american-horror-story)

### Assets
- Images: Collected from various free sources
- Audio: Background music from the show

### Learning Resources
- MDN Web Docs (for CSS, JavaScript references)
- CSS-Tricks (for animation techniques)
- Web Audio API documentation

---

## Next Steps / Future Improvements

- [ ] Add more scenes from the intro
- [ ] Fine-tune timing to match original exactly
- [ ] Add more visual effects (grain, noise, distortion)
- [ ] Optimize images for faster loading
- [ ] Add fallbacks for different screen sizes
- [ ] Experiment with CSS filters (blur, grayscale)
- [ ] Add text animations for credits

---

## What I Learned So Far

1. **CSS animations are powerful** - You can create complex effects without JavaScript
2. **Timing is everything** - Matching animations to audio is tricky
3. **Organization matters** - Keeping files structured makes development easier
4. **Browser compatibility** - Testing in target browser (Chrome) is important
5. **Vanilla JavaScript is capable** - Don't always need libraries for simple interactions

---

## Allowed Resources for This Challenge

### Fonts
- [DaFont](https://www.dafont.com/)
- [Google Fonts](https://fonts.google.com/)
- [Font Squirrel](https://www.fontsquirrel.com/)

### Music/Sound Effects
- [Bensound](https://www.bensound.com/)
- [FreeSound](https://freesound.org/)
- [FreeSFX](https://www.freesfx.co.uk/)

### Images/Textures
- [Pexels](https://www.pexels.com/)
- [Textures.com](https://www.textures.com/)

### Icons
- [Flaticon](https://www.flaticon.com/)
- [Iconfinder](https://www.iconfinder.com/)

### Tools
- [MP3 Cutter](https://mp3cut.net/)
- [CSS Gradient Generator](https://cssgradient.io/)
- [CSS Text Shadow Generator](https://css3gen.com/text-shadow/)

---

## Examples for Inspiration

### TV Series Ideas:
- **Arrested Development** - Moving screens/animations
- **Better Call Saul** - Blurs, grunge, blinking text
- **Breaking Bad** - Periodic table names

### Movie Ideas:
- **Star Wars** - Angled crawl text
- **Jerry Bruckheimer** - Lightning effects

### Game Ideas:
- **Fallout** - Black-and-white, old TV look, on-screen text

---

## Documentation Files

- **README.md** (this file) - Project overview and challenge description
- **LEARNING.md** - Detailed explanations of every technique I'm using
- **RESOURCES.md** - Helpful links, tutorials, and code examples

---

## Contact & Acknowledgments

**Student Project** - Learning web development fundamentals through practical application

**Original Content:** American Horror Story belongs to FX Networks
**Educational Purpose:** This is a student project for learning purposes only

---

**Happy Coding!**
