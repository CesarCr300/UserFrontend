import { AxiosResponse } from "axios";
import { UseFormReset } from "react-hook-form";

import { AxiosCall } from "../../../../entities";
import {
  createPopUpQuestion,
  createPopUpSimple,
} from "../../../../utils/pop-up.util";

import { UserResponseDto } from "../../../../dtos/user-response.dto";
import { UserUpdateDto } from "../../../../dtos/user-update.dto";
import { usersService } from "../../../../services/users.service";
import { fromUserFormEntityToUserUpdateDtoAdapter } from "../../adapters/from-user-form-entity-to-user-update-dto.adapter";
import { fromUserResponseDtoToUserFormEntityAdapter } from "../../adapters/from-user-response-dto-to-user-form-entity.adapter";
import { UserFormEntity } from "../entities/user-form.entity";
import { UserFormPasswordEntity } from "../entities/user-form-password.entity";
import { UserUpdatePasswordDto } from "../../../../dtos/user-update-password.dto";
import { fromUserFormPasswordEntityToUserUpdatePasswordDtoAdapter } from "../../adapters/from-user-form-password-entity-to-user-update-password-dto.adapter";

export const fillUserForm = async (
  id: number,
  reset: UseFormReset<UserFormEntity>,
  callEndpoint: (
    axiosCall: AxiosCall<UserResponseDto>
  ) => Promise<AxiosResponse<UserResponseDto, any>>
) => {
  const service = usersService.getById(id);
  const response = await callEndpoint(service);
  reset(fromUserResponseDtoToUserFormEntityAdapter(response.data));
};

export const updateUser = async (
  id: number,
  data: UserFormEntity,
  callEndpoint: (
    axiosCall: AxiosCall<UserUpdateDto>
  ) => Promise<AxiosResponse<any, any>>
) => {
  const service = usersService.update(
    id,
    fromUserFormEntityToUserUpdateDtoAdapter(data)
  );
  await callEndpoint(service);
  createPopUpSimple("El usuario actualizado");
};

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
