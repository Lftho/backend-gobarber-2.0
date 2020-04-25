import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

const appointementsRouter = Router();

const appointments: Appointment[] = [];

appointementsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parseDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointments.find(appointment =>
    isEqual(parseDate, appointment.date),
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = new Appointment(provider, parseDate);

  appointments.push(appointment);

  return response.json(appointment);
});

export default appointementsRouter;