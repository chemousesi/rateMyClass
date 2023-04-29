// this file manage the state of the articles
const { application } = require('express')
const express = require('express')
const Course = require('../models/Course')
const router = express.Router()


router.get('/', (req, res) => {
    Course.all(function (courses) {
        res.render('courses/courses', { courses: courses });
    })

})
/*
router.get('/:id', async (req, res) => {
    const article = await Course.findById(req.params.ref)
    if (article == null) res.redirect('/')
    res.render('course/show', { article: article })
})*/


router.post("/", async (req, res) => {
    /*
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try {
        article = await article.save()
        res.redirect(`/articles/${article.id}`)
    } catch (e) {
        console.log(e)
        res.render('articles/new', { article: article })
    }
    */
    // TODO faire ici le rating des cours


})


module.exports = router