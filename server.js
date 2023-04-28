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

let db = new sqlite3.Database('./articles.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the articles database.');
});

const articles = []

db.serialize(() => {
  db.each(`SELECT user_id as user_id,
                  ref as ref, 
                  title as title,
                  description as description,
                  content as content
           FROM article`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    //let article = Article(row.id, )

    console.log("id  : " + row.user_id
      + "\t course ref : " + row.ref
      + "\t title : " + row.title
      + "\t description : " + row.description
      + "\n content: " + row.content
      + "\n-----------------------------------------\n");
  });

});

// test courses 
db.serialize(() => {
  db.each(`SELECT id as id,
                  ref as ref, 
                  name as name
           FROM course`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    //let article = Article(row.id, )

    console.log("id  : " + row.id
      + "\t course ref : " + row.ref
      + "\t title : " + row.name
      + "\n-----------------------------------------\n");
  });

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
