import { ReactElement, useMemo } from "react";
import { CardContent, CircularProgress, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

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

const defaultPageSizeOptions: number[] = [10, 20, 40, 50, 100, 200];

export default function DataItemsComponent({
  title,
  data,
}: {
  title: string;
  data?: Modules;
}): ReactElement {
  const dataRoot = useMemo<GridRowsProp>(() => {
    if (!data) return [];
    const dataGridData = [];
    for (const [key, value] of Object.entries(data)) {
      if (Array.isArray(value) || typeof value === "object") continue;
      dataGridData.push({ id: key, key, value });
    }
    return dataGridData;
  }, [data]);

  const dataArrays = useMemo<Array<Record<string, GridRowsProp>>>(() => {
    if (!data) return [];
    const dataGridData = [];
    for (const [key, value] of Object.entries(data)) {
      if (!value || !Array.isArray(value)) continue;
      const dataGridDataArray = [];
      for (const [innerKey, innerValue] of Object.entries(value)) {
        if (Array.isArray(innerValue) || typeof innerValue === "object")
          continue;
        dataGridDataArray.push({
          id: innerKey,
          key: innerKey,
          value: innerValue,
        });
      }
      dataGridData.push({ [key]: dataGridDataArray });
    }
    return dataGridData;
  }, [data]);

  return (
    <>
      <Typography gutterBottom variant="h4" component="h3">
        {title}
      </Typography>
      {data ? (
        <>
          {dataRoot.length > 0 && (
            <DataGrid
              autoHeight
              columns={defaultColumns}
              initialState={defaultInitialState}
              pageSizeOptions={defaultPageSizeOptions}
              rows={dataRoot}
            />
          )}
          {dataArrays.map((dataArray) => {
            const key = Object.keys(dataArray)[0];
            const value = dataArray[key];
            return (
              <>
                <Typography gutterBottom variant="h5" component="h4">
                  {key}
                </Typography>
                <DataGrid
                  autoHeight
                  columns={defaultColumns}
                  initialState={defaultInitialState}
                  pageSizeOptions={defaultPageSizeOptions}
                  rows={value}
                />
              </>
            );
          })}
        </>
      ) : (
        <Grid container direction="row" justifyContent="center">
          <CircularProgress />
        </Grid>
      )}
    </>
  );
}
