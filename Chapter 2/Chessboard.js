function Chessboard(n){
	let s="";
	let count=0;
	for (var j = 0; j < n; j++) {
		for (let i=0; i<n; i++){
			if ((i+count)%2===0)	s+="#";
			else s+=" ";
		}
		s+="\n";
		count++;
	}
	console.log(s);
}
Chessboard(8);