const express = require('express')
const Appointment = require('../controllers/appointment.js');

// const validateToken = require('../utils').validateToken;

const appointmentRouter = express.Router();

// appointmentRouter.route("/register").post(validateToken, Appointment.register);

appointmentRouter.route("/membersList").get(Appointment.membersList);
// appointmentRouter.route("/getCurrentTimeslot").post(Appointment.getCurrentTimeslot);
// appointmentRouter.route("/handleLeave").post(Appointment.handleLeave);
// appointmentRouter.route("/addOrUpdateTimeslot").post(Appointment.addOrUpdateTimeslot);
// appointmentRouter.route("/removeTimeSlot").post(Appointment.removeTimeSlot);
// appointmentRouter.route("/bookAppointment").post(Appointment.bookAppointment);
appointmentRouter.route("/fetchBookedAppointmentList").get(Appointment.fetchBookedAppointmentList);
// appointmentRouter.route("/getAppointedClientList").post(Appointment.getAppointedClientList);

module.exports = appointmentRouter;