console.log("commonFactor(12,15) => " + commonFactor(12,15))
function commonFactor(a,b)
{
    ans = 0;
    for(i = 1;i <= a ;i += 1)
    {
        if( a % i == 0)
        {
            if( b % i == 0)
            {
                if(ans < i)ans = i
            }
        }
    }
    return ans
}