import { UserCreateDto } from "../../../dtos/user-create.dto";
import { UserRegisterFormEntity } from "../register/entities/user-register-form.entity";

export const fromUserRegisterFormEntityToUserCreateDto = (
  form: UserRegisterFormEntity
): UserCreateDto => {
  return {
    email: form.email,
    username: form.username,
    password: form.password,
    name: form.name,
    lastName: form.lastname,
  };
};
