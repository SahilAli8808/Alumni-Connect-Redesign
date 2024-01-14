const mongoose = require('mongoose')

const AlumniSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    collegeId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College',
        required: true
    },
    adminId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    startYear:{
        type: Number,
        required: true
    },
    endYear: {
        type: Number,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    rollNumber: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },

    verified: {
        type: Boolean,
        default: false
    },


    education: [
        {
            startYear: {
                type: String,
                trim: true
            },
            endYear: {
                type: String,
                trim: true
            },
            course: {
                type: String,
                trim: true
            },
            school: {
                type: String,
                trim: true
            }
        }
    ],

    workExperiences: [
        {
            startYear: {
                type: String
            },
            endYear: {
                type: String
            },
            company: {
                type: String,
                trim: true
            },
            workTitle: {
                type: String,
                trim: true
            },
            industry: {
                type: String,
                trim: true
            }
        }
    ],

    mobileNumber: {
        type: Number
    },

    location: {
        city: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        country: {
            type: String,
            trim: true
        },
        coordinates:{
            langitude: {
                type: Number
            },
            latitude:{
                type: Number
            }
        }
    },
    socialProfiles: {
        facebook: {
            type: String,
            default: 'https://www.facebook.com/'
        },
        linkedin: {
            type: String,
            default: 'https://www.linkedin.com/'
        }
    },
    imageUrl: {
        type: String
    },
    skills: [{
        type: String,
        trim: true
    }],
    locationPoint: {
        type: {
            type: String,
            default: 'Point',
            required: true
        },
        coordinates: {
            type: [Number],
            default: [0, 0]
        }
    }
},
{timestamps: true}

)

var Alumni = mongoose.model("Alumni", AlumniSchema)
module.exports = {Alumni}