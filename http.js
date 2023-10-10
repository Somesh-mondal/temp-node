const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
    else if(req.url ==='/about'){
        res.end('This is the about section u can get iformation about us here')
    }
    else{
    res.end(`<h1>Oops!</h1>
    <p>We don't seem to find the page u are looking for</p>
    <a href='/'>Home Page</a>`)
    }
})
server.listen(5000)