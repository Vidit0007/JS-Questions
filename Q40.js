let ar = [23, 1000, 1, -1, 8, 3];
println(ar);
bubbleSort(ar);
println(ar);

function bubbleSort(ar)
{
    let shouldSort = true;
    let length = ar.length;

    while(shouldSort)
    {
        shouldSort = false;
        length--;
        
        for(let i = 0; i < length; i++)
        {
            let a = ar[i];
            if ( a > ar[i+1] )
            {
                ar[i] = ar[i+1];
                ar[i+1] = a;
                shouldSort = true;
            }
        }
    }
}