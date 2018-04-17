str = "10101010"
console.log("complement1(10101010) => " + complement1(str))
function complement1(str)
{
    ans = ""
    for(i = 0;i <= 7;i += 1)
    {
        if(str.charAt(i) == '0')ans += "1"
        else ans += "0"
    }
    return ans
}