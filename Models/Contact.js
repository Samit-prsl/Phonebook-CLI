const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    email : {
        type : String
    }
})

module.exports = mongoose.model('Contacts',ContactSchema);