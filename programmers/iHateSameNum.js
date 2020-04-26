function solution(arr){
    var temp =[];
    //이전에 푸쉬한거랑 똑같으면  pass
    temp.push(arr[0]);
    arr.forEach(word => {
        if(temp[temp.length-1] != word){
            temp.push(word)
        }
    });
    
    return temp;
}


var solution2 = (arr) =>{
    return arr.filter((val,index) => val != arr[index+1])

}
console.log(solution2([1,1,1,0,2,3,3,3]))

