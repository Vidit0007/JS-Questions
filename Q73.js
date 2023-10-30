// Create a function that converts a string to title case (first letter of each word
//     capitalized):
    function toTitleCase(str) {
     return str.split(" ").map((word) => word.charAt(0).toUpperCase() +
    word.slice(1)).join(" ");
    }
    console.log(toTitleCase["vidit","vashist"])