arr = [1,2,3,4,5]
console.log("sd([1,2,3,4,5]) = sqrt((2^2+1^2+0^2+1^2+2^2)/5) = sqrt(2)="+sd(arr))
function sd(arr)
{
    sum = 0;
    for(i = 0;i < arr.length; i += 1)
    {
        sum += arr[i];
    }
    m = sum/arr.length
    a = 0
    for(i = 0;i < arr.length; i += 1)
    {
        a += (arr[i]-m)*(arr[i]-m)
    }
    return Math.sqrt(a/arr.length)
}
