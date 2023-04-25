const express = require("express")
const mongoose = require("mongoose")
const sqlite3 = require('sqlite3').verbose() 
// verbose to produce long stack trace
const Article = require('./models/article')
const articleRouter = require('./routes/articles')

const app = express()
/*
mongoose.set('strictQuery', true);
//connection de la base de données
mongoose.connect('mongodb://127.0.0.1/blog', {
    useNewUrlParser: true, useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected to database')
    }
})*/

let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});
db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });

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
