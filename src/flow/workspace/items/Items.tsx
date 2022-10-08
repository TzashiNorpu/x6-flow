import styled from "@emotion/styled";
import { Graph } from "@antv/x6";
import { StartDrag } from "./dnd";
import { Dnd } from "@antv/x6/lib/addon";
import { config } from "./items-config";
import { useFlow } from "flow/context/context";
import React from "react";
export const Items = () => {
  const { graph, dnd } = useFlow();
  const drag = StartDrag(graph as Graph)(dnd as Dnd);
  return (
    <Container>
      {config.map((item) => {
        return (
          <ItemWrapper key={item.id}>
            <Item
              src={item.icon}
              width={item.width}
              height={item.height}
              onMouseDown={drag}
              itemType={item.type}
            />
          </ItemWrapper>
        );
      })}
    </Container>
  );
};

const ItemWrapper = styled.div`
  padding: 1rem;
`;

const Item = styled.img`
  /* padding: 1rem; */
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 2px;
  margin: 0 auto 0;
  &:hover {
    /* border: 1px solid #ccc; */
    cursor: grab;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
