const express = require('express')

const app = express()

app.set("view engine", "ejs")

app.get('/', (req,res)=> { 
    res.render('index', {text: 'Hello'})
})

const useRouter = require('./routes/time')

app.use(useRouter)

app.listen(3000)