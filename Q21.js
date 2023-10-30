let ar = [1, 2, 3];
rotateRight(ar);
println(ar);

function rotateRight(ar)
{
    let last = ar.pop();
    ar.unshift(last);
}