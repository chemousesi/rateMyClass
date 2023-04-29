const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database('./articles.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the articles database.');
});

class Article {
    constructor(user_id, ref, date, title, description, content) {
        this.user_id = user_id;
        this.ref = ref;
        this.date = date;
        this.title = title;
        this.description = description;
        this.content = content;
    }

    static all(callback) {

        const sql = 'SELECT * FROM article';

        db.all(sql, (err, rows) => {
            if (err) {
                throw err;
            }
            const articles = rows.map(row => new Article(
                row.user_id,
                row.ref,
                row.date,
                row.title,
                row.description,
                row.content
            ));
            callback(articles);
        });


    }

    static findByRef(ref, callback) {
        const db = new sqlite3.Database('../articles.db');
        const sql = 'SELECT * FROM article WHERE ref = ?';
        db.get(sql, [ref], (err, row) => {
            if (err) {
                throw err;
            }
            if (row) {
                const article = new Article(
                    row.user_id,
                    row.ref,
                    row.date,
                    row.title,
                    row.description,
                    row.content
                );
                callback(article);
            } else {
                callback(null);
            }
        });


    }

    save() {
        const db = new sqlite3.Database('../articles.db');
        const sql = 'INSERT INTO article(user_id, ref, date, title, description, content) VALUES(?, ?, ?, ?, ?, ?)';
        db.run(sql, [this.user_id, this.ref, this.date, this.title, this.description, this.content], err => {
            if (err) {
                throw err;
            }
        });


    }

    update() {
        const db = new sqlite3.Database('../articles.db');
        const sql = 'UPDATE article SET user_id = ?, date = ?, title = ?, description = ?, content = ? WHERE ref = ?';
        db.run(sql, [this.user_id, this.date, this.title, this.description, this.content, this.ref], err => {
            if (err) {
                throw err;
            }
        });


    }

    delete() {
        const db = new sqlite3.Database('../articles.db');
        const sql = 'DELETE FROM article WHERE ref = ?';
        db.run(sql, [this.ref], err => {
            if (err) {
                throw err;
            }
        });


    }
}

module.exports = Article;
