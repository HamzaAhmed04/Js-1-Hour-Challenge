let correctAnswer = 7;
let userGuess = +prompt("Guess a number between 1 and 10:"); // + converts to number

let difference = userGuess - correctAnswer;

if (userGuess === correctAnswer) {
    alert("🎯 Correct!");
} 
else if (difference >= 5 || difference <= -5) {
    alert("Bahut door ho! 🚶‍♂️");
} 
else if (difference >= 3 || difference <= -3) {
    alert("Thoda sa better guess karo! 📉");
} 
else if (difference === 2 || difference === -2) {
    alert("Qareeb ho rahe ho! 🔍");
} 
else if (difference === 1 || difference === -1) {
   alert("Bas ek step door ho! 👌");
} 