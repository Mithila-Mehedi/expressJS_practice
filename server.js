const express = require('express')
const path = require('path')
const app = express()
const mainRouter = require('./routes/index')
const PORT = process.env.PORT || 3000


// app.use(express.static('public'))

app.set('view engine', 'ejs')
console.log(app.get('view engine'));
console.log(app.get('views'));

app.use(mainRouter)

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
})