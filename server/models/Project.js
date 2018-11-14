const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: Title,
  date: String,
  location: String,
  category: {
    type: String,
    enum : ['RESEARCH', 'CURATING', 'TRASLATION'],
    default : 'RESEARCH'
  },
  coverImage: String,
  images: [],
  tags: [],
  description: String,
  role: {
    type: String,
    enum : ['INDIVIDUAL', 'COLABORATION'],
    default : 'INDIVIDUAL'
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Project = mongoose.model('User', projectSchema);
module.exports = Project;
