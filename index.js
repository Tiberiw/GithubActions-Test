const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<div><h1>Hello World!</h1><p>If i update code here, after the pipeline runs, the server will be updated. Cool. </p></div>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})