
function* generateSalaryWithBonus(halfSalary) {
    const salary = halfSalary * 2
    yield salary + (salary/100) * 10
    yield salary + (salary/100) * 15
    yield salary + (salary/100) * 20
    yield salary + (salary/100) * 25
    yield salary + (salary/100) * 30
    // return salary + (salary/100) * 30
}

const generator = generateSalaryWithBonus(1000)

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next()) // done: false - return делает флаг true
console.log(generator.next()) // done: true
