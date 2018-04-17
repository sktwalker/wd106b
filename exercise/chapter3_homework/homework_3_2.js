console.log("reverse(abcde) => ")
str = "abcde"
reverse(str)
function reverse(str)
{
    ans = ""
    for(i = str.length;i >= 0;i -= 1 )
    {
        ans += str.charAt(i)
    }
    console.log(ans)
}