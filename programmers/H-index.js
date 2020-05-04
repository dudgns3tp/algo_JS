function solution(citations) {
    var answer = 0;
    return answer;
}
var citations = [3, 0, 6, 1, 5,8,1,2];
var len = citations.length;
citations.sort();
console.log(citations)
var end = citations.length -1;
var start = 0;
var mid = len%2 == 0 ?parseInt(len/2) : parseInt(len/2)+1;
while(true){
    var higherH =[];
    var lowerH =[];
    citations.forEach(value=>{
        if(mid <= value){
            higherH.push(value);
        }else if(mid>=value){
            lowerH.push(value);
        }
    })
    if(mid <=higherH.length && mid >=lowerH.length ){
        console.log(mid);
        break;
    }
    if(lowerH.length<mid){
        start = mid+1;
        mid = (start + end)%2 == 0 ? (start+end/2) :parseInt((start+end)/2)+1;
    }else{
        end = mid -1;
        mid = (start + end)%2 == 0 ? (start+end/2) :parseInt((start+end)/2)+1;
    }
}

