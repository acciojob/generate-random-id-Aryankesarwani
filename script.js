function makeid(l) {
  // write your code here
	const char = `ABCDEFGHIJKLMNPOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
	let result="";
	for(let  i=0;i<l;i++){
		char rIdx = Math.floor(Math.random() * char.length);
		result+=char[rIdx];
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
