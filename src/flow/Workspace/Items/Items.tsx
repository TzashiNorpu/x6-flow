import styled from "@emotion/styled";
import startIcon from "assets/flow/start.svg";
import serviceTask from "assets/flow/serviceTask.svg";
import scriptTask from "assets/flow/scriptTask.svg";
import { Addon, Graph } from "@antv/x6";
import { startDrag } from "./Dnd";
import { Dnd } from "@antv/x6/lib/addon";
export const Items = ({
  graph,
  dnd,
}: {
  graph: Graph | undefined;
  dnd: Addon.Dnd | undefined;
}) => {
  const drag = startDrag(graph as Graph)(dnd as Dnd);
  return (
    <Container>
      <Item src={startIcon} onMouseDown={drag} />
      <Item src={serviceTask} onMouseDown={drag} />
      <Item src={scriptTask} onMouseDown={drag} />
    </Container>
  );
};

const Item = styled.img`
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 2px;
  margin: 0 auto 0;
  &:hover {
    border: 1px solid #ccc;
    cursor: move;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
