const DEFAULT_CASH_AMOUNT = 5000;
const DEFAULT_BANK_AMOUNT = 5000;

const mongoose = require('mongoose');
var Schema = mongoose.Schema, model = mongoose.model;

var CharacterSchema = new Schema(
    {
        ownerId: {
            type: mongoose.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        look: {
            type: Object,
            required: false,
            default: {}
        },
        lastPlayed: {
            type: Date,
            default: Date.now
        },
        cash: {
            type: Number,
            required: false,
            default: DEFAULT_CASH_AMOUNT
        },
        bank: {
            type: Number,
            required: false,
            default: DEFAULT_BANK_AMOUNT
        },
        hoursPlayed: 0
    }
);

module.exports = model( 'character', CharacterSchema );