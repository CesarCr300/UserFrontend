import { UserCreateDto } from "../dtos/user-create.dto";
import { UserResponseDto } from "../dtos/user-response.dto";
import { UserUpdatePasswordDto } from "../dtos/user-update-password.dto";
import { UserUpdateDto } from "../dtos/user-update.dto";
import { abortController } from "../utils/abort-controller.util";
import { BaseRestService } from "./base.service";

class UsersService extends BaseRestService<
  UserResponseDto,
  UserResponseDto,
  UserCreateDto,
  UserUpdateDto
> {
  constructor() {
    super("/api/v1/users");
  }

  updatePassword(id: number, body: UserUpdatePasswordDto) {
    const controller = abortController();
    return {
      call: this._axiosInstance.patch<UserUpdatePasswordDto>(
        this.resourceUrl + id + "/password",
        body,
        {
          signal: controller.signal,
        }
      ),
      controller,
    };
  }
}

export const usersService = new UsersService();
