println(getPrimes(10, 100));

function getPrimes(p, n)
{
    let ar = [];
    
    let i = n;
    
    while(ar.length < p)
    {
        if (isPrime(i))
        {
            ar.push(i);
        }
        
        i++;
    }
    
    return ar;
}

// Returns true if a number is prime
function isPrime(m)
{
    if (m < 2)
        return false;
        
    if (m == 2)
        return true;
    
    let maxDiv = Math.sqrt(m);
    
    for(let i = 2; i <= maxDiv; i++)
    {
        if (m % i == 0)
        {
            return false;
        }
    }
    
    return true;
}