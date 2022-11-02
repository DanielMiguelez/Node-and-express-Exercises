const db = require("../config/database");

const ProductController = {
    createProduct(req, res) {
        let sql = `INSERT INTO products (name, price, category_id) values
                  ('${req.body.name}', '${req.body.price}', ${req.body.category_id});`;
        db.query(sql, (err, result) =>  {
          if (err) throw err;
          console.log(result);
          res.send("Product added...");
        });
    },

    updateProduct (req, res) {
        let sql = `UPDATE product SET name = '${req.body.name}' WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send("product updated...");
        });
      },
    
    showProduct (req,res) {
        let sql = `SELECT * FROM products`;
        db.query(sql,(err,result)=> {
        if(err) throw err;
        res.send(result)
        })
        },

    selectFromId (req, res)  {
        let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
        })
        },
    
    selectDesc (req, res) {
        let sql = `SELECT * FROM products ORDER BY price DESC`;
        db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
        })
        },

    selectProductsByName (req, res) {
        let sql = `SELECT * FROM products WHERE (name) = '${req.params.name}'`;
        db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);6
        })
        },

    deleteProductsById (req, res)  {
        let sql = ` DELETE FROM products WHERE id ='${req.params.id}'`;
        db.query(sql, (err, result) => {
        if (err) throw err;
        res.send("product deleted...");
        })
        },
}

module.exports =  ProductController

