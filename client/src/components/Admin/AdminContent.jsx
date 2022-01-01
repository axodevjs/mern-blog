import styled from "styled-components";

const StyledContent = styled.div`
  grid-area: content;
  padding: 55px 60px;
`;

const Content = ({ children }, props) => {
  return <StyledContent {...props}>{children}</StyledContent>;
};

export default Content;
