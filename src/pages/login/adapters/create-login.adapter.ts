import { LoginRequestDto } from "../dtos/login-request.dto";

export const createLoginAdapter = (
  email: string,
  password: string
): LoginRequestDto => {
  return { email, password };
};
