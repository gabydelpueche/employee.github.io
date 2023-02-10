const show = document.getElementById('show')

document.getElementById('sub').addEventListener('click', (e) => {
    e.preventDefault()
    
    const fname = document.getElementById('first').value
    const lname = document.getElementById('last').value
    const age = document.getElementById('age').value
    const addy = document.getElementById('addy').value
    const city = document.getElementById('city').value
    const zip = document.getElementById('zip').value
    const state = document.getElementById('state').value
    const country = document.getElementById('c').value
    const title = document.getElementById('tit').value
    const dpart = document.getElementById('dPart').value
    const sal = document.getElementById('sal').value
    const years = document.getElementById('yearS').value

    const newEmp = new Details(fname, lname, age, addy, city, zip, state, country, title, dpart, sal, years)
    let array = []
    add(newEmp)
    array.push(newEmp)
    
    newEmp.createEmployee()
    newEmp.createDetails()
})

class Employee {
    constructor(fname, lname, age, addy, city, zip, state, country) {
        this.fname = fname
        this.lname = lname
        this.age = age
        this.addy = addy
        this.city = city
        this.zip = zip
        this.state = state
        this.country = country
    }
    createEmployee() {
        console.log(`${this.fname} ${this.lname} Age:${this.age}`)
        console.log(`Address:${this.addy} City:${this.city} ZipCode:${this.zip}`)
        console.log(` State:${this.state} Country:${this.country}`)
    }
}

class Details extends Employee {
    constructor(fname, lname, age, addy, city, zip, state, country, title, dpart, sal, years) {
        super(fname, lname, age, addy, city, zip, state, country)
        this.title = title
        this.dpart = dpart
        this.sal = sal
        this.years = years
    }
    createDetails() {
        console.log(`Details: ${this.title} in the ${this.dpart} Salary:${this.sal} Years of Experience:
        ${this.years}`)
    }
}

function add(emp){
    let div = document.createElement('div')
    div.innerHTML = 
    `<h2>${emp.fname} ${emp.lname}</h2>
    <h3>Age: ${emp.age}</h3>
    <h3>Address:</h3>
    <p>${emp.addy}, ${emp.zip}, ${emp.city}, ${emp.state}, ${emp.country}
    <h3>Details:</h3>
    <p>Title: ${emp.title}
    Department: ${emp.dpart}
    Salary: ${emp.sal}
    Years of Service: ${emp.years}`

    show.append(div)
}