console.log("palindrome("+"abcba"+") => ")//""
str = "abcba"
palindrome(str)
function palindrome(str)
{
    ans = 0;
    if(str.length % 2 == 0 )
    {
        for(i = 0;i < (str.length / 2) ;i += 1)
        {
            if(str.charAt(i) != str.charAt(str.length-i-1))ans += 1
        }
    }
    else
    {
        for(i = 0;i < ((str.length - 1 )/ 2) ;i += 1)
        {
            if(str.charAt(i) != str.charAt(str.length-i-1))ans += 1
        }
    }
    if(ans == 0)console.log("true")
    else console.log("false")
}