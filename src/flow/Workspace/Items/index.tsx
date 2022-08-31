import styled from "@emotion/styled";
import { Collapse } from "antd";
import startIcon from "assets/flow/start.svg";
import serviceTask from "assets/flow/serviceTask.svg";
import scriptTask from "assets/flow/scriptTask.svg";
export const ItemsPanel = () => {
  return (
    <Container bordered={false} defaultActiveKey={[]}>
      <Item
        data-item={"{clazz:'start',size:'30*30',label:''}"}
        src={startIcon}
      />
      <Item
        data-item={"{clazz:'start',size:'30*30',label:''}"}
        src={serviceTask}
      />
      <Item
        data-item={"{clazz:'start',size:'30*30',label:''}"}
        src={scriptTask}
      />
    </Container>
  );
};

const Item = styled.img`
  /*   width: 92px;
  height: 96px; */
  padding: 4px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 2px;
  margin: 0 auto 0;
  &:hover {
    border: 1px solid #ccc;
    cursor: move;
  }
`;

const Container = styled(Collapse)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
