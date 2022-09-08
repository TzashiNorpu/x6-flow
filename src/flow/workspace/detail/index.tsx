import { useFlow } from "flow/context/context";
import { useEffect, useState } from "react";
import { NodeType } from "../items/detail-types";
import { GridDetail } from "./components/grid-detail";
import { ScriptDetail } from "./components/script-detail";
import { ServiceDetail } from "./components/service-detail";
import { StartDetail } from "./components/start-detail";

export const DetailPanel = () => {
  const { graph } = useFlow();
  const [type, setType] = useState<NodeType>(NodeType.Grid);
  const [cellId, setCellId] = useState("");

  useEffect(() => {
    if (graph) {
      graph.on("blank:click", () => {
        setType(NodeType.Grid);
      });
      graph.on("node:click", ({ cell }) => {
        setType(cell.getData()["Type"]);
        setCellId(cell.id);
      });
    }
  }, [graph]);
  return (
    <div>
      {type === NodeType.Grid && <GridDetail />}
      {type === NodeType.Start && <StartDetail />}
      {type === NodeType.ScriptTask && <ScriptDetail />}
      {type === NodeType.ServiceTask && <ServiceDetail id={cellId} />}
    </div>
  );
};
