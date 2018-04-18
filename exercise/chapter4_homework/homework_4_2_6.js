a = [[1,2,3], [2,3,1], [3,1,2]]
c = [[1,2,3], [2,3,1], [3,2,1]]
console.log("isMagic([[1,2,3], [2,3,1], [3,1,2]]) = " + isMagic(a))
console.log("isMagic([[1,2,3], [2,3,1], [3,2,1]]) = " + isMagic(c))
function isMagic(a)
{
    ans = 0
    b = []
    for(i = 0;i < a.length;i += 1)
    {
        sum = 0
        for(j = 0;j < a[1].length;j += 1)
        {
            sum += a[i][j]
        }
        b.push(sum)
    }
    for(i = 0;i < a.length;i += 1)
    {
        sum = 0
        for(j = 0;j < a[1].length;j += 1)
        {
            sum += a[j][i]
        }
        b.push(sum)
    }
    for(i = 0;i < b.length; i += 1)
    {
        if(b[i] != b[i+1])ans += 1
    }
    if(ans == 1)return "true"
    else return "false"
}