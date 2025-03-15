const Rhema = require('../models/rhemaModel');


// get all workouts


const getRhemas = async (req, res) => {

    const rhemas = await Rhema.find({}).sort({createdAt: -1});

    res.status(200).json(rhemas);
}

const getRandomRhema = async(req, res) => {

    const rhemaAmount  = parseInt(req.query.size) || 1;

    try{

        const rhema = await Rhema.aggregate([{$sample: {size: rhemaAmount}}]);
        console.log("Rhema fetched:", rhema); // Log the result to see the structure
        res.status(200).json(rhema || {message: 'No Rhema Available'});
    }catch(err) {

        res.status(500).json({error: 'Error fetching random rhema'})
    }
 
}


module.exports = {
 
    getRhemas,
    getRandomRhema
 
}