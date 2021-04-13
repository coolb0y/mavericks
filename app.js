
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.render("mavericks",{newListItem: items});
})

app.post("/",function(req,res){
var item = req.body.newItem;
items.push(item);
res.redirect("/");
})

app.get("/delete",function(req,res){
  items.pop();
  res.redirect("/");
})

app.listen( process.env.port || 3000, function() {
  console.log("Server is running on port 3000");
})
