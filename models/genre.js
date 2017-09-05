var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = Schema({
    name: {type: String, required: true, min: 3, max: 100}
            minlength: [3, 'At least 3 characters for a genre.'],
            maxlength: [100, 'Max length for genre is 100 characters.']
});

// Virtual for this genre instance URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/'+this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);
