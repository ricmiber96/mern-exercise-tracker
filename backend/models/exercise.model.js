const moongose = require('mongoose')

const Schema = moongose.Schema

const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  }, {
    timestamps: true,
  })

const Exercise = moongose.model('Exercise',exerciseSchema)
module.exports = Exercise