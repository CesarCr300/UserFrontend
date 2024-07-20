import { AxiosResponse } from "axios";
import { UserResponseDto } from "../../../../dtos/user-response.dto";
import { AxiosCall } from "../../../../entities";
import { usersService } from "../../../../services/users.service";
import { fromUserResponseDtoToUserFormEntityAdapter } from "../../adapters/from-user-response-dto-to-user-form-entity.adapter";
import { UseFormReset } from "react-hook-form";
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
