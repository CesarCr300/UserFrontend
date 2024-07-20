import { AxiosCall } from "../../../entities/axios-call.entity";
import { AxiosInstanceSingletone } from "../../../services/api.service";
import { LoginRequestDto } from "../dtos/login-request.dto";
import { LoginResponseDto } from "../dtos/login-response.dto";

export const loginService = (
  request: LoginRequestDto
): AxiosCall<LoginResponseDto> => {
  const controller = new AbortController();
  const response = AxiosInstanceSingletone.getInstance().post<LoginResponseDto>(
    "auth/api/v1/login",
    request,
    {
      signal: controller.signal,
    }
  );
  return {
    call: response,
    controller,
  };
};
