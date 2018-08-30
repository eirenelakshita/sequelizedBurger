var db = require("../models");
var router = require("express").Router();

  router.get("/api/authors", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.Author.findAll({
      include: [db.Post]
      }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  router.get("/api/authors/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.Author.findOne({
      where: {
        id: req.params.id
      }, include: [db.Post]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  router.post("/api/authors", function(req, res) {
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  router.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  module.exports = router;
