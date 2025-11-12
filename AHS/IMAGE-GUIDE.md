# IMAGE GUIDE - Your Available Images

This document lists all the images in your project and how they're being used in the intro.

---

## 🎬 Currently Used in Intro (in order)

### Background Slideshow (Loading Screen)
1. `images/Intro-names/Ok I love this poster because its a classic poster Everyone is.jpg`
2. `images/Intro-names/poster y banner oficial para AMERICAN HORROR STORY HOTEL JPosters.jpg`
3. `images/Intro-names/ahs-intro.jpg`

### Main Intro Sequence (20 scenes total)

| Scene # | Image Path | Type | Description |
|---------|-----------|------|-------------|
| 1 | `images/cut-scene/111.png` | Horror Scene | Opening shot |
| 2 | `images/cut-scene/cut-2.png` | Horror Scene | Cut scene |
| 3 | `images/cut-scene/cut-4.png` | Horror Scene | Cut scene |
| 4 | `images/name-of-cast/intro-1.png` | Cast Name | Actor credit |
| 5 | `images/cut-scene/cut-2.png` | Horror Scene | (repeated) |
| 6 | `images/toma/toma-049.png` | Hotel Scene | Hotel shot |
| 7 | `images/cut-scene/cut-5.png` | Horror Scene | Cut scene |
| 8 | `images/name-of-cast/angela.png` | Cast Name | Angela Bassett |
| 9 | `images/cut-scene/cut-3.png` | Horror Scene | Cut scene |
| 10 | `images/name-of-cast/cheyenne.png` | Cast Name | Cheyenne Jackson |
| 11 | `images/cut-scene/cut-46.png` | Horror Scene | Cut scene |
| 12 | `images/cut-scene/cut-55.png` | Horror Scene | Cut scene |
| 13 | `images/toma/toma-034.png` | Hotel Scene | Hotel shot |
| 14 | `images/cut-scene/pasillo.png` | Horror Scene | Hallway |
| 15 | `images/toma/calavera.png` | Horror Scene | Skull |
| 16 | `images/cut-scene/elpasillo.png` | Horror Scene | Another hallway |
| 17 | `images/toma/clown.png` | Horror Scene | Clown |
| 18 | `images/name-of-cast/ladugaga.png` | Cast Name | Lady Gaga |
| 19 | `images/toma/lamonja.png` | Horror Scene | The nun |
| 20 | `images/name-of-cast/created.png` | Cast Name | "Created by" credit |
| 21 | End Title | Text Only | "American Horror Story: Hotel" |

---

## 📂 All Available Images (Not Currently Used)

### Cut Scenes (`images/cut-scene/`)
You have **26 horror scene images**. Here are the ones NOT currently in the intro:

- `cast-1.png` - Cast member
- `cast-3.png` - Cast member
- `chica-2.png` - Girl scene
- `chica-cada.png` - Falling girl
- `chica-cada2.png` - Falling girl variant
- `cut-041.png` - Cut scene
- `cut-56.png` - Cut scene
- `inside-10.png` - Interior shot
- `inside-3.png` - Interior shot
- `inside-4.png` - Interior shot
- `inside-8.png` - Interior shot
- `intro-2.png` - Intro scene
- `manoin-cut.png` - Hand scene
- `otro-nino.png` - Another child
- `toma-anciano.png` - Old man

---

### Cast Names (`images/name-of-cast/`)
You have **21 cast name images**. Unused ones include:

- `cast-032.png`
- `cast-033.png`
- `cast-039.png`
- `cast-2.png`
- `castt-3.png`
- `chloe.png` - Chloe Sevigny
- `inside-5.png` through `inside-9.png`
- `intro-katie.png` - Kathy Bates
- `m002.png`
- `maatt.png` - Matt Bomer
- `n007.png`, `n010.png`, `no08.png`
- `Ryan Murphy - American Horror Story Hotel Main Title Sequence [ScY179qa5pM - 853x480 - 1m00s].png`

---

### Horror Scenes (`images/toma/`)
You have **42 horror/hotel scene images**. Unused ones include:

#### People/Characters:
- `anciano-creepy.png` - Creepy old man
- `nini-creepy.png` - Creepy child
- `nino-incolchon.png` - Child in mattress
- `nino-incolchon=2.png` - Variant
- `espalda.png` - Back view
- `espalda2.png` - Back view variant
- `toma-chicaespalda.png` - Girl's back

#### Objects/Details:
- `brush.png` - Brush
- `labial.png` - Lipstick
- `labial-50.png` - Lipstick variant
- `cubierto-1.png` - Silverware 1
- `cubierto-2.png` - Silverware 2
- `manoin.png` - Hand

#### Locations/Atmosphere:
- `puerta-44.png` - Door 44
- `toma-shadow.png` - Shadow
- `toma-suelo.png` - Floor
- `toma-ucerpo.png` - Body

#### Blood/Gore:
- `monja-sangre.png` - Bloody nun
- `salida-colchon.png` - Mattress exit
- `salida-colchon-2.png` - Mattress exit variant
- `otracolchon.png` - Another mattress
- `otracolchon2.png` - Another mattress variant

