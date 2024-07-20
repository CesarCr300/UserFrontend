import { UserCreateDto } from "../dtos/user-create.dto";
import { UserResponseDto } from "../dtos/user-response.dto";
import { UserUpdateDto } from "../dtos/user-update.dto";
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
}

export const usersService = new UsersService();
