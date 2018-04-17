console.log("countPrime(3, 7) =>" + countPrime(3, 7))
function countPrime(a, b)
{
    ans = 0;
    for(i = a;i <= b ; i += 1)
    {
        ans += isPrime(i)
    }
    return ans
}
function isPrime(a)
{   
    ans = 0;
    for(i = 1; i <= a; i += 1)
    {
        if(a % i == 0)ans += 1
    }
    if(ans == 2)return 1
    else return 0
}