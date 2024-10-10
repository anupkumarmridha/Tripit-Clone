import { User } from '../models/User';
import bcrypt from 'bcryptjs';
import JwtService from '../config/jwt';

class AuthService {
  public async register(email: string, password: string, homeCity: string) {
    const userExists = await User.findOne({ email });
    if (userExists) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, homeCity });
    await user.save();

    const token = JwtService.generateToken(email);
    return { user, token };
  }

  public async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid email or password");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid email or password");

    const token = JwtService.generateToken(email); 
    return { user, token };
  }
}

export default new AuthService();
