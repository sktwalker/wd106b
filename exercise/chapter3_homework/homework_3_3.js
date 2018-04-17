console.log("evenParity(1010001) => ")
str = "1010001"
evenParity(str)
function evenParity(str)
{
    ans = 0
    for(i = 0;i < 7; i += 1)
    {
        if(str.charAt(i) == '1')ans += 1;
    }
    if(ans % 2 == 0)console.log("0")
    else console.log("1")
}