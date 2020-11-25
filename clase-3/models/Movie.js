const { Schema, model } = require('mongoose')

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  release_year: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    default: 'https://picsum.photos/200/300',
  },
  directors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Directors'
    }
  ]
}, { timestamps: true })

const Movie = model('Movies', MovieSchema)

module.exports = Movie;

