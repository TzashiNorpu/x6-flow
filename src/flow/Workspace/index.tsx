import { Addon, Graph } from "@antv/x6";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Canvas } from "./Canvas/Canvas";
import { CreateMyGraph } from "./Canvas/graph-config";
import "./graph-init";
import { Items } from "./Items/Items";
import { CreateMyDnd } from "./Items/Dnd";
export const Workspace = () => {
  const graphRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  const [graph, setGraph] = useState<Graph>();
  const [dnd, setDnd] = useState<Addon.Dnd>();
  useEffect(() => {
    const g = CreateMyGraph(graphRef.current);
    const d = CreateMyDnd(g);
    setGraph(g);
    setDnd(d);
  }, []);

  return (
    <Wrapper>
      <Items graph={graph} dnd={dnd}></Items>
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
