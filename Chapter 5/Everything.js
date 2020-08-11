function everything(arr, every){
	for (let i=0; i<arr.length; i++){
		if (!every(arr[i])) return false;
		return true;
	}
}
console.log(everything([1,2,3],(i)=> i>=1));