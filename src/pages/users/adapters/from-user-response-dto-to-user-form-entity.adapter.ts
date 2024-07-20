import { UserResponseDto } from "../../../dtos/user-response.dto";
import { UserFormEntity } from "../update/entities/user-form.entity";

export const fromUserResponseDtoToUserFormEntityAdapter = (
  user: UserResponseDto
): UserFormEntity => {
  return {
    name: user.name,
    lastname: user.lastName,
    email: user.email,
    username: user.username,
  };
};
