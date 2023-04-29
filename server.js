const express = require("express")
const sqlite3 = require('sqlite3').verbose()
// verbose to produce long stack trace
const Article = require('./models/Article')
const Course = require('./models/Course')

const articleRouter = require('./routes/articles')
const courseRouter = require('./routes/courses')


const app = express()



Course.all(function (courses) {
  console.log("All courses in the database :\n")
  console.log(courses)
});


app.set('view engine', 'ejs')
// this line is used to get the data from the form
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {

  Article.all(function (articles) {
    res.render('articles/index', { articles: articles });
  })

})

app.get('/courses', (req, res) => {
  console.log("entered answering fir courses")
  Course.all(function (courses) {
    res.render('courses/courses', { courses: courses })
  })
})


app.use('/articles', articleRouter)
app.use('/courses/courses', courseRouter)

app.listen(5000)

