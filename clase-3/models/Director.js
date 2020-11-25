const { Schema, model } = require('mongoose')

const DirectorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  birth_date: {
    type: Date,
    required: true,
  },
  movies: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Movies'
    }
  ]
})

const Director = model('Directors', DirectorSchema)

module.exports = Director