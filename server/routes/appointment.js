const express = require('express')
const Appointment = require('../controllers/appointment.js');

// const validateToken = require('../utils').validateToken;

const appointmentRouter = express.Router();

appointmentRouter.route("/membersList").get(Appointment.membersList);
appointmentRouter.route("/fetchRequiredList").get(Appointment.fetchRequiredList);
appointmentRouter.route("/getCurrentTimeslot").post(Appointment.getCurrentTimeslot);
appointmentRouter.route("/handleLeave").post(Appointment.handleLeave);
appointmentRouter.route("/addOrUpdateTimeslot").post(Appointment.addOrUpdateTimeslot);
appointmentRouter.route("/removeTimeSlot").post(Appointment.removeTimeSlot);
appointmentRouter.route("/bookAppointment").post(Appointment.bookAppointment);
appointmentRouter.route("/fetchBookedAppointmentList").post(Appointment.fetchBookedAppointmentList);
appointmentRouter.route("/getAppointedClientList").post(Appointment.getAppointedClientList);
appointmentRouter.route("/fetchUserByFilter").post(Appointment.fetchUserByFilter);

module.exports = appointmentRouter;