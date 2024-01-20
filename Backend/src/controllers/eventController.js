const { Event } = require("../models/eventModel");

const createEventController = async (req, res) => {
  try {
    const { title, date, location, description } = req.body;
    const createdBy = req.user._id; // Assuming you have authentication middleware that sets user in req

    const event = await Event.create({
      title,
      date,
      location,
      description,
      createdBy,
    });

    res.status(201).json({
      status: "success",
      data: {
        event,
      },
    });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

const getAllEventsController = async (req, res) => {
  try {
    const events = await Event.find().populate(
      "createdBy",
      "firstName lastName"
    ); // Populate createdBy with user details

    res.status(200).json({
      status: "success",
      data: {
        events,
      },
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

module.exports = { createEventController, getAllEventsController };
