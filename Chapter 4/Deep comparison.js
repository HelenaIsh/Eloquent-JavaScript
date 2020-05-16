function deepEqual(a,b){
	if ((typeof a == "object" && typeof b == "object") && (a != null || b != null)) {
		for (var i = 0, j = 0; i < Object.keys(a).length, j < Object.keys(b).length; ++i, ++j) {
			var result = deepEqual(a[Object.keys(a)[i]], b[Object.keys(b)[j]]);
			if (result == false) break;
		}
		return result;
	} else {
		return (a === b);
	}
}
console.log(deepEqual({name:'a',value:'0,3'}, {name:'a',value:'0,3'}));