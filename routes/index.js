const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('index', {
        title: 'MY HOME Page'
    })
    // res.sendFile(path.resolve(__dirname) + '/index.html')
})

router.get('/about', (req,res) => {
    res.render('about', {
        title: 'MY ABOUT Page'
    })
        // res.sendFile(path.resolve(__dirname) + '/about.html')
    })

router.get('/download', (req,res) => {
        res.download(path.resolve(__dirname) + '/about.html')
    })








module.exports = router;