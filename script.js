function mincost(arr)
{ 
//write your code here
// return the min cost
	let sorted = arr.slice().sort(a , b => a-b);
	let totalcost = 0 ;
	while(sorted.length > 1){
		let rope1 = sorted.shift();
		let rope2 = sorted.shift();
		let combine = rope1 + rope2 ;
		totalcost += combine ;
		sorted.push(totalcost) ;
		sorted.sort(a , b => a-b);
	}
	return totalcost ;
  
}

module.exports=mincost;
