// Here we are going to use Hashmap.

function firstRecurrance(input){
let map = {};
for(let i = 0; i < input.length; i++) {
	if(map[input[i]] !== undefined) {
  	return input[i];
  } else {
  	map[input[i]] = i;
  } 
}
return undefined;
}
console.log(firstRecurrance([2, 1,1, 2,2, 5])); // o/p - 1

// [2,1,2,1,5] --> o/p - 2
