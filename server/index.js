const envConfig = require('dotenv').config()
if(envConfig.error) throw envConfig.error

const server = require('./server')
const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Love you', PORT)
})