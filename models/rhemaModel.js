const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rhemaSchema = new Schema({

    rhema: {

        type: String,
        required: true
    },
    createdAt: {

        type: Date,
        default: Date.now
    }
}, {timestamps: true});

module.exports = mongoose.model('Standard', rhemaSchema);

