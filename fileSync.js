const {readFileSync,writeFileSync} = require('fs')
const fs = require('fs')
const first = fs.readFileSync('./content/first.txt')
const second = readFileSync('./content/second.txt')
console.log(first)

fs.writeFileSync('./content/result.txt',
`Here is the result ${first},${second}`)

//Asynchronous Method
const {readFile,writeFile}=require('fs')
readFile(
    './content/first.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const fst = result
        readFile('./content/second.txt','utf8',(err,result=>{
            if(err){
                console.log(err)
                return
            }
            const snd = result
            writeFile('./content/result-async.text',`Here is your result for asynchronous method ${fst} and ${snd}`)
        }))
        }
        
)



writeFile('./content/result-async.txt',`Here is youe=r result : ${fst} ${snd}`)