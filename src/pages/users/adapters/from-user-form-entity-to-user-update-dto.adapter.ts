import { UserUpdateDto } from "../../../dtos/user-update.dto";
import { UserFormEntity } from "../update/entities/user-form.entity";

export const fromUserFormEntityToUserUpdateDtoAdapter = (
  form: UserFormEntity
): UserUpdateDto => {
  return {
    name: form.name,
    lastName: form.lastname,
  };
};
