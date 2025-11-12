# HOW TO USE YOUR PROJECT

## American Horror Story: Hotel Intro Recreation

Congratulations! Your project is now ready to use. This document explains how to run it, test it, and understand what's happening.

---

## Quick Start

### Running the Project

1. **Navigate to the AHS folder:**
   ```
   cd AHS
   ```

2. **Open `index.html` in your browser:**
   - **Option 1:** Double-click `index.html`
   - **Option 2:** Right-click → Open with → Chrome/Brave
   - **Option 3:** Drag the file into your browser window

3. **You should see:**
   - Black background with rotating AHS posters
   - "American Horror Story: Hotel" title
   - Loading bar animation
   - "START INTRO" button

4. **Click START INTRO:**
   - Loading screen disappears
   - Intro sequence begins
   - Background music plays
   - Horror scenes appear one by one

---

## What Each File Does

### `index.html` - The Structure
**What it contains:**
- Loading screen with title and start button
- Background poster slideshow
- All the intro scenes (horror images and cast names)
- Links to CSS and JavaScript files

**Key sections:**
- `<header id="loading-screen">` - The initial screen
- `<div class="slideshow-container-intro">` - Background posters
- `<main id="main-intro">` - The actual intro scenes

---

### `CSS/style.css` - The Styling & Animations
**What it contains:**
- Visual styling for all elements
- CSS animations (flicker, zoom, fade, distortion)
- Horror aesthetic (dark colors, glowing text)
- Responsive design for different screen sizes

**Key animations:**
- `@keyframes loading` - Loading bar fills up
- `@keyframes distorted` - Rotating poster effect
- `@keyframes sceneFlicker` - Horror flicker effect
- `@keyframes subtleZoom` - Slow zoom on images
- `@keyframes finalFade` - End title fade

---

### `javascript/javascript.js` - The Interactivity
**What it does:**
- Rotates background posters every 4 seconds
- Handles START button click
- Plays intro scene-by-scene
- Plays background music
- Keyboard controls (R to reset, Space to start)

**Main functions:**
- `rotateBackgroundPosters()` - Changes background images
- `startIntroSequence()` - Runs the intro animation
- `resetIntro()` - Resets everything to beginning

---

## Controls

### Mouse Controls
- **Click "START INTRO" button** - Begins the intro sequence

### Keyboard Controls
- **Press SPACEBAR** - Start intro (while on loading screen)
- **Press R** - Reset intro (go back to beginning)

---

## Customization Guide

### Change Scene Timing

**In `javascript/javascript.js` line 94:**
```javascript
}, 2000);  // Change scene every 2 seconds
```

**Change `2000` to:**
- `1000` - Faster (1 second per scene)
- `3000` - Slower (3 seconds per scene)
- `1500` - Medium (1.5 seconds)

---

### Change Background Poster Rotation Speed

**In `javascript/javascript.js` line 53:**
```javascript
setInterval(rotateBackgroundPosters, 4000);
```

**Change `4000` to:**
- `3000` - Faster rotation (3 seconds)
- `5000` - Slower rotation (5 seconds)

---

### Add More Scenes

**1. Add your image to the appropriate folder:**
- Horror scenes → `images/cut-scene/`
- Cast names → `images/name-of-cast/`

**2. Add HTML in `index.html` inside `<section id="intro-scenes">`:**

```html
<!-- For horror scene -->
<div class="scene">
    <img src="images/cut-scene/your-new-image.png" alt="Description">
</div>

<!-- For cast name -->
<div class="scene name-scene">
    <img src="images/name-of-cast/actor-name.png" alt="Actor Name">
</div>
```

The JavaScript will automatically include it in the slideshow!

---

### Change Colors

**In `CSS/style.css`:**

**Background color (currently black):**
```css
body {
  background-color: #000000;  /* Change to any color */
}
```

**Title glow color (currently white):**
```css
.tittle-text h1 {
    text-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
    /* Change RGB values for different glow color */
}
```

**Examples:**
- Red glow: `rgba(255, 0, 0, 0.5)`
- Blue glow: `rgba(0, 0, 255, 0.5)`
- Green glow: `rgba(0, 255, 0, 0.5)`

---

## Troubleshooting

### Problem: Images not showing

**Solution:**
1. Check that image paths in HTML match actual file locations
2. Make sure image files exist in folders
3. Open browser console (F12) to see error messages

---

### Problem: Music not playing

**Possible causes:**
1. **Browser autoplay policy** - Most browsers block autoplay
   - **Solution:** Music will play after clicking START button

2. **Wrong file path** - Check line 27 in `javascript.js`:
   ```javascript
   const backgroundMusic = new Audio('audio/audio-intro-ahs.mp3');
   ```
   - Make sure this matches your actual audio file location

3. **File doesn't exist** - Check that `audio/audio-intro-ahs.mp3` exists

**To check:** Open browser console (F12) and look for error messages

---

### Problem: START button does nothing

**Solution:**
1. Open browser console (F12)
2. Click START button
3. You should see: `"START button clicked!"`
4. If not, check for JavaScript errors in console

---

### Problem: Scenes appear too fast/slow

**Solution:** Adjust timing in `javascript/javascript.js` line 94:
```javascript
}, 2000);  // Change this number (milliseconds)
```

---

### Problem: Background posters not rotating

