//
// function* generateSalaryWithBonus(halfSalary) {
//     const salary = halfSalary * 2
//     const someAnotherBonus = yield salary + (salary / 100) * 10 // yield может принимать извне значения и отдавать их наружу
//     yield salary + (salary/100) * 10
//     yield salary + (salary/100) * 15
//     yield salary + (salary/100) * 20
//     yield salary + (salary/100) * 25
//     yield salary + (salary/100) * 30
//     // return salary + (salary/100) * 30
// }
//
// const generator = generateSalaryWithBonus(1000)
//
// console.log(generator.next())
// console.log(generator.next(200))
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next()) // done: false - return делает флаг true
// console.log(generator.next()) // done: true

// eventloop

// console.log('start')
//
// setTimeout(function () {
//     console.log('timeout 1')
// }, 0)
//
// setTimeout(function (){
//     console.log('timeout 2')
// }, 0)
//
// setTimeout(function (){
//     console.log('timeout 3')
// }, 0)
//
// console.log('end')
