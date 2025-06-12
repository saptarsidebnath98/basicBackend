require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello Saptarsi!')
})

app.get('/login', (req, res) => {
  res.send('<h1>Welcome to Login Page!</h1>')
})

app.get('/github', (req, res) => {
  res.send()
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
