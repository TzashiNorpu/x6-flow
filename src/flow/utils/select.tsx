import {
  useIntfTypes,
  useMethodTypes,
  useSysTypes,
} from "flow/utils/select-types";
import { IdSelect } from "./id-select";
import React from "react";

export const SysSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const { data: sysTypes } = useSysTypes();
  return <IdSelect options={sysTypes || []} {...props} />;
};

export const IntfSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const { data: interfaceTypes } = useIntfTypes(props.parentid);
  return <IdSelect options={interfaceTypes || []} {...props} />;
};

export const MethodSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const { data: methodsTypes } = useMethodTypes(props.parentid);
  return <IdSelect options={methodsTypes || []} {...props} />;
};
