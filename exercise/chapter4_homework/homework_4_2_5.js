a = [[1,2],[3,4]]
console.log("neg([[1,2],[3,4]]) =>" + neg(a))
function neg(a)
{
    {
        ans = []
        for(i = 0;i < a.length;i += 1)
        {
            ans_2 =[]
            for(j = 0;j < a[0].length;j += 1)
            {
                ans_2.push(a[i][j]*-1)
            }
            ans.push(ans_2)
        }
        return ans
    }
}