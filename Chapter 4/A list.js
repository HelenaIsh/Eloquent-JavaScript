function arrayToList(arr) {
	for (var i = arr.length - 1; i >= 0; --i) {
		var nextRest = list || null;
		var list = {};

		list["value"] = arr[i];
		list["rest"] = nextRest;
	}

	return list;
}
console.log(arrayToList([1,2,3,4]));

function listToArr(list){
	let arr=[];
	do {
		arr.push(list.value);
		list=list.rest;
	}
	while (list);
	return arr;
}
console.log(listToArr(arrayToList([1,2,3,4])));

function prepend(el, list){
	return {value: el, rest: list};
}
console.log(prepend(0,arrayToList([1,2,3,4])));

function nth(list, n) {
	if (!list.rest && n != 0) return undefined;
	return ( n != 0) ? nth(list.rest, n--) : list.value;
}
console.log(nth(arrayToList([56,2,3,4]),0));
