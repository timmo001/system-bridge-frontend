import { ReactElement, useCallback, useEffect, useState } from "react";
import { CircularProgress, Grid, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import {
  mdiFolderMultipleOutline,
  mdiKeyboardOutline,
  mdiProtocol,
  mdiRocketLaunch,
  mdiTextBoxOutline,
} from "@mdi/js";

import { Event } from "types/event";
import { SettingsObject, SettingsValue } from "assets/entities/settings.entity";
import { useSettings } from "components/Contexts/Settings";
import { WebSocketConnection } from "components/Common/WebSocket";
import Item from "components/Settings/Item";
import Section from "components/Settings/Section";

let ws: WebSocketConnection;

interface SettingResult {
  key: string;
  value: SettingsValue;
}

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
    (event: Event) => {
      console.log("Event:", event);
      if (event.type === "SETTINGS_RESULT") {
        console.log("Settings result data:", event.data);
        let newSettings: SettingsObject = {};
        console.log("settingsMap:", settingsMap);
        const settingsKeys = Object.keys(settingsMap);
        event.data
          .sort((a: SettingResult, b: SettingResult) =>
            settingsKeys.indexOf(a.key) > settingsKeys.indexOf(b.key) ? 1 : -1,
          )
          .forEach((s: SettingResult) => {
            // Parse JSON if the value is a stringified list
            if (settingsMap[s.key]?.isList && typeof s.value === "string") {
              newSettings[s.key] = JSON.parse(s.value);
            } else newSettings[s.key] = s.value;
          });
        console.log("Settings:", newSettings);
        setSettings(newSettings);
      }
    },
    [setSettings],
  );

  const handleSetup = useCallback(
    (port: number, token: string) => {
      console.log("Setup WebSocketConnection");
      ws = new WebSocketConnection(port, token, async () => {
        ws.getSettings();
      });
      ws.onEvent = eventHandler;
    },
    [eventHandler],
  );

  const handleChanged = useCallback(
    (key: string, value: SettingsValue) => {
      ws.updateSetting(key, value);
      setSettings({ ...settings, [key]: value });
    },
    [settings, setSettings],
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
          <Section name="General" description="General settings">
            <>
              {Object.keys(settings).map((key: string, index: number) => (
                <Item
                  key={index}
                  keyIn={key}
                  valueIn={settings[key]}
                  handleChanged={handleChanged}
                />
              ))}
            </>
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
