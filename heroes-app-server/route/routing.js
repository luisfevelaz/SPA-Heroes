
const heroes = require("../controller/heroes.controller.js");

var router = require("express").Router();

    // GET Methods

    // GET all
router.get("/heroes", heroes.findAll);

    // GET by id
router.get("/heroe/:id", heroes.findOne);

    // GET by term
router.get("/heroesTerm", heroes.findSome);

    // GET active
router.get("/heroesAct", heroes.findActive);

// POST heroes
router.post("/heroe", heroes.create);

// DELETE heroe
router.delete("/heroe/:id",heroes.delete);

// PUT heroe 
router.put("/heroe/:id", heroes.update);

module.exports = router;