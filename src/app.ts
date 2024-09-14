import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import usersRoute from './app/modules/users/users.route';

const app: Application = express();

// Middleware setup
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes - make sure the route starts with a leading '/'
app.use('/api/v1/users', usersRoute);

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Received ${req.method} request to ${req.url}`);
  next();
});

// Root route for testing
app.get('/', async (req: Request, res: Response) => {
  res.send('working this route properly');
});

export default app;
