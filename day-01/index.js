function myMap(array, callback) {
	const results = []
	for (const item of array) {
		results.push(callback(item))
	}

	return results
}

function myFilter(array, callback) {
	const results = []
	for (const item of array) {
		if (callback(item)) {
			results.push(item)
		}

		return results
	}
}

function myReduce(array, callback, initialValue) {
	let accumulator = initialValue
	for (const item of array) {
		accumulator = callback(accumulator, item)
	}

	return accumulator;
}

export { myMap, myFilter, myReduce }