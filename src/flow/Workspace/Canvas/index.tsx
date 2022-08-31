import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { MyGraph } from "./graphConfig";
export const Canvas = () => {
  const ref = React.useRef(null);
  useEffect(() => {
    MyGraph(ref.current);
  }, []);
  return <Container ref={ref} />;
};

const Container = styled.div`
  width: 100%;
  /*background-color: #fffbe6;
   background-image: linear-gradient(to right, #ccc 1px, transparent 1px),
  linear-gradient(to bottom, #ccc 1px, transparent 1px);
  background-size: 10px 10px; */
`;
