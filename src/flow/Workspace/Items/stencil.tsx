import { Addon, Graph } from "@antv/x6";
import { useContext, useEffect } from "react";
import { GraphContext } from "../Canvas/Canvas";
import { CreateStencil } from "./stencilConfig";
// TODO
export const MyStencil = () => {
  const g=useContext(GraphContext);
  useEffect(() => {
    CreateStencil(g);
  }, []);
  return <div>test</div>;
};
