function solution(answers) {
    var answer = [0,0,0];
    var num1 =[];
    var num2 = [];
    var num3 = [];
    var n2Number=0;
    var result = [];

    //init
    answers.forEach((value,index) => {
        num1[index]=index%5 +1;
        if(index%2==0){
            num2[index]= 2;
        }else{
            num2[index] = (((n2Number%5) == 1) ? ++n2Number : n2Number) %5 +1;
            n2Number++;
        }
        if(index%10>=0 && index%10 <2){
            num3[index] = 3;
        }else if(index%10>=2 && index%10 <4){
            num3[index] = 1;
        }else if(index%10>=4 && index%10 <6){
            num3[index] = 2;
        }else if(index%10>=6 && index%10 <8){
            num3[index] = 4;
        }else if(index%10>=8 && index%10 <10){
            num3[index] = 5;
        }
        if(num1[index]==value){
            answer[0]++;
        }
        if(num2[index]==value){
            answer[1]++;
        }
        if(num3[index]==value){
            answer[2]++;
        }

    });

    var max = Math.max(...answer);

    answer.forEach((value,index)=>{
        if(value==max)
            result.push(index+1);
    })
    
    console.log(result)
    return result;
}
const arr = [1,3,2,4,2];
solution(arr);

// 1 2 3 4 5 1 2 3 4 5