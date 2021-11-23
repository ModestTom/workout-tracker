const router = require('express').Router();
const { Workout } = require('../models/');

router.get('/workouts', (req, res) => {
    Workout.find({})
    .then((data) => {
        res.json(data);
    })
    .catch(error => {
        res.status(404).json(error);
    });
})

router.post('/workouts', ({ body }, res) => {
    Workout.create(body)
    .then((data) => {
        res.json(data);
    })
    .catch(error => {
        res.json(error);
    });
});

router.put('/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.exercises,
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