import { Graph, Shape } from "@antv/x6";
import styled from "@emotion/styled";
import React, { createContext, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MyStencil } from "../Items/stencil";
import { MyGraph } from "./graphConfig";
export const GraphContext = createContext<Graph|undefined>(undefined);
export const Canvas =()=>{
const [graph,setGraph]=useState<Graph|undefined>();
const ref = React.useRef(null);
  useEffect(() => {
    const g=MyGraph(ref.current);
    setGraph(g);
    console.log(g);
  }, []);
  return <GraphContext.Provider value={graph}>
    <Container ref={ref} >
        <MyStencil />
    </Container>
  </GraphContext.Provider>;
}
const Container = styled.div`
  width: 100%;
  /*background-color: #fffbe6;
   background-image: linear-gradient(to right, #ccc 1px, transparent 1px),
  linear-gradient(to bottom, #ccc 1px, transparent 1px);
  background-size: 10px 10px; */
`;