console.log("binary(6) => ")
binary(6)
function binary(a)
{
    c = a
    i = 1
    b = 0
    j = 1
    k = 2
    while(a > j)
    {   
        if(c % k != 0)
        {
            b += i;
        }
        i *= 10
        k *= 2
        j *= 2
    }
}
console.log(b)
