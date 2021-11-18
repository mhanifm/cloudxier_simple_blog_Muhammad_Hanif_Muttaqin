const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes')
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(router)

app.listen(PORT, () => {
    console.log(`server listening at port ${PORT}`)
})