println(fibonacci(500));

function fibonacci(n)
{
    if (n === 0)
        return "0";

    if (n === 1)
        return "1";

    let n1 = "0";
    let n2 = "1";

    for(let i = 2; i <= n; i++)
    {
        let sum = add(n1, n2);

        n1 = n2;
        n2 = sum;
    }

    return n2;
}

function add(sNumber1, sNumber2)
{
    let maxSize = Math.max(sNumber1.length, sNumber2.length);
    
    let s1 = sNumber1.padStart(maxSize, "0");
    let s2 = sNumber2.padStart(maxSize, "0");

    let s = "";
    let carry = 0;
    
    for(let i = maxSize - 1; i >= 0; i--)
    {
        let digit1 = parseInt(s1[i]);
        let digit2 = parseInt(s2[i]);
        
        let sum = digit1 + digit2 + carry;
        let digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;

        s = digitSum.toString() + s;
    }
    
    if (carry > 0)
        s = carry + s;
    
    return s;
}