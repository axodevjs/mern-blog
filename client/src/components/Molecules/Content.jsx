import styled from 'styled-components';

const StyledContent = styled.div`
  grid-area: content;
  padding: 0 60px 60px 80px;
`

const Content = ({children}, props) => {
    return(
        <StyledContent {...props}>
            {children}
        </StyledContent>
    )
}

export default Content;