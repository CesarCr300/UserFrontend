import { AxiosResponse } from "axios";
import { UseFormReset } from "react-hook-form";

import { AxiosCall } from "../../../../entities";
import { createPopUpSimple } from "../../../../utils/pop-up.util";

import { UserResponseDto } from "../../../../dtos/user-response.dto";
import { UserUpdateDto } from "../../../../dtos/user-update.dto";
import { usersService } from "../../../../services/users.service";
import { fromUserFormEntityToUserUpdateDtoAdapter } from "../../adapters/from-user-form-entity-to-user-update-dto.adapter";
import { fromUserResponseDtoToUserFormEntityAdapter } from "../../adapters/from-user-response-dto-to-user-form-entity.adapter";
import { UserFormEntity } from "../entities/user-form.entity";

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
