console.log("m357(10,15) = " + m357(10,15))
function m357(a,b)
{
    for(i = a;i <= b;i += 1)
    {
        if(i % 3 == 0 || i % 5 == 0 ||i % 7 == 0)
        {
            return i
        }
    }
}

