import styled from "styled-components";

export const WrapperCategory = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 64px;
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 29px 29px;
  grid-column-gap: 19px;
`;

export const Action = styled.div`
  display: inline-grid;
  justify-self: end;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 6px;
  background: ${({ background }) => background || "#3354FF"};
`;
