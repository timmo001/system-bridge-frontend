import { ReactElement, useMemo } from "react";
import { CardContent, CircularProgress, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { type GridInitialStateCommunity } from "@mui/x-data-grid/models/gridStateCommunity";
import { type Modules } from "types/models";

const defaultColumns: GridColDef[] = [
  { field: "key", headerName: "Name", width: 240 },
  { field: "value", headerName: "Value", width: 480 },
];

const defaultInitialState: GridInitialStateCommunity = {
  sorting: {
    sortModel: [
      {
        field: "key",
        sort: "asc",
      },
    ],
  },
  pagination: {
    paginationModel: {
      pageSize: 40,
    },
  },
};

export default function DataItemsComponent({
  title,
  data,
}: {
  title: string;
  data?: Modules;
}): ReactElement {
  const rootData = useMemo(() => {
    if (!data) return [];
    const dataGridData = [];
    for (const [key, value] of Object.entries(data)) {
      if (Array.isArray(value) || typeof value === "object") continue;
      dataGridData.push({ id: key, key, value });
    }
    return dataGridData;
  }, [data]);

  return (
    <>
      <Typography gutterBottom variant="h4" component="h3">
        {title}
      </Typography>
      {data ? (
        <DataGrid
          columns={defaultColumns}
          initialState={defaultInitialState}
          pageSizeOptions={[10, 20, 40, 50, 100, 200]}
          rows={rootData}
        />
      ) : (
        <Grid container direction="row" justifyContent="center">
          <CircularProgress />
        </Grid>
      )}
    </>
  );
}
