import { contextBridge} from "electron";
import * as os from "os";

contextBridge.exposeInMainWorld('homeDir', os.homedir());