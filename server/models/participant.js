var mongoose = require('mongoose');

module.exports = mongoose.model('Participant', {
    name : String,
    team : String
});