**Solution:**
1. Check that images have `class="before-img"` in HTML
2. Check that first image has `class="before-img active"`
3. Open console and check for: `"Number of background posters: 3"`

---

## Testing Checklist

Use this to make sure everything works:

- [ ] Page loads without errors
- [ ] Background is black
- [ ] Title "American Horror Story: Hotel" is visible
- [ ] Title has glowing effect
- [ ] Loading bar animates (fills up over 5 seconds)
- [ ] Background posters rotate every 4 seconds
- [ ] START button has hover effect (animated borders)
- [ ] Clicking START button hides loading screen
- [ ] Intro scenes appear one by one
- [ ] Each scene has flicker effect when appearing
- [ ] Images have subtle zoom effect
- [ ] Background music plays (if not blocked by browser)
- [ ] Final scene shows "American Horror Story: Hotel" title
- [ ] Pressing R key resets everything
- [ ] Pressing SPACE key starts intro

---

## Browser Console (Debugging Tool)

### How to Open:
- **Windows:** Press `F12` or `Ctrl+Shift+I`
- **Mac:** Press `Cmd+Option+I`

### What You'll See:
```
JavaScript loaded successfully!
Number of background posters: 3
Number of scenes: 16
Audio file path: file:///path/to/audio/audio-intro-ahs.mp3
```

### When You Click START:
```
START button clicked!
Music started successfully!
Starting intro sequence...
Showing scene 1 of 16
Showing scene 2 of 16
...
Intro sequence complete!
```

---

## File Structure

```
AHS/
├── index.html                 # Main HTML file - open this!
├── CSS/
│   └── style.css              # All styling and animations
├── javascript/
│   └── javascript.js          # All interactivity
├── images/
│   ├── Intro-names/           # Background poster images
│   ├── cut-scene/             # Horror scene images
│   ├── name-of-cast/          # Actor name overlays
│   └── toma/                  # Hotel scene images
└── audio/
    └── audio-intro-ahs.mp3    # Background music
```

---

## Performance Tips

### If the project is slow:

1. **Optimize images:**
   - Resize images to max 1920x1080
   - Use compressed formats (JPG for photos, PNG for graphics)
   - Use tools like TinyPNG to compress

2. **Reduce animation complexity:**
   - Remove some @keyframes animations
   - Simplify transitions

3. **Preload images:**
   Add this in JavaScript before starting intro:
   ```javascript
   // Preload all images
   scenes.forEach(scene => {
       const img = scene.querySelector('img');
       if (img) {
           const preload = new Image();
           preload.src = img.src;
       }
   });
   ```

---

## Presenting Your Project

### What to Highlight:

1. **Vanilla Implementation:**
   - "I used only HTML, CSS, and JavaScript - no frameworks"
   - "Everything is built from scratch"

2. **CSS Animations:**
   - "I created multiple @keyframes animations for horror effects"
   - "The flicker effect is pure CSS"

3. **JavaScript Logic:**
   - "I implemented a scene-by-scene slideshow system"
   - "Used setInterval for timing control"
   - "Integrated Web Audio API for background music"

4. **Learning:**
   - "I documented everything to understand how it works"
   - "Added detailed comments explaining every technique"

---

## Next Steps (Future Enhancements)

### Easy Improvements:
- [ ] Add more scenes from the original intro
- [ ] Fine-tune timing to match original exactly
- [ ] Add a fullscreen button
- [ ] Add volume control for music

### Medium Difficulty:
- [ ] Add CSS filters (grayscale, blur, contrast)
- [ ] Create glitch effect with CSS
- [ ] Add film grain texture overlay
- [ ] Sync scene changes with music beats

### Advanced:
- [ ] Add particles effect (floating dust/snow)
- [ ] Create custom video using Canvas API
- [ ] Add jump scares at specific moments
- [ ] Export as video file

---

## Assignment Submission

### What to Include:

1. **The Code:**
   - Zip the entire AHS folder
   - Or provide a link if hosted online

2. **Documentation:**
   - README.md (project overview)
   - LEARNING.md (techniques explained)
   - This file (HOW-TO-USE.md)

3. **Screenshots/Video:**
   - Take screenshots of different stages
   - Or record a video of the full intro

### Submission Checklist:
- [ ] All files included
- [ ] Project runs without errors
- [ ] Code is commented
- [ ] README explains the project
- [ ] Works in Chrome/Brave at 1920x1080

---

## Credits

**Original Content:** American Horror Story: Hotel © FX Networks
**Educational Purpose:** This is a student project created for learning web development

**Student:** [Your Name]
**Course:** S3 CB - Creative Brief
**Assignment:** Recreate a Movie/TV/Game Intro

---

## Resources Used

- **Fonts:** CDN Fonts (American Horror Story font)
- **Images:** Collected from various sources
- **Audio:** Background music from the show
- **Documentation:** MDN Web Docs, CSS-Tricks

---

## Need Help?

### Check These First:
1. Browser console (F12) for error messages
2. LEARNING.md for technique explanations
3. RESOURCES.md for helpful links

### Common Issues:
- **Images not loading:** Check file paths
- **Music not playing:** Browser autoplay policy (it's normal!)
- **Animations not working:** Check CSS class names match JavaScript

---

**Good luck with your project! You've learned a lot!**

Remember: Every expert was once a beginner. Keep experimenting and building!
