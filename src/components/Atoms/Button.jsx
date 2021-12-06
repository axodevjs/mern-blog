import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 6px;
  display: inline-block;
  margin: ${({ margin }) => margin || '0'};
  padding: 7px 35px;
  background: ${({ background }) => background || '#3354FF'};;
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  color: ${({ color }) => color || '#FFFFFF'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  
  &:active {
    background: #2D4AE3;
  }
`

const Button = (props) => {
    return(
        <StyledButton type='button' {...props}/>
    )
}

export default Button