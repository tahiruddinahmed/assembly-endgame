
 
## STEP 1: Build out the main parts of our app
  
  - Challenge: Add a header with the game title
  and description. Startin' out easy 🙂🚶‍➡️

## Step 2: Build out the main parts of our app
 
 - Challenge: Build a status section below the header.
  For now, you can just hard-code in the styles for
  a winning game, and we'll make it more dynamic
  later.
 
## Step 3: Build out the main parts of our app
 
 - Challenge: Create the language chips. Use the
  `languages.js` file to pull in the array of
  languages to use, which contains the language
  name, background color, and text color.
  
  - Hint for layout: use a flex container that can wrap
  to layout the languages.

  - Create a new `lanaguages.js` file to define the language name, color, backgroundcolor

## Step 4:Build out the main parts of our app
  
 - Challenge: 
  1. Save a "currentWord" in state. Initialize as "react".
  2. Map over the letters of the word (you'll need to turn 
     the string into an array of letters first) and display
     each one as a <span>. Capitalize the letters when
     displaying them.
  3. Style to look like the design. You can get the underline 
     effect on the box using `border-bottom`.

## Step 5: Goal: Build out the main parts of our app
 
 * Challenge: 
  Display the keyboard ⌨️. Use `<button>`s for each letter
  since it'll need to be clickable and tab-accessible.


## Step 6:  Allow the user to start guessing the letters
 * Challenge: Create a new array in state to hold user's
  guessed letters. When the user chooses a letter, add
  that letter to this state array.
  
 * Don't worry about whether it was a right or wrong 
  guess yet.

## Step 7: Allow the user to use the keyboard to guest the word 
  * Challenge: Press a key on the keyboard (for example, press A) → the A button should behave as if it was clicked.
 
 
 
## Step 8: Goal: Allow the user to start guessing the letters 
 * Challenge: Update the keyboard when a letter is right
  or wrong.
  
 * Bonus: use the `clsx` package to easily add conditional 
  classNames to the keys of the keyboard. Check the docs 
  to learn how to use it 📖
 