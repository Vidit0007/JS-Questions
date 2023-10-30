function countWords(text)
{
    let wasSeparator = true;
    let words = 0;
    
    for(let c of text)
    {
        // if current character is separator then advance and
        // set that the previous character was separator
        if (isSeparator(c))
        {
            wasSeparator = true;
            continue;
        }

        // if current character is not separator
        // ... but if previous was separator...
        if (wasSeparator)
        {
            words++;
            wasSeparator = false;
        }
    }
    
    return words;
}

function isSeparator(c)
{
    let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(c);
}

println(countWords(""));
println(countWords("            "));
println(countWords("JavaScript!!!   "));
println(countWords("     JavaScript"));
println(countWords("    JavaScript is cool      "));
println(countWords("I like to learn JavaScript with codeguppy"));