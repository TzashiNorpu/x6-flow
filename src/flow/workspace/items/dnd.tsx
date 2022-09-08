import { Addon, Graph } from "@antv/x6";
import { NodeType } from "./detail-types";
import { getInitData } from "./items-config";
import { PortsConfig } from "./ports";
const { Dnd } = Addon;

export const CreateDnd = (graph: Graph) => {
  return new Dnd({
    target: graph,
    scaled: false,
    animation: true,
  });
};

export const StartDrag = (graph: Graph) => {
  return (dnd: Addon.Dnd) => {
    return (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const target = e.currentTarget;
      const type = target.getAttribute("itemType");
      const node = graph.createNode({
        width: Number(target.getAttribute("width")),
        height: Number(target.getAttribute("height")),
        ports: { ...PortsConfig },
        shape: "html",
        html: () => {
          const wrap = document.createElement("img");
          wrap.src = target.getAttribute("src") || "";
          return wrap;
        },
        data: getInitData(type as NodeType),
      });
      dnd.start(node, e.nativeEvent as any);
    };
  };
};
