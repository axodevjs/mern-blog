import styled from 'styled-components';

const StyledSearch = styled.input`
  margin: ${({margin}) => margin || '0'};
  padding: 10px 15px;
  background: none;
  border: 1px solid #ACADBC;
  color: #FFFFFF;
  font-size: 16px;
  border-radius: 6px;
  outline: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ACADBC;
  }

  :-ms-input-placeholder {
    color: #ACADBC;
  }
`

const Input = (props) => {
    return (
        <StyledSearch onChange={(event) => props.setValue(event.target.value)}
                      value={props.value}
                      {...props}
                      placeholder={props.placeholder}
        />
    )
}

export default Input;