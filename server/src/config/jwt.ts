import jwt from 'jsonwebtoken';

class JwtService {
  public generateToken(id: string, expiresIn: string = '30d'): string {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, { expiresIn });
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