#### Various Shots:
- `inside-11.png`
- `inside-3-part2.png`
- `n001.png`
- `toma-3.png`
- `toma-22.png`, `toma-22-2.png`, `toma22-2-2-2.png`
- `toma-51.png`, `toma-51-1.png`, `toma-51-3.png`, `toma-51-4.png`
- `toma-57.png`, `toma-58.png`
- `toma2345.png`
- `toma=015.png`
- `tomain-2.png`

---

## 🎨 How to Add More Images to Your Intro

### Method 1: Add a New Scene

Add this code in `index.html` inside the `<section id="intro-scenes">` section:

```html
<!-- Add your new scene -->
<div class="scene">
    <img src="images/cut-scene/YOUR-IMAGE-NAME.png" alt="Description">
</div>
```

**For cast names:**
```html
<div class="scene name-scene">
    <img src="images/name-of-cast/YOUR-CAST-NAME.png" alt="Actor Name">
</div>
```

### Method 2: Replace Existing Images

Just change the image path in the HTML. For example:

**Change this:**
```html
<img src="images/cut-scene/cut-2.png" alt="Horror Scene 2">
```

**To this:**
```html
<img src="images/cut-scene/chica-cada.png" alt="Falling Girl">
```

---

## 🔧 Quick Fixes I Made

### Problems Found:
❌ `intro-2.png` - Didn't exist
❌ `intro-3.png` - Didn't exist
❌ `intro-4.png` - Didn't exist
❌ `cut-6.png` - Didn't exist
❌ `cut-7.png` - Didn't exist
❌ `cut-8.png` - Didn't exist
❌ `toma-050.png` - Didn't exist

### Replaced With:
✅ `intro-2.png` → `angela.png`
✅ `intro-3.png` → `cheyenne.png`
✅ `intro-4.png` → `ladugaga.png` (scene 18)
✅ Final credit → `created.png`
✅ `cut-6.png` → `cut-46.png`
✅ `cut-7.png` → `cut-55.png`
✅ `cut-8.png` → `pasillo.png`
✅ `toma-050.png` → `toma-034.png`

**Plus added more horror scenes:**
- `calavera.png` (skull)
- `elpasillo.png` (hallway)
- `clown.png` (creepy clown)
- `lamonja.png` (the nun)

---

## 📊 Image Statistics

- **Total Images Available:** 89 images
- **Currently Used:** 23 images (including background posters)
- **Unused Images:** 66 images
- **Background Posters:** 3 images
- **Intro Scenes:** 20 scenes (can add more!)

---

## 💡 Suggestions for Your Intro

### Add More Creepy Content:
You have unused horror images that would make the intro scarier:

1. **Creepy Children:**
   - `nini-creepy.png`
   - `otro-nino.png`
   - `nino-incolchon.png`

2. **Blood/Gore:**
   - `monja-sangre.png` (bloody nun)
   - Various mattress scenes with blood

3. **Creepy Objects:**
   - `brush.png` (could be eerie in context)
   - `labial.png` (lipstick - often used in horror)
   - `manoin.png` (isolated hand)

4. **Atmospheric Shots:**
   - `puerta-44.png` (Door 44 - room number)
   - `toma-shadow.png` (shadow shot)
   - Various inside shots

### Add More Cast Members:
You have many unused cast images:
- `intro-katie.png` (Kathy Bates)
- `chloe.png` (Chloe Sevigny)
- `maatt.png` (Matt Bomer)

---

## 🎬 Recommended Full Intro Sequence

Want a longer, more complete intro? Here's a suggested order using more of your images:

1. Opening shots (3-4 quick cuts)
2. First cast name
3. Horror montage (5-6 scenes)
4. Second cast name
5. More horror scenes (5-6 scenes)
6. Third cast name
7. Peak horror/climax (3-4 intense scenes)
8. Fourth cast name
9. Lady Gaga feature
10. Final horror shots
11. "Created by" credit
12. End title

**This would use about 30-35 scenes total** (currently using 20).

---

## 🖼️ Image Naming Patterns

Understanding the naming helps you choose images:

- `cut-*.png` - Quick cut scenes
- `toma-*.png` - "Shot" in Spanish - various takes
- `intro-*.png` - Intro-specific images
- `cast-*.png` - Cast member credits
- `inside-*.png` - Interior shots
- `pasillo` - Hallway (Spanish)
- `chica` - Girl (Spanish)
- `nino` - Boy/child (Spanish)

---

## ✅ All Images Now Work!

I've verified all image paths and they now point to files that exist in your folders. The intro should work perfectly now!

**Test it:** Open `index.html` in Chrome/Brave and click START INTRO!

---

## 🐛 Debugging Image Issues

If an image doesn't load:

1. **Check the console (F12):**
   - Look for "404 Not Found" errors
   - Will show exact path it's looking for

2. **Verify the path:**
   ```
   images/folder-name/file-name.png
   ```
   - Case sensitive!
   - Check for typos
   - Check file extension (.png vs .jpg)

3. **Check the file exists:**
   ```bash
   ls AHS/images/folder-name/
   ```

---

**Your images are now fixed and ready to use!** 🎉
