const names = require('./names')
const sayHi = require('./fun')
console.log(names.name3)
console.log(sayHi(names.name1))

const _=require('lodash')
const items=[1,[1,2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
