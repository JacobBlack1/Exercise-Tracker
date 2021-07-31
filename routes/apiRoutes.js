const router = require("express").Router();
const db = require("../models");
// show all
router.get("/models/workouts", (req, res) => {
  console.log("Displaying all workouts");
  db.Workout.find({})
    .then((results) => {
      console.log(results);
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});

// add 
router.put("/api/workouts/:id", (req, res) => {
  console.log("Add a new workout below");
  db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body }}, {new: true} )
    .then((results) => {
      console.log(results);
      res.json(results);
    })
    .catch((err) => {
      console.log(err);

      res.json(err);
    });
});

// create
router.post("/api/workouts", (req, res) => {
  console.log("design your new workout below");
  db.Workout.create(req.body)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});

//display a range different workouts
router.get("/api/workouts/range", (req, res) => {
  console.log("workout range");
  db.Workout.find({})
    .then((results) => {
      console.log(results);
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;