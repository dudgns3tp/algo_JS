var arr = [1, 1, 3, 3, 2, 2, 4, 5, 1, 1, 1, 3, 3, 3];
var temp = [];
var result = [];
var cnt= 0;
var answer =0;

while(arr.length>0){
    var inValue = arr.shift();
    if(arr.length ==0){
        console.log('증가')
        console.log(result);
        arr = result;
        cnt = 0;
        temp =[];
        answer++;
    }
    if(temp.length == 0){
        cnt++;
        temp.push(inValue);
    }
    else if(temp[temp.length-1] == inValue){
        cnt++;
        temp.push(inValue);
    }
    else if(temp[temp.length-1] != inValue){
        result.push(cnt);
        temp = [];
        cnt = 0;
        temp.push(inValue);
        cnt++;
    }
    if(arr.length == 0 && temp.length == 1){
        console.log('결과'+answer)
        break;
    }

    if(arr.length ==0){
        console.log('증가')
        console.log(result);
        arr = result;
        cnt = 0;
        temp =[];
        answer++;
    }
}
