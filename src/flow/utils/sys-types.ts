import { useQuery } from "react-query";
import { useHttp } from "./http";

interface SysType {
  id: number;
  name: string;
}
export const useSysTypes = () => {
  const client = useHttp();

  return useQuery<SysType[]>(["sysTypes"], () => client("sysType"));
};
