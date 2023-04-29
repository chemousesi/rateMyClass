const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./articles.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the courses database.');
});

class Course {
    constructor(id, ref, name) {
        this.id = id;
        this.ref = ref;
        this.name = name;
    }

    static all(callback) {
        const sql = 'SELECT * FROM course';

        db.all(sql, (err, rows) => {
            if (err) {
                throw err;
            }
            const courses = rows.map(row => new Course(
                row.id,
                row.ref,
                row.name
            ));
            callback(courses);
        });
    }

    static findByRef(ref, callback) {
        const sql = 'SELECT * FROM course WHERE ref = ?';
        db.get(sql, [ref], (err, row) => {
            if (err) {
                throw err;
            }
            if (row) {
                const course = new Course(
                    row.id,
                    row.ref,
                    row.name
                );
                callback(course);
            } else {
                callback(null);
            }
        });
    }

    save() {
        const sql = 'INSERT INTO course(id, ref, name) VALUES(?, ?, ?)';
        db.run(sql, [this.id, this.ref, this.name], err => {
            if (err) {
                throw err;
            }
        });
    }

    update() {
        const sql = 'UPDATE course SET id = ?, name = ? WHERE ref = ?';
        db.run(sql, [this.id, this.name, this.ref], err => {
            if (err) {
                throw err;
            }
        });
    }

    delete() {
        const sql = 'DELETE FROM course WHERE ref = ?';
        db.run(sql, [this.ref], err => {
            if (err) {
                throw err;
            }
        });
    }
}

module.exports = Course;