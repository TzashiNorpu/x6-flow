import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { Canvas } from "./canvas/canvas";
import { Items } from "./items/Items";
import { Minimap } from "./minimap";
import { useFlow } from "flow/context/context";
import { ShowPorts } from "./items/ports";
import { DetailPanel } from "./detail";
export const Workspace = () => {
  const graphRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  const { graph, mountGraph, mountDnd } = useFlow();
  useEffect(() => {
    mountGraph(graphRef.current);
  }, [mountGraph]);

  useEffect(() => {
    if (graph) mountDnd(graph);
  }, [graph, mountDnd]);

  useEffect(() => {
    if (graph) ShowPorts(graph, graphRef);
  }, [graphRef, graph]);

  return (
    <Wrapper>
      <Items />
      <Canvas ref={graphRef}></Canvas>
      <SideWrapper>
        <DetailPanel />
        <Minimap />
      </SideWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 25rem 1fr 35rem;
  grid-template-areas: "stencil canvas detail";
`;

const SideWrapper = styled.div`
  grid-area: detail;
  display: grid;
  height: 100%;
  grid-template-rows: 0.8fr 0.2fr;
  grid-template-areas:
    "detail"
    "miniMap";
`;
