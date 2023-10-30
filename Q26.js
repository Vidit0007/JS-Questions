let ar1 = [1, 2, 3, 10, 5, 3, 14];
let ar2 = [-1, 4, 5, 6, 14];

let ar = mergeLeft(ar1, ar2);
println(ar);

function mergeLeft(ar1, ar2)
{
    let ar = [];
    
    for(let el of ar1)
    {
        if (!ar2.includes(el))
        {
            ar.push(el);
        }
    }

    return ar;
}
