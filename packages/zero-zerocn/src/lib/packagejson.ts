// import { NEXTENV } from "@/lib/next-env";
import packageJSON from "@/root/package.json" with { type: "json" };

export const PACKAGEJSON = {
  ...packageJSON,
  nameVersion: `${packageJSON.name}-${packageJSON.version}`,
  // nameVersionStage: `${packageJSON.name}-${packageJSON.version}-${NEXTENV.NODE_ENV}`,
};
