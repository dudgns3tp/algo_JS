function solution(strings, n){
    strings.sort(function(a,b){
        var first = a[n];
        var second = b[n];
        if(first == second){
            console.log(a>b)
            console.log(b>a)
            return (a>b) - (a<b);
        }else{
            return (first>second) - (first<second);
        }
    })
    console.log( strings)

}
var strings = ['a', 'b','z', 'c'];
solution(strings,0)
strings.sort(function(a,b){
    return a-b;
})