export class ApiFeatures{
    //query =find ,update 
    //reqquery=name,id,age,page
    constructor(query,reqquery)
    {
        this.query=query
        this.reqquery=reqquery
    }
    paginate(pagesize=5)
    {
        let page=+this.reqquery?.page || 1
        if(page<1) 
        page=1
        this.query=this.query.skip((page-1)*pagesize).limit(pagesize)
        return this
    }
    filter()
    {
    const filterFields={...this.reqquery}
    const theUnuseList=['page', 'sort', 'keyword', 'fields', 'dir']
    theUnuseList.forEach((item)=>{
        delete filterFields[item]
    })
    const filterFieldsString=JSON.stringify(filterFields)
    const modifiedFilterFieldsString = filterFieldsString.replace(
        /(lt|lte|gt|gte)/g,
        (match) => `$${match}`
    )
    const modifiedFilterFields=JSON.parse(modifiedFilterFieldsString)
    this.query.find(modifiedFilterFields)
    return this
    }
    sort() {
		if (!this.reqquery.sort) return this
		this.query.sort(this.reqquery.sort)
		return this
	}

	search(fieldsToSearch) {
		if (!this.reqquery.keyword) return this
		const regex = new RegExp(this.reqquery.keyword, 'i')
		let regexQuery = fieldsToSearch.map((field) => {
			return { [field]: regex }
		})
		regexQuery = { $or: regexQuery }
		this.query.find(regexQuery)
		return this
	}

	fields() {
		if (!this.reqquery.fields) return this
		this.query.select(this.reqquery.fields.split(','))
		return this
	}
}