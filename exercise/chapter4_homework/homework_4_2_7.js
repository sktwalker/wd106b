a = [1,2,3,4,5,6]
b = 2
c = 3
console.log("asMatrix([1,2,3,4,5,6], 2, 3) =>" + asMatrix(a,b,c))
function asMatrix(a,b,c)
{
    x = 0;
    ans = []
    for(i = 0;i < b;i += 1)
    {
        ans_2 = []
        for(j = 0;j < c;j += 1)
        {
            ans_2.push(a[x])
            x += 1
        }
        ans.push(ans_2)
    }
    return ans
}