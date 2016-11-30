module.exports ={
inArray: function(value,array)
{
    
    for(var i = 0; i<array.length; i++)
    {
        if(array[i] === value){
        	
            return true;
        
        }
    }
    return false;
},

findMissing: function(arr1, arr2) {
  if (arr1.length === 0 || arr2.length ===0){
    return 0;
  }
  if (arr1.length === arr2.length){
    return 0;
  }
	
	if(arr1.length > arr2.length) {
		
		for(var i = 0; i < arr1.length; i++)
		{
        
			if (this.inArray(arr1[i], arr2) === false) {
            	return arr1[i];
            }
            
		}
		
	} else {
		
		for(var j = 0; j < arr2.length; j++)
		{
			if (this.inArray(arr2[j], arr1) === false) {
            	return arr2[j];
            }
		}
	}
	
}
}

