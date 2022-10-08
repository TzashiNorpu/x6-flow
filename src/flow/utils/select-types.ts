import { useQuery } from "react-query";
import { useHttp } from "./http";

interface SysType {
  id: number;
  name: string;
}

interface InterfaceType {
  id: number;
  name: string;
}

interface MethodsType {
  id: number;
  name: string;
}
export const useSysTypes = () => {
  const client = useHttp();
  return useQuery<SysType[]>(["sysTypes"], () => client("sysType"));
};

export const useIntfTypes = (sysId: string | null | undefined) => {
  const client = useHttp();
  return useQuery<InterfaceType[]>(["interfaces", sysId], () =>
    client("interfaces", { data: { sysId: sysId } })
  );
};

export const useMethodTypes = (interfaceId: string | null | undefined) => {
  const client = useHttp();
  return useQuery<MethodsType[]>(["methods", interfaceId], () =>
    client("methods", { data: { interfaceId: interfaceId } })
  );
};

interface MethodArgs {
  key: string;
  name: string;
  type: string;
  source: string;
}

export const useMethodArgs = (param: string | null | undefined) => {
  const client = useHttp();
  return useQuery<MethodArgs[]>(["method-args", param], () =>
    client("method-args", { data: { methodId: param } })
  );
};
