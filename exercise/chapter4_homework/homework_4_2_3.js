a = [[1,2],[3,4]]
b = [[1,1],[1,1]]
console.log("sub([[1,2],[3,4]], [[1,1],[1,1]]) => " + sub(a,b))
function sub(a,b)
{
    ans = []
    for(i = 0;i < a.length;i += 1)
    {
        ans_2 =[]
        for(j = 0;j < a[0].length;j += 1)
        {
            ans_2.push(a[i][j]-b[i][j])
        }
        ans.push(ans_2)
    }
    return ans
}