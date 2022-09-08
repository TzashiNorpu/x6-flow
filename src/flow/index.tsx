import styled from "@emotion/styled";
import { Row } from "../components/lib";
import { ToolBox } from "./toolbox";
import { Workspace } from "./workspace";

export const Flow = () => {
  return (
    <Container>
      <ToolPanelWrapper>
        <ToolBox />
      </ToolPanelWrapper>
      <WorkspaceWrapper>
        <Workspace />
      </WorkspaceWrapper>
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
`;
const WorkspaceWrapper = styled.div`
  grid-area: work;
`;

const Footer = styled.footer`
  grid-area: footer;
  background-color: blanchedalmond;
`;
