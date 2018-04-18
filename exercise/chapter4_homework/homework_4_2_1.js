a = [[1,2,3], [3,2,1]]
console.log("transpose([[1,2,3], [3,2,1]]) => " + transpose(a))
function transpose(a)
{
    all = a.length * a[1].length
    ans = []
    for(j = 0;j < a[1].length; j += 1)
    {
        ans_2 = []
        for(i = 0;i < a.length; i += 1)
        {
            ans_2.push(a[i][j])
        }
        ans.push(ans_2)
    }
    return ans
}