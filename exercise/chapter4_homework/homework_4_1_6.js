arr = [1,3,6,7,10]
console.log("minGap([1,3,6,7,10]) = " + minGap(arr))
function minGap(arr)
{
    min = arr.length
    for(i = 0;i < arr.length; i += 1)
    {
        if(arr[i + 1] - arr[i] < min)min = arr[i + 1] - arr[i]
    }
    return min
}