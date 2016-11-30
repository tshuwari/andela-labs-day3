function range(a, b){
	arr = [];
	i = a;
	while (i <= b){
		arr.push(i);
		i += a;
	}
	return arr;
}

Array.prototype.toTwenty = function () {
		
	return range(1, 20);
},

Array.prototype.toForty = function () {
	
	return range(2, 40);
},

Array.prototype.toOneThousand = function () {
	return range(10, 1000);
},

Array.prototype.search = function(x) {
	
	var arr = this;
	var count = 0;
	var index = -1;
	var length = this.length;
	
	var text = false;

	low = 0;
	high = length - 1;
	
	while (high >low){
		mid = parseInt(low + (high - low )/ 2);
	
		if(arr[low] === x) {
			index =  low; 
			break;
		} else low += 1;
		
		if(arr[high] === x ) {
			index =  high;
			break;
		} else high -= 1;
		
		if (arr[mid] === x) {
			index = mid;
			break;
		}
		
		if (arr[mid] < x) {
		  low = mid + 1;
		}	
		
		if (arr[mid] > x) {
		  high = mid - 1;
		}
	
		count++;
	}
		return {
			count  : count,
			index  : index,
			length : length,
		};
};

var oneToTwenty = [].toTwenty();
var twoToForty = [].toForty();
var tenToOneThousand = [].toOneThousand();


