let ar = [1, 2, 3];
rotateLeft(ar);
println(ar);

function rotateLeft(ar)
{
    let first = ar.shift();
    ar.push(first);
}
