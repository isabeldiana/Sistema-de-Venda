import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
    user?: string | JwtPayload;
  }
const authMiddleware = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const secret = process.env.JWT_HASH || "default-secret-key";
    const decoded = jwt.verify(token, secret);
    req.user = decoded ; 
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

export default { authMiddleware}