arr = [1,2,3,4,5]
console.log("mean([1,2,3,4,5]) => "+mean(arr))
function mean(arr)
{
    sum = 0;
    for(i = 0;i < arr.length;i += 1)
    {
        sum += arr[i]
    }
    return sum/arr.length
}