println(codesToString([73,32,108,105,107,101,32,74,97,118,97,83,99,114,105,112,116]));

function codesToString(ar)
{
    return String.fromCharCode(...ar);
}