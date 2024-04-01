//this function declaration changes strings to uppercase

//Uses the toUpperCase()method to convert all characters in the string to uppercase.

function toUpperCase(sentence) {
    return sentence.toUpperCase();
}
//Similar to toUpperCase() but uses toLowerCase() to convert all characters to lowercase.

function toLowerCase(sentence) {
    return text.toLowerCase();
}
// Takes a string as input.
function invertCase(sentence) {

    // splits the string into an array of individual characters.

    return sentence.split('').map(sentence => {

        // Check if the character is uppercase and call the appropriate function

        if (sentence === sentence.toUpperCase()) {
            return toLowerCase(sentence);
        } else {
            return toUpperCase(sentence);
        }
        //joins the modified characters back into a string, creating the inverted-case string
    }).join('');
}