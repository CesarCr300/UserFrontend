import { LoginResponseEntity } from "../../../entities/user.entity";
import { LoginResponseDto } from "../dtos/login-response.dto";

export const createLoginResponseDtoToEntityAdapter = (
  response: LoginResponseDto
): LoginResponseEntity => {
  return {
    token: response.access_token,
    name: response.name,
    id: response.id,
  };
};
