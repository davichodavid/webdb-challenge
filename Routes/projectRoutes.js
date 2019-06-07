const router = require("express").Router();
const knex = require("knex");
const knexConfig = require("../knexfile");

const database = knex(knexConfig.development);

router.get("/:id/actions", (req, res) => {
  database("projects")
    .where({ ...req.body, id: req.params.id })
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: "That cohort not there brah" });
      }
    })
    .catch(err => res.status(500).json(err));
});

router.post("/", (req, res) => {
  database("projects")
    .insert(req.body, "id")
    .then(ids => res.status(201).json(ids))
    .catch(err => {
      res.status(500).json({ success: false, err });
    });
});

module.exports = router;
