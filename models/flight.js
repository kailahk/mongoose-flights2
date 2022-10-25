const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'PHL'],
    },
    arrival: {
        type: Date,
        default: function() {
            let dateCreated = new Date().getDate();
            return dateCreated++;
        }
    }
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest','United' ]
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'PHL'],
        default: 'LAX'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            let dateCreated = new Date().getDate();
            return dateCreated++;
        }
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);