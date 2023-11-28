import { ReactElement, useCallback, useEffect, useState } from "react";
import { CircularProgress, Grid, TextField, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import {
  mdiFolderMultipleOutline,
  mdiKeyboardOutline,
  mdiProtocol,
  mdiRocketLaunch,
  mdiTextBoxOutline,
} from "@mdi/js";

import { type Settings } from "types/settings";
import { type WebSocketResponse } from "types/websocket";
import { useSettings } from "components/Contexts/Settings";
import { WebSocketConnection } from "components/Common/WebSocket";
import Section from "components/Settings/Section";

let ws: WebSocketConnection;

export interface SettingDescription {
  name: string;
  description: string;
  icon: string;
  containerDisabled?: boolean;
  isList?: boolean;
  isPassword?: boolean;
  minimum?: number;
}

export const settingsMap: { [key: string]: SettingDescription } = {
  autostart: {
    name: "Autostart",
    description: "Automatically start the application on startup",
    icon: mdiRocketLaunch,
  },
  log_level: {
    name: "Log Level",
    description: "Log level for the application",
    icon: mdiTextBoxOutline,
  },
  port_api: {
    name: "API Port",
    description: "Port for the API and WebSocket",
    icon: mdiProtocol,
  },
  additional_media_directories: {
    name: "Additional Media Directories",
    description: "Additional media directories for the media endpoint",
    icon: mdiFolderMultipleOutline,
    isList: true,
  },
  keyboard_hotkeys: {
    name: "Keyboard Hotkeys",
    description: "Setup hotkeys for triggering actions",
    icon: mdiKeyboardOutline,
    isList: true,
  },
};

function Settings(): ReactElement {
  const [settings, setSettings] = useSettings();
  const [setup, setSetup] = useState<boolean>(false);

  const query = useRouter().query;

  const eventHandler = useCallback(
    (event: WebSocketResponse) => {
      console.log("New event:", event);
      if (event.type === "SETTINGS_RESULT") {
        setSettings(event.data as Settings);
      }
    },
    [setSettings]
  );

  const handleSetup = useCallback(
    (port: number, token: string) => {
      console.log("Setup WebSocketConnection");
      ws = new WebSocketConnection(port, token, async () => {
        ws.getSettings();
      });
      ws.onEvent = (e: Event) => eventHandler(e as WebSocketResponse);
    },
    [eventHandler]
  );

  const handleChanged = useCallback(
    (newSettings: Settings) => {
      ws.updateSettings(newSettings);
      setSettings(settings);
    },
    [settings, setSettings]
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
      <Grid
        container
        direction="column"
        spacing={2}
        alignItems="stretch"
        sx={{
          marginBottom: theme.spacing(8),
          padding: theme.spacing(2),
        }}
      >
        {settings ? (
          <Section name="API" description="API settings">
            <TextField
              label="API Port"
              // icon={mdiProtocol}
              value={settings.api.port}
              type="number"
              // onChange={(value: number) =>
              //   handleChanged({
              //     ...settings,
              //     api: { ...settings.api, port: value },
              //   })
              // }
            />
          </Section>
        ) : (
          <Grid
            container
            direction="row"
            justifyContent="center"
            sx={{ margin: theme.spacing(2, 0, 10) }}
          >
            <CircularProgress />
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default Settings;
