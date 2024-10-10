import jwt from 'jsonwebtoken';

class JwtService {
  public generateToken(email: string, expiresIn: string = '1d'): string {
    return jwt.sign({ email }, process.env.JWT_SECRET as string, { expiresIn });
  }

  public verifyToken(token: string): any {
    try {
      return jwt.verify(token, process.env.JWT_SECRET as string);
    } catch (error) {
      throw new Error("Invalid token");
    }
  }
}

export default new JwtService();
