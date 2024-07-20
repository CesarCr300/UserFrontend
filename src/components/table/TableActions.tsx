import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useRef } from "react";

export const TableActions = ({
  params,
  update,
  remove,
  updateParams,
  removeParams,
  watchCardRoute,
}: {
  params: any;
  update?: (id: number, params: any) => void;
  remove?: (id: number, params: any) => void;
  updateParams?: any;
  removeParams?: any;
  watchCardRoute?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={ref} style={{ display: "flex", gap: "8px" }}>
      {watchCardRoute && (
        <Link
          style={{ color: "black" }}
          to={
            (watchCardRoute?.endsWith("/")
              ? watchCardRoute
              : watchCardRoute + "/") + params.id
          }
        >
          <VisibilityIcon></VisibilityIcon>
        </Link>
      )}
      {update && (
        <>
          <EditIcon onClick={() => update(params.id as number, updateParams)} />
        </>
      )}
      {remove && (
        <DeleteIcon
          onClick={() => {
            remove(params.id as number, removeParams);
          }}
        ></DeleteIcon>
      )}
    </div>
  );
};
