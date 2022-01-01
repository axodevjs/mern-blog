import styled from "styled-components";
import Input from "../Atoms/Input";

const StyledHeader = styled.header`
  display: grid;
  justify-items: center;
  align-content: center;
  grid-area: header;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Input placeholder={"Search here..."} />
    </StyledHeader>
  );
};

export default Header;
