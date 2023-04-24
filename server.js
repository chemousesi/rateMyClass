const express = require("express")
const mongoose = require("mongoose")
const Article = require('./models/article')
const articleRouter = require('./routes/articles')

const app = express()

mongoose.set('strictQuery', true);
// connection de la base de données
mongoose.connect('mongodb://127.0.0.1/blog', {
    useNewUrlParser: true,useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected to database')
    }
})

app.set('view engine', 'ejs')
// this line is used to get the data from the form
app.use(express.urlencoded({ extended: false }))




app.get('/', (req, res) => {

    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'test description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'test description'
    }]


    res.render('articles/index', { articles: articles });
})
app.use('/articles', articleRouter)

app.listen(5000)
