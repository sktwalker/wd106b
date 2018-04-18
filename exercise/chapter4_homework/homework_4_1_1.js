arr = [1,2,5,6,7]
console.log("insert([1,2,5,6,7], 3) => "+insert(arr,3))
function insert(arr, b)
{
    arr.push(b);
    for(i = 0;i < arr.length;i += 1)
    {
        if(arr[i] > arr[i + 1])
        {
            c = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = c
        }
        for(j = 0;j < arr.length;j += 1)
        {
            if(arr[j] > arr[j + 1])
            {
                d = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = d
            }
        }
    }
    return arr
}