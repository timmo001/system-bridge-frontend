import {
  Fragment,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import { CircularProgress, Grid, Tab, Tabs, useTheme } from "@mui/material";
import { cloneDeep } from "lodash";

import { Event } from "assets/entities/event.entity";
import { WebSocketConnection } from "components/Common/WebSocket";
import DataItems from "components/Data/DataItems";
import Icon from "@mdi/react";
import {
  mdiBattery,
  mdiChip,
  mdiCpu64Bit,
  mdiDesktopTower,
  mdiExpansionCard,
  mdiHarddisk,
  mdiMemory,
  mdiMonitor,
  mdiNetworkOutline,
  mdiVideoVintage,
  mdiWindowMaximize,
} from "@mdi/js";

const modules = [
  "battery",
  "cpu",
  "disks",
  "displays",
  "gpus",
  "media",
  "memory",
  "networks",
  "processes",
  "sensors",
  "system",
];

const moduleMap: { [key: string]: { name: string; icon: string } } = {
  battery: { name: "Battery", icon: mdiBattery },
  cpu: { name: "CPU", icon: mdiCpu64Bit },
  disks: { name: "Disks", icon: mdiHarddisk },
  displays: { name: "Displays", icon: mdiMonitor },
  gpus: { name: "GPUs", icon: mdiExpansionCard },
  media: { name: "Media", icon: mdiVideoVintage },
  memory: { name: "Memory", icon: mdiMemory },
  networks: { name: "Networks", icon: mdiNetworkOutline },
  processes: { name: "Processes", icon: mdiWindowMaximize },
  sensors: { name: "Sensors", icon: mdiChip },
  system: { name: "System", icon: mdiDesktopTower },
};

interface DataMap {
  [key: string]: { [key: string]: any };
}

const initialDataMap: DataMap = {
  battery: {},
  cpu: {},
  disks: {},
  displays: {},
  gpus: {},
  media: {},
  memory: {},
  networks: {},
  processes: {},
  sensors: {},
  system: {},
};

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

function DataComponent(): ReactElement {
  const [data, setData] = useState<DataMap>(initialDataMap);
  const [setup, setSetup] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(0);

  const query = useRouter().query;

  const handleChangeTab = (
    _event: React.ChangeEvent<any>,
    newValue: number
  ) => {
    setTab(newValue);
  };

  const eventHandler = useCallback((event: Event) => {
    console.log("Event:", event);
    if (event.type === "DATA_UPDATE") {
      console.log("Data update:", event.module, event.data);
      setData((oldData: DataMap) => {
        const newData = cloneDeep(oldData);
        if (typeof event.module == "string") newData[event.module] = event.data;
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
      ws.onEvent = eventHandler;
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
                  {data[module] ? (
                    <DataItems
                      data={data[module]}
                      name={moduleMap[module].name}
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
