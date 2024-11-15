class Singleton {
	static instance = null

	static getInstance() {
		if (!this.instance) {
			this.instance = new Singleton()
		}
		return this.instance
	}

	message() {
		return 'Hello Singleton!'
	}
}

export default Singleton