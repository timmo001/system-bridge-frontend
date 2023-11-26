import { Battery } from "./battery";
import { CPU } from "./cpu";
import { Disks } from "./disks";
import { Displays } from "./displays";
import { GPUs } from "./gpus";
import { Media } from "./media";
import { Memory } from "./memory";
import { Networks } from "./networks";
import { Processes } from "./processes";
import { Sensors } from "./sensors";
import { System } from "./system";

export interface Data {
  battery?: Battery;
  cpu?: CPU;
  disk?: Disks;
  display?: Displays;
  gpu?: GPUs;
  media?: Media;
  memory?: Memory;
  network?: Networks;
  processes?: Processes;
  sensors?: Sensors;
  system?: System;
}
