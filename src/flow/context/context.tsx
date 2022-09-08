import { Graph } from "@antv/x6";
import { Dnd } from "@antv/x6/lib/addon";
import { CreateGraph } from "flow/workspace/canvas/graph-config";
import { CreateDnd } from "flow/workspace/items/dnd";
import React, { ReactNode, useState } from "react";
import { useCallback } from "react";

interface iFlowContext {
  graph: Graph | null;
  dnd: Dnd | null;
  mountGraph: (current: React.ReactInstance) => void;
  mountDnd: (graph: Graph) => void;
}

const FlowContext = React.createContext<iFlowContext | undefined>(undefined);

FlowContext.displayName = "FlowContext";

export const FlowProvider = ({ children }: { children: ReactNode }) => {
  const [graph, setGraph] = useState<Graph | null>(null);
  const [dnd, setDnd] = useState<Dnd | null>(null);

  const mountGraph = useCallback(
    (current: React.ReactInstance) => setGraph(CreateGraph(current)),
    []
  );

  const mountDnd = useCallback((graph: Graph) => setDnd(CreateDnd(graph)), []);

  return (
    <FlowContext.Provider
      children={children}
      value={{ graph, dnd, mountGraph, mountDnd }}
    />
  );
};

export const useFlow = () => {
  const context = React.useContext(FlowContext);
  if (!context) {
    throw new Error("useFlow必须在FlowProvider中使用");
  }
  return context;
};
