import { SelectOptions } from "../entities/select-options.entity";

export const createNormalEntityToSelectOption = (
  entityName: any
): SelectOptions => {
  return {
    label: entityName.name,
    value: entityName.id,
  };
};

export const createNormalEntitesToSelectOptions = (
  entities: any[],
  addEmptyOption = false
): SelectOptions[] => {
  const response = entities.map((entity) =>
    createNormalEntityToSelectOption(entity)
  );
  if (addEmptyOption) {
    response.unshift({ label: "", value: "0" });
  }
  return response;
};
