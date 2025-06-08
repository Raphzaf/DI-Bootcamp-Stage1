const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

// 1) toJs: parse the JSON string into an object
function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const obj = JSON.parse(morse);
      if (Object.keys(obj).length === 0) {
        reject("Morse object is empty");
      } else {
        resolve(obj);
      }
    } catch (e) {
      reject("Invalid JSON");
    }
  });
}

// 2) toMorse: prompt the user and translate to Morse
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const input = prompt("Enter a word or sentence:").toLowerCase();
    if (!input) {
      return reject("No input provided");
    }
    const translation = [];
    for (const ch of input) {
      if (ch === " ") {
        // garder un retour à la ligne pour les espaces
        translation.push("");
      } else if (morseJS[ch]) {
        translation.push(morseJS[ch]);
      } else {
        return reject(`Character "${ch}" not found in Morse code.`);
      }
    }
    resolve(translation);
  });
}

// 3) joinWords: affiche le résultat sur la page
function joinWords(morseArr) {
  const container = document.getElementById("morse");
  container.textContent = morseArr.join("\n");
}

// Chaînage des appels
toJs()
  .then(obj => toMorse(obj))
  .then(arr => joinWords(arr))
  .catch(err => {
    document.getElementById("morse").textContent = "Error: " + err;
  });
