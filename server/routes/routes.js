const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const axios = require("axios");
const app = express();
const bodyParser = require("body-parser");
const PostAPI = "https://jsonplaceholder.typicode.com";
//Get post
//---------------------mysql connectin start-----------//
var con = mysql.createConnection({
  port: "3306",
  host: "localhost",
  user: "root",
  password: "1234",
  database: "employeedb"
});
app.use(bodyParser());
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.post("/login", bodyParser.json(), function (req, res) {
  console.log(req.body);
  
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
   })

router.get("/get", (req, res) => {
     con.query('SELECT * FROM employee',(err, rows, field)=>{
       if(!err){
       console.log(rows)
       res.send(rows)
       }
       else
       console.log(err);
     }) 
});

module.exports = router;
