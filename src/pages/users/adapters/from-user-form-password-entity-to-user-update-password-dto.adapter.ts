import { UserUpdatePasswordDto } from "../../../dtos/user-update-password.dto";
import { UserFormPasswordEntity } from "../update/entities/user-form-password.entity";

export const fromUserFormPasswordEntityToUserUpdatePasswordDtoAdapter = (
  form: UserFormPasswordEntity
): UserUpdatePasswordDto => {
  return {
    password: form.originalPassword,
    newPassword: form.newPassword,
  };
};
