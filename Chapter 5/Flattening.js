function flattening(arr){
	return arr.reduce((arr1, arr2) => arr1.concat(arr2));
}
console.log(flattening([[1,2,3],[4,5],[6],[7,8,9]]));
