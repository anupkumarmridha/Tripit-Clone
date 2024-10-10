import { Request, Response, NextFunction } from 'express';

class ErrorHandler {
  public handleError(err: any, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default new ErrorHandler();
