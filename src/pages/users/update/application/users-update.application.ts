import { AxiosResponse } from "axios";
import { UseFormReset } from "react-hook-form";

import { AxiosCall } from "../../../../entities";
import {
  createPopUpQuestion,
  createPopUpSimple,
} from "../../../../utils/pop-up.util";

import { usersService } from "../../../../services/users.service";
import { fromUserFormEntityToUserUpdateDtoAdapter } from "../../adapters/from-user-form-entity-to-user-update-dto.adapter";
import { fromUserResponseDtoToUserFormEntityAdapter } from "../../adapters/from-user-response-dto-to-user-form-entity.adapter";
import { UserFormEntity } from "../entities/user-form.entity";
import { UserFormPasswordEntity } from "../entities/user-form-password.entity";
import { UserUpdatePasswordDto } from "../../../../dtos/user-update-password.dto";
import { fromUserFormPasswordEntityToUserUpdatePasswordDtoAdapter } from "../../adapters/from-user-form-password-entity-to-user-update-password-dto.adapter";
import { LoggerUtil } from "../../../../utils/logger.util";

export const updateUserPassword = async (
  id: number,
  data: UserFormPasswordEntity,
  callEndpoint: (
    axiosCall: AxiosCall<UserUpdatePasswordDto>
  ) => Promise<AxiosResponse<any, any>>,
  reset: UseFormReset<UserFormPasswordEntity>
) => {
  const confirmed = await createPopUpQuestion(
    "¿Estás seguro de cambiar la contraseña?"
  );

  if (!confirmed) return;

  const service = usersService.updatePassword(
    id,
    fromUserFormPasswordEntityToUserUpdatePasswordDtoAdapter(data)
  );
  await callEndpoint(service);

  createPopUpSimple("La contraseña ha sido cambiada");
  reset();
};

export class UserUpdateFormApplication {
  constructor(
    private userId: number,
    private reset: UseFormReset<UserFormEntity>,
    private callEndpoint: (
      axiosCall: AxiosCall<any>
    ) => Promise<AxiosResponse<any, any>>
  ) {}

  async fillUserForm() {
    try {
      const service = usersService.getById(this.userId);
      const response = await this.callEndpoint(service);
      this.reset(fromUserResponseDtoToUserFormEntityAdapter(response.data));
    } catch (error) {
      LoggerUtil.logError(error);
    }
  }

  async handleSubmit(data: UserFormEntity) {
    try {
      const service = usersService.update(
        this.userId,
        fromUserFormEntityToUserUpdateDtoAdapter(data)
      );
      await this.callEndpoint(service);
      createPopUpSimple("El usuario actualizado");
    } catch (error) {
      LoggerUtil.logError(error);
    }
  }
}
