const mongoose = require("mongoose");

const AlumniSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "alumni",
    },
    startYear: {
      type: Number,
      required: true,
    },
    endYear: {
      type: Number,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    rollNumber: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    education: [
      {
        startYear: String,
        endYear: String,
        course: String,
        school: String,
      },
    ],
    workExperiences: [
      {
        startYear: String,
        endYear: String,
        company: String,
        workTitle: String,
        industry: String,
      },
    ],
    mobileNumber: Number,
    socialProfiles: {
      facebook: {
        type: String,
        default: "https://www.facebook.com/",
      },
      linkedin: {
        type: String,
        default: "https://www.linkedin.com/",
      },
    },
    imageUrl: String,
    skills: [String],
  },
  {
    timestamps: true,
  }
);

const Alumni = mongoose.model("Alumni", AlumniSchema);
module.exports = Alumni;
