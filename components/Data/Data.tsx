import {
  Fragment,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/router";
import { CircularProgress, Grid, Tab, Tabs, useTheme } from "@mui/material";
import { cloneDeep } from "lodash";
import Icon from "@mdi/react";

import {
  type ModuleData,
  type Modules,
  Module,
  moduleMap,
  modules,
} from "types/models";
import { type WebSocketResponse } from "types/websocket";
import { WebSocketConnection } from "components/Common/WebSocket";
import DataItems from "components/Data/DataItems";

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

function DataComponent(): ReactElement {
  const [data, setData] = useState<ModuleData>({});
  const [setup, setSetup] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(0);

  const query = useRouter().query;

  const handleChangeTab = (
    _event: React.ChangeEvent<any>,
    newValue: number
  ) => {
    setTab(newValue);
  };

  const eventHandler = useCallback((event: WebSocketResponse) => {
    console.log("Event:", event);
    if (event.type === "DATA_UPDATE") {
      console.log("Data update:", event.module, event.data);
      setData((oldData: ModuleData) => {
        const newData = cloneDeep(oldData);
        if (Array.isArray(event.data)) {
          // Handle the case where event.data is an array
        } else if (typeof event.data === "object") {
          // Handle the case where event.data is an object
          newData[event.module as Module] = event.data as Modules;
        }
        return newData;
      });
    }
  }, []);

  const handleSetup = useCallback(
    (port: number, token: string) => {
      console.log("Setup WebSocketConnection");
      const ws = new WebSocketConnection(port, token, async () => {
        ws.getData(modules);
        ws.registerDataListener(modules);
      });
      ws.onEvent = (e: Event) => eventHandler(e as WebSocketResponse);
    },
    [eventHandler]
  );

  useEffect(() => {
    if (!setup && query && query.token) {
      setSetup(true);
      handleSetup(Number(query.apiPort) || 9174, String(query.token));
    }
  }, [setup, handleSetup, query]);

  const theme = useTheme();

  return (
    <>
      <Tabs
        value={tab}
        onChange={handleChangeTab}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
        sx={{ padding: theme.spacing(2) }}
      >
        {modules.map((module: string, index: number) => (
          <Tab
            key={index}
            label={moduleMap[module].name}
            icon={<Icon path={moduleMap[module].icon} size={1} />}
            {...a11yProps(index)}
            sx={{ minWidth: "auto" }}
          />
        ))}
      </Tabs>
      <Grid
        container
        direction="column"
        spacing={2}
        alignItems="stretch"
        sx={{ padding: theme.spacing(2) }}
      >
        <Grid item xs>
          {modules.map((module: string, index: number) => (
            <Fragment key={index}>
              {tab === index ? (
                <>
                  {data[module as Module] ? (
                    <DataItems
                      title={moduleMap[module].name}
                      data={data[module as Module] as Modules}
                    />
                  ) : (
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      sx={{ margin: theme.spacing(8, 0, 14) }}
                    >
                      <CircularProgress />
                    </Grid>
                  )}
                </>
              ) : (
                ""
              )}
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default DataComponent;
