const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "testdb",
});

connection.connect((err) => {
  if (err) {
    console.log("Connection failed");
    console.log(err);
    return;
  }

  console.log("MySQL Connected Successfully");
});

module.exports = connection;