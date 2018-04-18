a = 5
b = 10
console.log("filter357(5,10) = "+filter357(a,b))
b = 15
console.log("filter357(5,10) = "+filter357(a,b))
function filter357(a,b)
{
    arr = []
    for(i = a; i <= b; i += 1)
    {
        if(i % 3 != 0 && i % 5 != 0 && i % 7 != 0)arr.push(i)
    }
    return arr
}