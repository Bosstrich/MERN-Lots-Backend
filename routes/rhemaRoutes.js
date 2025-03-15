const express = require('express');
const router = express.Router();
const { getRhemas, getRandomRhema } = require('../controllers/rhemaController');

// Get all workouts
router.get('/', getRhemas);

//Get random rhema

router.get('/random', getRandomRhema);

// router.get('/:id', getWorkout);

// router.post('/', createWorkout);

// router.delete('/:id', deleteWorkout);

// router.patch('/:id', updateWorkout); 

 module.exports = router;
