import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { Canvas } from "./canvas/canvas";
import { Items } from "./items/Items";
import { Minimap } from "./minimap";
import { useFlow } from "flow/context/context";
import { ShowPorts } from "./items/ports";
import { DetailPanel } from "./detail";
import React from "react";
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
        <DetailPanelWapper />
        <MinimapWapper />
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
  grid-template-rows: 70rem 1fr;
  grid-template-areas:
    "info"
    "miniMap";
`;

const DetailPanelWapper = styled(DetailPanel)`
  grid-area: info;
`;

const MinimapWapper = styled(Minimap)`
  grid-area: miniMap;
`;
