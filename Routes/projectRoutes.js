const router = require("express").Router();
const knex = require("knex");

router.get("/:id", (req, res) => {
  database("projects")
    .where({ id: req.params.id })
    .then(cohort => {
      if (cohort) {
        res.status(200).json(cohort);
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

router.post("/", (req, res) => {
  database("actions")
    .insert(req.body, "id")
    .then(ids => res.status(201).json(ids))
    .catch(err => {
      res.status(500).json({ success: false, err });
    });
});

module.exports = router;
