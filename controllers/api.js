const router = require('express').Router();
const Workout = require('../models/workout.js');

router.get('/workouts', (req, res) => {
    Workout.find({})
    .then((data) => {
        res.json(data);
    });
})

router.post('/workouts', (req, res) => {
    Workout.create({})
    .then((data) => {
        res.json(data);
    })
    .catch(error => {
        res.json(error);
    });
});

router.put('/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body }},
        { new: true }
    )
    .then((data) => {
        res.json(data);
    })
    .catch(error => {
        res.json(error);
    });
});

module.exports = router;