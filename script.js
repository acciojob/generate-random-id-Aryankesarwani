function makeid(l) {
  // write your code here
	const chars = "ABCDEFGHIJKLMNPOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result="";
	for(let  i=0;i<l;i++){
		char rIdx = Math.floor(Math.random() * chars.length);
		result+=chars[rIdx];
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
