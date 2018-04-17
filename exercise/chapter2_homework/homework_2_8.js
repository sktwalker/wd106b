console.log("isPrime(17) => " + isPrime(17))
function isPrime(a)
{   
    ans = 0;
    for(i = 1; i <= a; i += 1)
    {
        if(a % i == 0)ans += 1
    }
    if(ans == 2)return "true"
    else return "false"
}
