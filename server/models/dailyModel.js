const mongoose = require('mongoose');
const dailySchema = new mongoose.Schema({
  Cardio: {
    type: Number,
    default: 0,
    required: true,
  },

  Studying: {
    type: Number,
    required: true,
  },

  Reps: {
    type: Number,
    default: 0,
  },
  Forgien: {
    type: Array,
  },
  Social: {
    type: Number,
    default: 0,
  },
  Sleeping: {
    type: Number,
    default: 0,
  },

  Pages: {
    type: Number,
    default: 0,
  },
  Book: {
    type: String,
    required: true,
  },

  Work: {
    type: Number,
    default: 0,
  },
  Prayers: {
    type: Number,
    default: 0,
  },

  Notes: {
    type: String,
  },
  Date: { type: Date, required: true, default: Date.now },
});

const Daily = mongoose.model('Daily', dailySchema);
dailySchema.pre('save', function () {
  console.log(this.wordsLearnt.length);
});
module.exports = Daily;
