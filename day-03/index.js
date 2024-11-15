const currentDate = new Date()
console.log(currentDate)

function formatDate(date) {
	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear()
	return `${day}-${month}-${year}`
}

export { formatDate }