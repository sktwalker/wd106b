console.log("isPaired((a+3)*5/7)))*8) =>")
str = "(a+3)*5/7)))*8"
isPaired(str)
function isPaired(str)
{
    ans = 0
    for(i = 0;i < str.length;i += 1)
    {
        if(str.charAt(i) == "(")ans += 1
        if(str.charAt(i) == ")")ans -= 1
    }
    if(ans == 0)console.log("true")
    else console.log("false")
}
