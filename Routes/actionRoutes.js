const router = require("express").Router();
const knex = require("knex");
const knexConfig = require("../knexfile");

const database = knex(knexConfig.development);

router.post("/", (req, res) => {
  database("actions")
    .insert(req.body, "id")
    .then(ids => res.status(201).json(ids))
    .catch(err => {
      res.status(500).json({ success: false, err });
    });
});

module.exports = router;
