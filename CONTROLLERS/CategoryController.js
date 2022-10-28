const db = require("../config/database");

const CategoryController = {
    createCategory(req, res) {
    let sql = `INSERT INTO categories (name) values
              ('${req.body.name}');`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("category added...");
    });
  },

  updateCategory (req, res) {
    let sql = `UPDATE category SET name = '${req.body.name}' WHERE id = ${+req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("category updated...");
    });
  },

  selectCategoryById (req, res) {
    let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
    })
    },

    
}