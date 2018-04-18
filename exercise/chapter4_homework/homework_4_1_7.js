n = 3
a = 10
b = 20
console.log("random(3, 10, 20)="+random(n,a,b))
function random(n,a,b)
{
    arr = []
    for(i = 0;i < n;i += 1)
    {
        j = 100 * Math.random()
        j %= b
        if(j < a)j += a
        arr.push(j)
    }
    return arr
}