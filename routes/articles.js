// this file manage the state of the articles
const express = require('express')

const router = express.Router()


router.get('/new', (req, res) => {
    res.render('articles/new')
})

router.post("/", (req, res) => {

})




module.exports = router