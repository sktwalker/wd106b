str = "abcde"
console.log("reverse(abcde) => " + reverse(str))
function reverse(str)
{
    ans = ""
    for(i = str.length;i >= 0;i -= 1 )
    {
        ans += str.charAt(i)
    }
    return ans
}