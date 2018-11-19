var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new employeeSchema object
var employeeSchema = new Schema({
    name: String,
    contact: [{ phone: String, email: String }],
    availability: [
        { sunday: String, time: String },
        { monday: String, time: String },
        { tuesday: String, time: String },
        { wednesday: String, time: String },
        { thursday: String, time: String },
        { friday: String, time: String },
        { saturday: String, time: String }
    ]
});

// Creates model using schema using mongoose's model method
var Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee; 
