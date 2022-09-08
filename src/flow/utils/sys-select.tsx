import { useSysTypes } from "flow/utils/sys-types";
import { IdSelect } from "./id-select";

export const SysSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const { data: taskTypes } = useSysTypes();
  return <IdSelect options={taskTypes || []} {...props} />;
};
