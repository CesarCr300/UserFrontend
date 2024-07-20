import Swal, { SweetAlertIcon } from "sweetalert2";

export const createPopUpSimple = (message: string) => {
  Swal.fire(message);
};

export const createPopUpWithIcon = (
  title: string,
  text: string,
  icon: SweetAlertIcon
) => {
  Swal.fire({
    title,
    text,
    icon,
  });
};

export const createPopUpWithTimer = async (
  title: string,
  text: string,
  icon: SweetAlertIcon,
  timeInMs: number
) => {
  await Swal.fire({
    title,
    text,
    icon,
    timer: timeInMs,
  });
};

export const createPopUpQuestion = async (
  title: string,
  icon: SweetAlertIcon = "warning"
) => {
  const response = await Swal.fire({
    title,
    icon,
    confirmButtonText: "Aceptar",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
  });
  return response.isConfirmed;
};
