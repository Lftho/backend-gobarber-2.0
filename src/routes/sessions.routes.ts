import { Router } from 'express';

import SessionUserService from '../services/SessionUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const sessionUser = new SessionUserService();

  const { user, token } = await sessionUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
