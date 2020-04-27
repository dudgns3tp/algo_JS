function solution(n, lost, reserve) {
    var answer = 0;
    reserve = reserve.sort((a,b)=>b-a).map(i=>{return i-1;});
    lost = lost.sort((a,b)=>b-a).map(i=>{return i-1;});
    var student = new Array(n).fill(1);
//체육복 증발!
student=student.map((i,index)=>{
    if(index==lost[lost.length-1]){
        lost.pop()
        return i=0;
    }else{
        return i;
    }
    //체육복 나눠주기
})
student = student.map((i,index)=>{
    if(index==reserve[reserve.length-1]){
        reserve.pop();
        return ++i;
    }else
        return i;   
})

student.some((item,index)=>{
    find(student,index);
    if(n%2==1 &&  index+1 == parseInt(n/2)+1){
        return;
    }    
    find(student.reverse(),index)
    if(n%2==0 && index+1 == (n/2)){
        return;
    }
})

function find(arr ,start){
    //맨 처음시작일때
    if(start == 0 && arr[start] == 2 &&arr[start+1] == 0){
        arr[start+1] = 1;
        arr[start] = 1;
    }else if(start >=1 && arr[start]==2 && arr[start-1] == 0){
        arr[start] = 1;
        arr[start-1] = 1;
    }else if(start>=1 && arr[start]==2 && arr[start+1]==0){
        arr[start] = 1;
        arr[start+1]=1;
    }
}
    student.forEach(i=>{
        if(i>0)
            answer++;
    })
    return answer;
}
console.log(solution(5,[2,4],[3]));