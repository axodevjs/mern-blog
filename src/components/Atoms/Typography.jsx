import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span`
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  background: ${({ background }) => background || 'none'};;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  color: ${({ color }) => color || '#ffffff'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  cursor: ${({cursor}) => cursor || 'auto'}
`;

const StyledErrText = styled.span`
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  background: ${({ background }) => background || 'none'};;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  color: ${({ color }) => color || '#FF5D5D'};
  font-size: ${({ fontSize }) => fontSize || '14px'};
`;

const StyledHeading = styled.span`
  display: grid;
  text-align: ${({textAlign}) => textAlign || 'initial'};
  margin: ${({ margin }) => margin || '0'};
  font-weight: ${({ fontWeight }) => fontWeight || '700'};
  color: ${({ color }) => color || '#ffffff'};
  cursor: ${({cursor}) => cursor || 'auto'}
`;

export const Text = (props) => {
  return <StyledText {...props}></StyledText>;
};

export const ErrText = (props) => {
  return <StyledErrText {...props}></StyledErrText>;
};

export const Heading = ({ level, ...props }) => {
  return <StyledHeading as={`h${level}`} {...props} />;
};

Heading.defaultProps = {
  level: 1,
};
