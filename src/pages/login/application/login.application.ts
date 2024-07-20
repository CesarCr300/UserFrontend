import { Action, ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";

import { LoginResponseEntity } from "../../../entities/user.entity";
import { loginService } from "../services/login.service";
import { createLoginAdapter } from "../adapters/create-login.adapter";
import { AxiosCall } from "../../../entities/axios-call.entity";
import { AxiosResponse } from "axios";
import { createLoginResponseDtoToEntityAdapter } from "../adapters/create-login-response-to-user.adapter";
import { defaultAuthenticatedUserRoute } from "../../../variables/routes.variables";
import { LoginResponseDto } from "../dtos/login-response.dto";
import { LoggerUtil } from "../../../utils/logger.util";

export const login = async (
  email: string,
  password: string,
  dispatch: Dispatch<Action>,
  loginReducer: ActionCreatorWithPayload<LoginResponseEntity>,
  navigate: NavigateFunction,
  callEndpoint: (
    axiosCall: AxiosCall<LoginResponseDto>
  ) => Promise<AxiosResponse<any, any>>
) => {
  const response = await callEndpoint(
    loginService(createLoginAdapter(email, password))
  );
  dispatch(loginReducer(createLoginResponseDtoToEntityAdapter(response.data)));
  navigate(defaultAuthenticatedUserRoute);
};

export class LoginApplication {
  constructor(
    private dispatch: Dispatch<Action>,
    private loginReducer: ActionCreatorWithPayload<LoginResponseEntity>,
    private navigate: NavigateFunction,
    private callEndpoint: (
      axiosCall: AxiosCall<LoginResponseDto>
    ) => Promise<AxiosResponse<any, any>>
  ) {}

  async login(email: string, password: string) {
    try {
      const response = await this.callEndpoint(
        loginService(createLoginAdapter(email, password))
      );
      this.dispatch(
        this.loginReducer(createLoginResponseDtoToEntityAdapter(response.data))
      );
      this.navigate(defaultAuthenticatedUserRoute);
    } catch (error) {
      LoggerUtil.logError(error);
    }
  }
}
