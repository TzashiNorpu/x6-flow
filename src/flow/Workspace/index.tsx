import { Graph } from "@antv/x6";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Canvas } from "./Canvas/Canvas";
import { CreateMyGraph } from "./Canvas/graph-config";
import { MyStencil } from "./Items/Stencil";
import "./graph-init";
import { Dnd } from "@antv/x6/lib/addon";
import { Items } from "./Items/Items";
export const Workspace = () => {
  const graphRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [g, setG] = useState<Graph>();
  useEffect(() => {
    const graph = CreateMyGraph(graphRef.current);
    setG(graph);
  }, [graphRef]);
  return (
    <Wrapper ref={containerRef}>
      {/* <MyStencil graph={g}></MyStencil> */}
      <Items></Items>
      <Canvas ref={graphRef}></Canvas>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 30rem 1fr 20rem;
  grid-template-areas: "stencil canvas detail";
`;

const StencilWrapper = styled.div`
  grid-area: stencil;
`;

const CanvasWrapper = styled.div`
  grid-area: canvas;
  /* background-color: red; */
`;
