import { ReactElement } from "react";
import { CircularProgress, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";

import { type Modules } from "types/models";

const BrowserReactJsonView = dynamic(() => import("react-json-view"), {
  ssr: false,
});

export default function DataItemsComponent({
  title,
  data,
}: {
  title: string;
  data?: Modules;
}): ReactElement {
  return (
    <>
      <Typography gutterBottom variant="h4" component="h3">
        {title}
      </Typography>
      {data ? (
        <>
          <BrowserReactJsonView
            src={data}
            displayDataTypes={false}
            displayObjectSize
            enableClipboard
            iconStyle="triangle"
            name={null}
            collapseStringsAfterLength={140}
            style={{ background: "initial", maxWidth: "100%" }}
            theme="google"
          />
        </>
      ) : (
        <Grid container direction="row" justifyContent="center">
          <CircularProgress />
        </Grid>
      )}
    </>
  );
}
