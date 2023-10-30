function getPositives(ar)
{
    let ar2 = [];
    
    for(let i = 0; i < ar.length; i++)
    {
        let el = ar[i];
        
        if (el >= 0)
        {
            ar2.push(el);
        }
    }
    
    return ar2;
}

let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let ar2 = getPositives(ar);

println(ar2);