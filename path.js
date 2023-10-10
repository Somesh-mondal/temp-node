const path = require('path')
console.log(path.sep)

const filePath = path.join('./content','subfolder','test.txt')
console.log(filePath)
const base = path.basename(filePath)
console.log(base)//returs the base here it is test.txt

const abs = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(abs)//returns an absolute file path