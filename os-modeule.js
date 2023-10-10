const os = require('os')
console.log(os.userInfo())
//provides info about the current user
const currentOS={
    name:os.type(),
    release:os.release(),
    total_memory:os.totalmem(),
    free_memory:os.freemem(),
}
console.log(currentOS)