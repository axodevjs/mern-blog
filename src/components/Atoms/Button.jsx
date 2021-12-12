import styled, {css} from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 6px;
  display: inline-grid;
  margin: ${({margin}) => margin || '0'};
  justify-self: ${({justifySelf}) => justifySelf || 'auto'};
  align-self: ${({alignSelf}) => alignSelf || 'auto'};
  padding: ${({padding}) => padding || '7px 35px'};
  background: ${({background}) => background || '#3354FF'};;
  font-weight: ${({fontWeight}) => fontWeight || '500'};
  color: ${({color}) => color || '#FFFFFF'};
  font-size: ${({fontSize}) => fontSize || '16px'};
  &:active {
    background: #2D4AE3;
  }
  ${(props) => 
          props.danger &&
          css`
              color: white;
              background: #FF3333;

            &:active {
              background: #DB2D2D;
            }
          `}
  
  
`

const Button = (props) => {
    return (
        <StyledButton type='button' {...props}/>
    )
}

export default Button