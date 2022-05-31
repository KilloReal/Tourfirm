const express = require("express");
const router = express.Router();

// Load Tour model
const Tour = require("../../models/Tour");

/**
 * @route GET api/tours/test
 * @description tests tours route
 * @access Public
 */
router.get("/test", (req, res) => res.send("tour route testing!"));

/**
 * @route GET api/tours
 * @description Get all tours
 * @access Public
 */
router.get("/", (req, res) => {
  Tour.find()
    .then((tours) => res.json(tours))
    .catch((err) => res.status(404).json({ notoursfound: "No Tours found" }));
});

/**
 * @route GET api/tours/:id
 * @description Get single tour by id
 * @access Public
 */
router.get("/:id", (req, res) => {
  Tour.findById(req.params.id)
    .then((tour) => res.json(tour))
    .catch((err) => res.status(404).json({ nobookfound: "No Tour found" }));
});

/**
 * @route GET api/tours
 * @description add/save tour
 * @access Public
 */
router.post("/", (req, res) => {
  Tour.create(req.body)
    .then((tour) => res.json({ msg: "Tour added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this tour" }));
});

/**
 * @route GET api/tours/:id
 * @description Update tour
 * @access Public
 */
router.put("/:id", (req, res) => {
  Tour.findByIdAndUpdate(req.params.id, req.body)
    .then((tour) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

/**
 * @route GET api/tours/:id
 * @description Delete tour by id
 * @access Public
 */
router.delete("/:id", (req, res) => {
  Tour.findByIdAndRemove(req.params.id, req.body)
    .then((tour) => res.json({ mgs: "Book entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a tour" }));
});

module.exports = router;
