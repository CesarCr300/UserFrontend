import { IBasicPage } from "./basic-page-context.entity";

export interface IBasicCrud extends IBasicPage {
  updateTable: boolean;
  toggleUpdateTable: () => void;
  id: number | undefined;
  setId: React.Dispatch<React.SetStateAction<number | undefined>>;
  removeId: () => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
