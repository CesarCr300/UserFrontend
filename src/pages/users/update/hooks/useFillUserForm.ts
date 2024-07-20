import { useEffect } from "react";
import { UseFormReset } from "react-hook-form";

import { useUserSelector } from "../../../../redux/user.hooks";
import { LoggerUtil } from "../../../../utils/logger.util";
import { LoginResponseEntity } from "../../../../entities";

import { UserFormEntity } from "../entities/user-form.entity";
import { fillUserForm } from "../application/users-update.application";

interface UseFillUserFormProps {
  reset: UseFormReset<UserFormEntity>;
  callEndpoint: any;
}

export const useFillUserForm = ({
  reset,
  callEndpoint,
}: UseFillUserFormProps) => {
  const user = useUserSelector(
    (state) => state.user.user
  ) as LoginResponseEntity;
  useEffect(() => {
    try {
      fillUserForm(user.id, reset, callEndpoint);
    } catch (error) {
      LoggerUtil.logError(error);
    }
  }, []);
};
