export class ApiFeatures {
	constructor(query, reqQuery) {
		this.query = query
		this.reqQuery = reqQuery
	}

	paginate(pageSize = 5) {
		let page = +this.reqQuery?.page || 1
		if (page < 1) page = 1
		this.query = this.query.skip((page - 1) * pageSize).limit(pageSize)
		return this
	}
	search(fieldsToSearch) {
		if (!this.reqQuery.keyword) return this
		const regex = new RegExp(this.reqQuery.keyword, 'i')
		let regexQuery = fieldsToSearch.map((field) => {
			return { [field]: regex }
		})
		regexQuery = { $or: regexQuery }
		this.query.find(regexQuery)
		return this
	}
}