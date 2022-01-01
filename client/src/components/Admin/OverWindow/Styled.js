import styled, { css } from "styled-components";

export const StyledOverWindow = styled.div`
  transition: 200ms;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0e141b;

  ${(props) =>
    props.show === true &&
    css`
      overflow-y: scroll
    `}

  ${(props) =>
    props.show === false &&
    css`
      visibility: hidden;
      opacity: 0;
    `}
`;
