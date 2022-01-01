import styled, { css } from "styled-components";

export const StyledModal = styled.div`
  transition: 200ms;
  position: fixed;
  display: grid;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  ${(props) =>
    props.showModal === false &&
    css`
      visibility: hidden;
      opacity: 0;
    `}
`;

export const Background = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  display: grid;
  align-self: center;
  justify-self: center;
  border-radius: 7px;
  padding: 20px 50px;
  background: #1b2634;
`;
