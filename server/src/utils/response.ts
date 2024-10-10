import { Response } from 'express';

class ResponseUtil {
  public sendResponse(res: Response, status: number, message: string, data: any = null) {
    res.status(status).json({ message, data });
  }
}

export default new ResponseUtil();
