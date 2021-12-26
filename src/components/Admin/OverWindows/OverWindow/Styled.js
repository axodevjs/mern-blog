import styled, {css} from 'styled-components';

export const StyledOverWindow = styled.div`
  transition: 200ms;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0E141B;

  ${(props) =>
          (props.show === false) &&
          css`
            visibility:hidden;
            opacity: 0;
          `}
`;