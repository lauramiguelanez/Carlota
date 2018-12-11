const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  subtitle: String,
  category: {
    type: String,
    enum : ['RESEARCH', 'CURATING', 'TRASLATION'],
    default : 'RESEARCH'
  },
  date: Date,
  context: String,
  organiser: String,
  collaboratingEntitites: String,
  description: String,
  coverImage: String,
  images: [],
  tagsTopic: [],
  tagsFormat: [],
  externalLink: [],
  authorship: {
    type: String,
    enum : ['INDIVIDUAL', 'COLLECTIVE', 'TRANSLATOR'],
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
