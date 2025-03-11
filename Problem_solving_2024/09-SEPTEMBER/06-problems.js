// Write a program to check if the character is a vowel, print "The character is a vowel." If the character is a consonant, print "The character is a consonant." Make sure to handle both upper and lower case letters. A vowel is a character which is any of letters a, e, i, o, u. Any letter which is a not a vowel is considered a consonant. 

let char = "b"

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("The character is a vowel.");
} else if (char >= 'a' && char <= 'z') {
    console.log("The character is a consonant.");
} else {
    console.log("Invalid input. Please enter a letter.");
}