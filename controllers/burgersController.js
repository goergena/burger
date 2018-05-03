var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");




router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    res.render("index", {burgs: data});
  });
});


router.post("/burgers", function (req, res) {
  burger.createOne("burger", req.body.burgerTOWN, function (result) {

    res.json({
      id: result.insertId
    });
    console.log({
      id: result.insertId
    });
  });
});


router.put("/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.updateOne("eaten = 1", condition, function (result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;