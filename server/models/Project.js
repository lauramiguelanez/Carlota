const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  date: Date,
  location: String,
  category: {
    type: String,
    enum : ['RESEARCH', 'CURATING', 'TRASLATION'],
    default : 'RESEARCH'
  },
  coverImage: String,
  images: [],
  tagsTopic: [],
  tagsFormat: [],
  description: String,
  externalLink: String,
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

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
