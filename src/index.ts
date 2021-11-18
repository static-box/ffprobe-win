import * as path from "path";
const version = "4.2.1";

export const win32 = {
  path: path.resolve(__dirname, "../assets/ffprobe-4.2.1-win-32.exe"),
  version,
};

export const win64 = {
  path: path.resolve(__dirname, "../assets/ffprobe-4.2.1-win-64.exe"),
  version,
};
