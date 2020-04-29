import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import userssRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', userssRouter);

export default routes;
