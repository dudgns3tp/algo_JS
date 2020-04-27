function solution(s){
    stringNum=parseInt(s);
    stringNum=stringNum.toString();
    if((stringNum.length == 4 || stringNum.length ==6) && !isNaN(s)){
        return true;
    }else{
        return false;
    }
}
console.log(solution(ss))