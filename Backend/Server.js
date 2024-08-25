const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define Job Schema
const jobSchema = new mongoose.Schema({
  jobTitle: String,
  companyName: String,
  minSalary: String,
  maxSalary: String,
  jobLocation: String,
  salaryType: String,
  experienceLevel: String,
  jobPostingDate: Date,
  skills: String,
  companyLogo: String,
  experienceType: String,
  jobDescription: String,
  jobPostedBy: String,
});

const Job = mongoose.model('Job', jobSchema);

// POST route to submit job data
app.post('/api/jobs', async (req, res) => {
  const jobData = req.body;
  try {
    const newJob = new Job(jobData);
    await newJob.save();
    res.status(201).json({ message: 'Job posted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to post job', error });
  }
});

// Default route for root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Job Portal API');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
