arr = [ 1, 4, 5, 8, 9]
console.log("find([ 1, 4, 5, 8, 9], 5) => "+find(arr,5))
function find(arr,b)
{
    ans = -1
    l = 0
    h = arr.length - 1
    while (l <= h)
    {
        m = (h + l) / 2
        if (arr[m] == b)return m;
        if (arr[m] > b)h = m - 1;
        else l = m + 1;
    }
    return ans
}