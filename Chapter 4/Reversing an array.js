function reverseArray(arr){
    newArr=[];
    for(let i=0; i<arr.length;i++){
        newArr[i]=arr[arr.length-1-i];
    }
    return(newArr);
}
console.log(reverseArray([1,2,3]));

function reverseArrayInPlace(arr){
    for(let i=0;i<arr.length/2;i++){
        let temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}
console.log(reverseArrayInPlace([8,7,6,5,4,3,2,1]));