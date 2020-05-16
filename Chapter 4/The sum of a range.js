function range(start, end, step){ 
    step=Math.abs(step)||1;
    var result=[];
    if (end>start&&step>0) {
        for (let s=start;s<=end;s+=step){
            result.push(s);
        }
    }else{
        for(let e=end, s=start;e<=start;e+=step,s-=step){ 
            result.push(s);
        }
    } 
    return result;
}

function sum(arr){ let sum=0;
    for (let i of arr){
        sum +=i;
    }
    return sum;
}

console.log(range(4,1,-1));