# Valentine App Images

Place your hand-drawn PNG images here:

## Required Images:
- `main-valentine.png` - The main image asking "Will you be my Valentine?"
- `happy-valentine.png` - The happy image shown when they say "Yes!"
- `sad-valentine.png` - Optional: Image shown during the "No" button interactions

## How to use:
1. Add your PNG files to this folder
2. Update the image paths in `src/App.jsx` to import your actual images
3. For example, replace:
   ```jsx
   // Replace this placeholder div:
   <div className="w-80 h-80 mx-auto bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-lg mb-8">
     <p className="text-gray-500">Your main valentine PNG here</p>
   </div>

   // With your actual image:
   <img
     src="/assets/images/main-valentine.png"
     alt="Will you be my Valentine?"
     className="w-80 h-80 mx-auto mb-8 rounded-lg shadow-lg"
   />
   ```