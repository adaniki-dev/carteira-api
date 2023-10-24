import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Token de acesso ausente' });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err) => {
    if (err) {
      return res.status(403).json({ message: 'Token de acesso inválido' });
    }
    
    next();
  });
}

export default authenticateToken;
