
var result = binarySearch([
  1,
  23,
  43,
  56,
  77,
  89,
  211,
  212,
  789,
  972,
  1001,
  4567,
  4599,
  83784
], 211);

console.log(result);

function binarySearch(arr,searchElement){
	var currentElement;
	var currentIndex;
	var maxIndex = arr.length -1;
	var minIndex =0;

	while (minIndex <= maxIndex) {
		currentIndex = Math.floor( (minIndex + maxIndex)/2 );
		currentElement = arr[currentIndex];

		console.log('Start Index',minIndex);
		console.log('End Index',maxIndex);
		console.log('Current Element',currentElement);

		if(currentElement < searchElement){
			// if it's less than we are looking for, look *above* this value.
			minIndex = currentIndex +1;
		}
		else if( currentElement > searchElement){
			// If it's more than we are looking for, look *below* this value.
			maxIndex = currentIndex -1;
		}
		else {
		  // We found it; return the index.
		  console.log('Current Index: ', currentIndex)
		  console.log('Current Element', arr[currentIndex])
		  console.log(" ------- ")
		  return currentIndex;
		}
	}
	return false;	
}


