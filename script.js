let arr = [1, 2, 3, 4, 2];
function incrementArray(arr) {
  //your code here
	let newArr = [];
	for(let num of arr){
		newArr.push(num+1)
}
	return newArr
}

alert(incrementArray(arr));
