// src/utils.js

export function pointsForWord(word) {
    if (typeof word !== 'string') {
      return 0;
    }
  
    // Convert the word to lowercase to handle case-insensitivity
    const lowerCaseWord = word.toLowerCase();
    
    return [...lowerCaseWord].reduce((points, char) => {
      if (/[aeiou]/.test(char)) {
        return points + 1; // 1 point for vowels
      }
      if (/[bcdfghjklmnpqrstvwxyz]/.test(char)) {
        return points + 2; // 2 points for consonants
      }
      return points; // Ignore non-alphabetic characters
    }, 0);
  }
  