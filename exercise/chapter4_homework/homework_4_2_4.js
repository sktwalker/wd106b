a = [[1,2],[3,4]]
b = [[1,1],[1,1]]
console.log("mul([[1,2],[3,4]], [[1,1],[1,1]]) =>" + mul(a,b))
function mul(a,b)
{
    ans = []
    for(i = 0;i < a.length;i += 1)
    {
        ans_2 =[]
        for(j = 0;j < a[0].length;j += 1)
        {
            ans.push(a[i][0]*b[j][0]+a[i][1]*b[1][j])
        }
        ans.push(ans_2)
    }
    return ans
}