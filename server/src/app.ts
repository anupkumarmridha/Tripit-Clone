import express from 'express';
import cors from 'cors';
import Database from './config/database';
import AuthRoutes from './routes/authRoutes';
import OnboardingRoutes from './routes/onboardingRoutes';
import ErrorHandler from './middlewares/errorHandler';
import TripRoutes from './routes/tripRoutes';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.errorHandling();
    this.database();
  }

  private middleware() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  private routes() {
    this.express.get('/', (req, res) => {
        res.status(200).json({ message: "API is running smoothly!" });
      });
    this.express.use('/api/auth', AuthRoutes);
    this.express.use('/api/onboarding', OnboardingRoutes);
    this.express.use('/api/trips', TripRoutes);
  }

  private errorHandling() {
    this.express.use(ErrorHandler.handleError);
  }

  private async database() {
    await Database.connect();
  }
}

export default new App().express;
