const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./config/database.js")

app.use(express.json());
//app.use("/products",require("./routes/products"))
//app.use("/categories",require("./routes/categories"))

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE dataBaseDani";

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

app.get("/createtablecategories", (req, res) => {
    let sql =
      "CREATE TABLE categories(id int AUTO_INCREMENT,name VARCHAR(255), PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Categories table created...");
    });
  });

app.get("/createtableproducts", (req, res) => {
    let sql =
      "CREATE TABLE products(id int AUTO_INCREMENT,name VARCHAR(255), category_id INT, price INT(255), PRIMARY KEY(id), FOREIGN KEY(category_id) REFERENCES categories(id))";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Product table created...");
    });
  });
        app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
