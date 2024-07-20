import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { TableActions } from "./TableActions";
import { ITableSearchBar, TableSearchBar } from "./TableSearchBar";

interface ITable {
  columns: GridColDef[];
  rows: any;
  update?: (id: number, params: any) => void;
  remove?: (id: number, params: any) => void;
  updateParams?: any;
  removeParams?: any;
  watchCardRoute?: string;
  searchBar?: ITableSearchBar;
}

export const Table = ({
  columns,
  rows,
  update = undefined,
  remove = undefined,
  updateParams = {},
  removeParams = {},
  watchCardRoute = undefined,
  searchBar = undefined,
}: ITable) => {
  const [columnsState, setColumns] = useState(columns);
  //This state is used to store the original width of the columns, to be able to reset them and only mantain one column with a bigger width in mobile devices
  const [columnsWithNormalWidth, setOriginalColumns] = useState(columns);

  useEffect(() => {
    if (!update && !remove && !watchCardRoute) return;
    const isMobileSize = window.innerWidth <= 760;
    const actions: GridColDef = {
      field: "actions",
      headerName: "Acciones",
      flex: 0.75,
      minWidth: 100,
    };
    actions.renderCell = (params) => {
      return (
        <TableActions
          params={params}
          key={params.id}
          remove={remove}
          removeParams={removeParams}
          update={update}
          updateParams={updateParams}
          watchCardRoute={watchCardRoute}
        />
      );
    };
    // Add actions column to the beginning if mobile size, otherwise add it to the end
    if (isMobileSize) {
      setColumns([actions, ...columns]);
      setOriginalColumns([actions, ...columnsWithNormalWidth]);
    } else {
      setColumns([...columns, actions]);
      setOriginalColumns([...columnsWithNormalWidth, actions]);
    }
  }, []);

  return (
    <>
      {searchBar && <TableSearchBar {...searchBar} />}
      <DataGrid
        pageSizeOptions={[5, 10, 20, 50, 100]}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        columns={columnsState}
        rows={rows}
        sx={{
          overflowX: "scroll",
          "& .MuiDataGrid-columnSeparator": { display: "none" },
        }}
        disableColumnMenu={true}
        //This functionality allow to expand the width of the cell when clicked
        onCellClick={(params) => {
          const isMobileSize = window.innerWidth <= 760;
          if (!isMobileSize || params.field.includes("actions")) return;

          //To don't work over the original columns
          const columnsArray = [...columnsWithNormalWidth];

          const columnToModifyWidth = columnsArray.find((column) => {
            return column.field === params.field;
          });
          if (!columnToModifyWidth) return;

          columnToModifyWidth.minWidth = 300;
          setColumns([...columnsArray]);
        }}
      />
    </>
  );
};
