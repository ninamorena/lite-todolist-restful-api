'use strict';
/**
 * Using the mongoose dependency and creating a database table.
 * The TaskSchema variable builds the model of the data we expect
 * to come from our application.  Finally we export that model
 * and call it Tasks.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema)