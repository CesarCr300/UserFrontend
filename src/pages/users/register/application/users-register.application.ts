import { AxiosResponse } from "axios";
import { NavigateFunction } from "react-router-dom";

import { routes } from "../../../../variables/routes.variables";
import { AxiosCall } from "../../../../entities";
import { LoggerUtil } from "../../../../utils/logger.util";
import { createPopUpWithTimer } from "../../../../utils/pop-up.util";

import { UserCreateDto } from "../../../../dtos/user-create.dto";
import { fromUserRegisterFormEntityToUserCreateDto } from "../../adapters/from-user-register-form-entity-to-user-create-dto.adapter";
import { usersService } from "../../../../services/users.service";
import { UserRegisterFormEntity } from "../entities/user-register-form.entity";

export class UsersRegisterApplication {
  constructor(
    private callEndpoint: (
      axiosCall: AxiosCall<UserCreateDto>
    ) => Promise<AxiosResponse<any, any>>,
    private navigate: NavigateFunction
  ) {}

  async handleSubmit(data: UserRegisterFormEntity) {
    try {
      const service = usersService.create(
        fromUserRegisterFormEntityToUserCreateDto(data)
      );
      await this.callEndpoint(service);

      await createPopUpWithTimer(
        "Éxito",
        "Su usuario fue creado con éxito",
        "success",
        2000
      );
      this.navigate(routes.login);
    } catch (error) {
      LoggerUtil.logError(error);
    }
  }
}
