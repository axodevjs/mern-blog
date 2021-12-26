import styled from "styled-components";

export const StyledSidebar = styled.div`
  display: grid;
  grid-template-rows: max-content;
  justify-items: center;
  grid-area: sidebar;
  position: sticky; // See link
  top: 0; //to make it stick to the top of the screen
  height: 100vh; // make the height equal to 100 view height
  background-color: #212F3F;
`;

export const Categories = styled.div`
  display: grid;
  align-self: start;
  grid-column-gap: 15px;
  grid-row-gap: 8px;
  grid-template-columns: 1fr 125px;
  margin-top: 46px;
`;