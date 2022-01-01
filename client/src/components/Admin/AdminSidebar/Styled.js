import styled from "styled-components";

export const Styled = styled.div`
  display: grid;
  padding: 42px 0;
  grid-template-rows: max-content;
  justify-items: center;
  grid-area: sidebar;
  position: sticky;
  top: 0;
  height: calc(100vh - 84px);
  background-color: #212f3f;
`;

export const Categories = styled.div`
  display: grid;
  align-self: start;
  grid-column-gap: 15px;
  grid-row-gap: 8px;
  grid-template-columns: 1fr 125px;
  margin-top: 46px;
`;

export const NavBar = styled.nav`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 45px;
  font-size: 20px;
`;

export const Nav = styled.div`
  margin-top: 37px;
  font-size: 20px;
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Logout = styled.div`
  display: grid;
  align-self: end;
`;
