# RESOURCES.md - Helpful Links, Tools & Examples

This document contains curated resources, tools, and code examples to help you with your intro/outro recreation project.

---

## Table of Contents

1. [Asset Resources](#asset-resources)
2. [CSS Tools & Generators](#css-tools--generators)
3. [Audio Tools](#audio-tools)
4. [Learning Platforms](#learning-platforms)
5. [Code Examples](#code-examples)
6. [Inspiration Galleries](#inspiration-galleries)
7. [Browser DevTools Tips](#browser-devtools-tips)

---

## Asset Resources

### Free Fonts

#### 1. Google Fonts
**URL:** https://fonts.google.com/
- Largest collection of free fonts
- Easy integration (just one `<link>` tag)
- Web-optimized and fast loading

**How to use:**
```html
<!-- In <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

<!-- In CSS -->
body {
  font-family: 'Roboto', sans-serif;
}
```

#### 2. CDN Fonts
**URL:** https://www.cdnfonts.com/
- Many specialty fonts (like American Horror Story font)
- Similar to Google Fonts integration
- Great for theme-specific fonts

#### 3. DaFont
**URL:** https://www.dafont.com/
- Huge collection of free fonts
- Download and self-host
- Good for unique, stylized fonts

**How to use downloaded fonts:**
```css
@font-face {
  font-family: 'CustomFont';
  src: url('fonts/CustomFont.woff2') format('woff2'),
       url('fonts/CustomFont.woff') format('woff');
}

body {
  font-family: 'CustomFont', sans-serif;
}
```

#### 4. Font Squirrel
**URL:** https://www.fontsquirrel.com/
- 100% free for commercial use
- Web font generator tool
- High-quality fonts

---

### Free Images & Photos

#### 1. Pexels
**URL:** https://www.pexels.com/
- High-quality stock photos
- Completely free
- No attribution required
- Great for backgrounds

#### 2. Unsplash
**URL:** https://unsplash.com/
- Beautiful, high-resolution photos
- Free to use
- Professional quality

#### 3. Pixabay
**URL:** https://pixabay.com/
- Images, vectors, illustrations
- Free for commercial use
- Large collection

#### 4. Textures.com
**URL:** https://www.textures.com/
- Free texture images (with account)
- Great for grunge, old film effects
- Perfect for American Horror Story aesthetic

---

### Free Icons

#### 1. Font Awesome
**URL:** https://fontawesome.com/
- Thousands of icons
- Free and pro versions
- Easy integration

```html
<!-- Include Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Use icons -->
<i class="fas fa-play"></i>
<i class="fas fa-pause"></i>
```

#### 2. Flaticon
**URL:** https://www.flaticon.com/
- Millions of icons
- Various styles
- Free with attribution

#### 3. Iconfinder
**URL:** https://www.iconfinder.com/
- High-quality icons
- Free and premium

---

### Free Music & Sound Effects

#### 1. Bensound
**URL:** https://www.bensound.com/
- Royalty-free music
- Various genres
- Free with attribution

#### 2. FreeSound
**URL:** https://freesound.org/
- Community-uploaded sounds
- Sound effects library
- Free to use

#### 3. FreeSFX
**URL:** https://www.freesfx.co.uk/
- Sound effects
- Game sounds
- Ambient sounds

#### 4. YouTube Audio Library
**URL:** https://www.youtube.com/audiolibrary
- Free music for creators
- No copyright issues
- Downloadable

#### 5. Incompetech
**URL:** https://incompetech.com/music/
- Kevin MacLeod's music
- Royalty-free
- Huge collection

---

## CSS Tools & Generators

### 1. CSS Gradient Generator
**URL:** https://cssgradient.io/

**Example gradient:**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Useful for:**
- Background gradients
- Overlay effects
- Colorful animations

---

### 2. CSS Box Shadow Generator
**URL:** https://cssgenerator.org/box-shadow-css-generator.html

**Example:**
```css
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
```

**For your project:**
```css
.btn {
  box-shadow: rgba(97, 97, 108, 0.25) 0px 50px 100px -20px,
              rgba(255, 255, 255, 0.3) 0px 30px 60px -30px;
}
```

---

### 3. CSS Text Shadow Generator
**URL:** https://css3gen.com/text-shadow/

**Example:**
```css
text-shadow: 0 0 6px rgba(255, 255, 255, 0.5),
             0 0 10px rgba(255, 255, 255, 0.5);
```

**Creates glowing text effect (used in your project!)**

---

### 4. Animista - CSS Animation Generator
**URL:** https://animista.net/

**Features:**
- Pre-made CSS animations
- Customize timing, duration
- Copy-paste code
- Great for inspiration

**Categories:**
- Entrance animations
- Exit animations
- Text animations
- Attention seekers

---

### 5. CSS Clip-Path Maker
**URL:** https://bennettfeely.com/clippy/

**Create complex shapes:**
```css
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
```

**Good for:**
- Diagonal cuts
- Custom shapes
- Creative layouts

---

### 6. Cubic Bezier Generator
**URL:** https://cubic-bezier.com/

**Visualize timing functions:**
```css
animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

**Creates custom easing curves**

---

### 7. Neumorphism Generator
**URL:** https://neumorphism.io/

**Modern soft UI effect:**
```css
background: #e0e0e0;
box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
```

---

## Audio Tools

### 1. MP3 Cutter
**URL:** https://mp3cut.net/

**Features:**
- Cut audio files online
- No installation needed
- Export specific sections

**Use case:** Extract just the intro music from a long track

---

### 2. Online Audio Converter
**URL:** https://online-audio-converter.com/

**Convert between formats:**
- MP3
- WAV
- OGG
- M4A

**Why:** Different browsers support different formats

---

### 3. Audio Trimmer
**URL:** https://audiotrimmer.com/

**Features:**
- Trim audio
- Fade in/out
- Volume adjustment

---

### 4. YouTube to MP3
**URL:** https://ytmp3.cc/

**Extract audio from YouTube videos**

**Legal use:** Only for content you have rights to, or royalty-free content

---

## Learning Platforms

### 1. MDN Web Docs (Best Resource!)
**URL:** https://developer.mozilla.org/

**Why it's the best:**
- Official documentation
- Comprehensive guides
- Code examples
- Browser compatibility info

**Essential pages:**
- CSS Animations: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations
- Flexbox: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
- DOM Manipulation: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

---

### 2. CSS-Tricks
**URL:** https://css-tricks.com/

**Best for:**
- CSS techniques
- Complete guides (Flexbox, Grid)
- Snippets and examples

**Must-read:**
- A Complete Guide to Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- A Complete Guide to CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/

---

### 3. JavaScript.info
**URL:** https://javascript.info/

**Best for:**
- Learning JavaScript from scratch
- Modern JavaScript (ES6+)
- Clear explanations

---

### 4. Web.dev (by Google)
**URL:** https://web.dev/

**Best for:**
- Performance optimization
- Best practices
- Modern web development

---

### 5. CodePen
**URL:** https://codepen.io/

**Interactive playground:**
- Write HTML, CSS, JS
- See results instantly
- Learn from others' code
- Share your work

**Search for:**
- "CSS animations"
- "Slideshow"
- "Loading screen"

---

### 6. freeCodeCamp
**URL:** https://www.freecodecamp.org/

**Free courses:**
- Responsive Web Design
- JavaScript Algorithms
- Projects with certifications

---

## Code Examples

### Example 1: Fade In Animation

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.element {
  animation: fadeIn 1s ease-in;
}
```

---

### Example 2: Slide In from Left

```css
@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.element {
  animation: slideInLeft 0.5s ease-out;
}
```

---

### Example 3: Pulsing Effect

```css
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.element {
  animation: pulse 2s infinite;
}
```

---

### Example 4: Rotating Border (Like Your Button)

```css
.btn {
  position: relative;
  border: 2px solid #ffffff;
}

.btn::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #ffffff;
  animation: rotate 1.5s infinite linear;
}

@keyframes rotate {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
}
```

---

### Example 5: Text Typing Effect

```css
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

.typewriter {
  overflow: hidden;
  border-right: 2px solid;
  white-space: nowrap;
  animation: typing 3s steps(40, end),
             blink 0.75s step-end infinite;
}
```

```html
<div class="typewriter">American Horror Story</div>
```

---

### Example 6: Image Glitch Effect

```css
@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}

.glitch {
  animation: glitch 0.3s infinite;
}
```

---

### Example 7: Old TV Effect (Like Fallout)

```css
.old-tv {
  position: relative;
  filter: grayscale(100%) contrast(150%);
}

.old-tv::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

.old-tv::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  animation: flicker 0.15s infinite;
}
```

---

### Example 8: Film Grain Effect

```css
.film-grain {
  position: relative;
}

.film-grain::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAA...');
  opacity: 0.05;
  animation: grain 0.5s steps(6) infinite;
}

@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -5%); }
  20% { transform: translate(10%, 5%); }
  30% { transform: translate(-15%, -15%); }
  40% { transform: translate(15%, 20%); }
  50% { transform: translate(-10%, 15%); }
  60% { transform: translate(10%, -10%); }
  70% { transform: translate(-15%, 0%); }
  80% { transform: translate(15%, 10%); }
  90% { transform: translate(-5%, -20%); }
}
```

---

### Example 9: Simple Image Carousel (JavaScript)

```javascript
const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function showNextImage() {
  // Hide current image
  images[currentIndex].classList.remove('active');

  // Move to next image (loop back to 0 if at end)
  currentIndex = (currentIndex + 1) % images.length;

  // Show new image
  images[currentIndex].classList.add('active');
}

// Change image every 3 seconds
setInterval(showNextImage, 3000);
```

```css
.carousel img {
  opacity: 0;
  transition: opacity 0.5s;
}

.carousel img.active {
  opacity: 1;
}
```

---

### Example 10: Parallax Scrolling Effect

```javascript
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.parallax');

  // Move background slower than scroll (creates depth)
  parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
});
```

```css
.parallax {
  background-image: url('background.jpg');
  background-size: cover;
  height: 100vh;
  transition: transform 0.1s ease-out;
}
```

---

## Inspiration Galleries

### 1. Awwwards
**URL:** https://www.awwwards.com/

**Best for:**
- Award-winning website designs
- Animation inspiration
- Cutting-edge effects

---

### 2. CodePen Challenges
**URL:** https://codepen.io/challenges

**Weekly challenges:**
- Themed coding challenges
- See others' solutions
- Get inspired

---

### 3. Dribbble
**URL:** https://dribbble.com/

**Best for:**
- UI/UX design inspiration
- Animation concepts
- Visual ideas

---

### 4. Art of the Title
**URL:** https://www.artofthetitle.com/

**THE BEST for your project:**
- Movie/TV title sequences
- Detailed breakdowns
- Behind-the-scenes info
- Perfect for studying intro techniques

---

### 5. Hover.dev
**URL:** https://www.hover.dev/

**CSS hover effects:**
- Button animations
- Card effects
- Interactive elements

---

## Browser DevTools Tips

### Opening DevTools
- **Chrome/Brave:** F12 or Ctrl+Shift+I (Windows) / Cmd+Option+I (Mac)
- **Firefox:** F12 or Ctrl+Shift+I
- **Safari:** Cmd+Option+I (enable in Preferences → Advanced first)

---

### Inspecting Elements

1. **Right-click any element** → "Inspect"
2. See HTML structure on left
3. See CSS styles on right
4. Edit live to test changes

---

### Testing Animations

In DevTools:
1. Find animation in Styles panel
2. See animation timeline
3. Slow down animations
4. Pause/replay animations

**Animation Panel (Chrome):**
- More Tools → Animations
- Control animation speed
- Replay animations

---

### Console Tips

```javascript
// Log values to debug
console.log('Value:', myVariable);

// Log objects with details
console.table(myArray);

// Time how long code takes
console.time('myFunction');
// ... code ...
console.timeEnd('myFunction');

// Clear console
console.clear();
```

---

### Responsive Testing

**Device Toolbar:**
- Click device icon (Ctrl+Shift+M)
- Test different screen sizes
- Simulate mobile devices

---

## Keyboard Shortcuts

### Chrome DevTools
- `Ctrl+Shift+C` - Select element inspector
- `Ctrl+]` - Next panel
- `Ctrl+[` - Previous panel
- `Esc` - Toggle console drawer

### Code Editing
- `Ctrl+/` - Comment/uncomment line
- `Ctrl+D` - Select next occurrence
- `Alt+Up/Down` - Move line up/down
- `Ctrl+F` - Find in file

---

## Performance Tips

### Optimizing Images

1. **Compress images:**
   - https://tinypng.com/ (PNG, JPG)
   - https://squoosh.app/ (Google's tool)

2. **Use correct formats:**
   - JPEG - Photos
   - PNG - Graphics, transparency
   - WebP - Modern format, smaller file size

3. **Responsive images:**
```html
<img src="image-small.jpg"
     srcset="image-small.jpg 400w,
             image-medium.jpg 800w,
             image-large.jpg 1200w"
     sizes="(max-width: 400px) 400px,
            (max-width: 800px) 800px,
            1200px"
     alt="Description">
```

---

### Animation Performance

**Use GPU-accelerated properties:**
- `transform` (translate, scale, rotate) ✅
- `opacity` ✅

**Avoid (they're slow):**
- `width`, `height` ❌
- `top`, `left`, `right`, `bottom` ❌
- `margin`, `padding` ❌

**Enable GPU acceleration:**
```css
.animated-element {
  will-change: transform;
  transform: translateZ(0);
}
```

---

## Cheat Sheets

### Flexbox Cheat Sheet
```css
.container {
  display: flex;
  flex-direction: row | column;
  justify-content: flex-start | center | flex-end | space-between | space-around;
  align-items: flex-start | center | flex-end | stretch;
  flex-wrap: nowrap | wrap;
  gap: 20px;
}

.item {
  flex: 1;  /* Grow to fill space */
  flex-shrink: 0;  /* Don't shrink */
  align-self: flex-start | center | flex-end;
}
```

---

### Animation Cheat Sheet
```css
.element {
  animation-name: myAnimation;
  animation-duration: 2s;
  animation-timing-function: ease | linear | ease-in | ease-out | cubic-bezier();
  animation-delay: 1s;
  animation-iteration-count: 3 | infinite;
  animation-direction: normal | reverse | alternate;
  animation-fill-mode: none | forwards | backwards | both;
  animation-play-state: running | paused;

  /* Shorthand */
  animation: myAnimation 2s ease-in 1s infinite alternate forwards;
}
```

---

### Position Cheat Sheet
```css
/* Static (default) - normal flow */
position: static;

/* Relative - offset from normal position */
position: relative;
top: 10px;
left: 20px;

/* Absolute - positioned relative to nearest positioned ancestor */
position: absolute;
top: 0;
right: 0;

/* Fixed - positioned relative to viewport */
position: fixed;
bottom: 20px;
right: 20px;

/* Sticky - toggles between relative and fixed */
position: sticky;
top: 0;
```

---

## Project Ideas for Practice

After completing your American Horror Story intro, try these:

1. **Star Wars Opening Crawl**
   - Perspective text scrolling
   - Star field background
   - Fade in/out

2. **Netflix Intro "Ta-Dum"**
   - Simple but requires timing
   - Sound synchronization
   - Red "N" animation

3. **Breaking Bad Title**
   - Periodic table element styling
   - Green color scheme
   - Text reveal

4. **Game of Thrones Map**
   - SVG animations
   - Camera movement simulation
   - Complex timing

5. **Stranger Things Title**
   - Retro 80s style
   - Flickering lights effect
   - Custom font

---

## When You Get Stuck

1. **Read error messages carefully**
   - They usually tell you exactly what's wrong

2. **Check the console**
   - F12 → Console tab
   - Look for red errors

3. **Validate your code**
   - HTML: https://validator.w3.org/
   - CSS: https://jigsaw.w3.org/css-validator/

4. **Search for solutions**
   - Google: "how to [what you want] css"
   - Stack Overflow often has answers

5. **Take a break**
   - Sometimes stepping away helps
   - Come back with fresh eyes

---

## Community & Help

### Stack Overflow
**URL:** https://stackoverflow.com/
- Search before asking
- Be specific in questions
- Include code examples

### Reddit Communities
- r/webdev
- r/learnprogramming
- r/css
- r/javascript

### Discord Servers
- The Programmer's Hangout
- Devcord
- CodeSupport

---

**Remember:** Every expert was once a beginner. Keep practicing, keep experimenting, and don't be afraid to make mistakes. That's how you learn!

**Good luck with your project!**
