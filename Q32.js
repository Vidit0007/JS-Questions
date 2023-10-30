println(captializeWords("Create a function that will capitalize the first letter of each word in a text"));

function captializeWords(text)
{
    let text2 = "";
    
    for(let i = 0; i < text.length; i++)
    {
        let currChr = text[i];
        let prevChr = i > 0 ? text[i - 1] : " ";
        
        if (!isSeparator(currChr) && isSeparator(prevChr))
        {
            currChr = currChr.toUpperCase();
        }
        
        text2 += currChr;
    }
    
    return text2;
}

function isSeparator(c)
{
    let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(c);
}