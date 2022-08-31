import styled from "@emotion/styled";
import { Row } from "../components/lib";
import { Detail } from "./Workspace/Detail";
import { ItemsPanel } from "./Workspace/Items";
import { Minimap } from "./Workspace/Minimap";
import { CanvasUnionItem } from "./Workspace/Canvas";
import { ToolBox } from "./ToolBox";

export const Flow = () => {
  return (
    <Container>
      <ToolPanelWrapper>
        <ToolBox />
      </ToolPanelWrapper>
      <Workspace>
        {/* <ItemPanelWrapper>
          <ItemsPanel />
        </ItemPanelWrapper> */}
        <CanvasWrapper>
          <CanvasUnionItem />
        </CanvasWrapper>
        <DetailPanelWrapper>
          <Detail />
          <Minimap />
        </DetailPanelWrapper>
      </Workspace>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 4.5rem 1fr 3rem;
  grid-template-areas:
    "header"
    "work"
    "footer";
  height: 100vh;
`;
const ToolPanelWrapper = styled(Row)`
  grid-area: header;
  padding: 2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const Workspace = styled.div`
  display: grid;
  grid-area: work;
  grid-template-columns: 20rem 1fr 30rem;
  grid-template-areas: "main main aside";
`;

const CanvasWrapper = styled.main`
  grid-area: main;
  display: flex;
  overflow: hidden;
`;

const ItemPanelWrapper = styled.nav`
  grid-area: nav;
  background: #fdfffd;
  border-right: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  flex-direction: column;
`;

const DetailPanelWrapper = styled.aside`
  grid-area: aside;
`;

const Footer = styled.footer`
  grid-area: footer;
  background-color: blanchedalmond;
`;
