a = 45
console.log("factor(45) => "+factor(a))
function factor(a)
{
    arr = []
    b = []
    for(i = 2;i <= a;i += 1)
    {
        c = 0
        for(j = 1;j <= i;j += 1)
        {
            if(i % j == 0)c += 1
        }
        if(c == 2)b.push(i)
    }
    while(a != 1)
    {
        for(i = 0;i < b.length;i += 1)
        {
            if(a % i == 0 && i != 1)
            {
                a /= i
                arr.push(i)
            }
        }
    }
    return arr
}