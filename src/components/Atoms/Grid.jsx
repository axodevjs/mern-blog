import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${({columns}) => columns || 'auto'};
  grid-template-rows: ${({rows}) => rows || 'auto'};
  grid-gap: ${({gap}) => gap || '0'};
  align-content: ${({alignContent}) => alignContent || 'auto'};
  justify-items: ${({justifyItems}) => justifyItems || 'auto'};
  align-self: ${({alignSelf}) => alignSelf || 'auto'};
  justify-self: ${({justifySelf}) => justifySelf || 'auto'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
`

const Grid = (props) => {
    return(
        <StyledGrid {...props}/>
    )
}

export default Grid