import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare module 'express-serve-static-core' {
  interface Request {
    user?: any; 
  }
}

class AuthMiddleware {
    public authenticate(req: Request, res: Response, next: NextFunction): void {
        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({ error: "No token provided or invalid format" });
            return; 
        }

        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
            if (err) {
                res.status(401).json({ error: "Invalid token" });
                return; 
            }

            req.user = decoded;
            next(); 
        });
    }
}

export default new AuthMiddleware();
