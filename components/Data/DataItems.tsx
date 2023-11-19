import { ReactElement, useMemo } from "react";
import {
  CardContent,
  CircularProgress,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function DataItemsComponent({
  name,
  data,
}: {
  name: string;
  data: any;
}): ReactElement {
  const dataMap = useMemo<Array<[string, any]>>(
    () =>
      Object.entries(data).sort(
        ([keyA]: [string, any], [keyB]: [string, any]) =>
          keyA.localeCompare(keyB)
      ),
    [data]
  );

  const lastUpdated = dataMap.find(
    ([key, value]: [string, any]) =>
      key === "last_updated" && typeof value === "object"
  );

  return (
    <CardContent>
      <Typography gutterBottom variant="h4" component="h3">
        {name}
      </Typography>
      {data ? (
        <>
          {/* Show data as table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Key</TableCell>
                  <TableCell>Value</TableCell>
                  <TableCell>Last Updated</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataMap.map(
                  ([key, value]: [string, any], index: number) =>
                    key !== "last_updated" &&
                    typeof value !== "object" && (
                      <TableRow key={index}>
                        <TableCell>{key}</TableCell>
                        <TableCell>{String(value)}</TableCell>
                        <TableCell>
                          {new Date(
                            lastUpdated?.[1][key] * 1000
                          ).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Grid container direction="row" justifyContent="center">
          <CircularProgress />
        </Grid>
      )}
    </CardContent>
  );
}

export default DataItemsComponent;
