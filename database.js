const sqlite3 = require('sqlite3');





let db = new sqlite3.Database('./articles.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the articles database.');
});


// function to create new database connection object
function getDb() {
    return new sqlite3.Database('mydatabase.db');
}


// export the function
module.exports = getDb;
