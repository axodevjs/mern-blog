import React from "react";
import styled from "styled-components";
import {device} from "../../helpers/styled_consts";

const StyledCategoryBtn = styled.button`
  align-self: ${({ align }) => align || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  font-weight: ${({ fontWeight }) => fontWeight || "700"};
  color: ${({ color }) => color || "#ffffff"};
  font-size: ${({ fontSize }) => fontSize || "18px"};
  background: ${({ background }) => background || "#3354FF"};
  outline: none;
  border: ${({ border }) => border || "none"};
  padding: 4px 19px;
  border-radius: 5px;
  cursor: pointer;
  
  @media ${device.mobileS} {
    font-size: 15px;
  }
`;

export const CategoryBtn = (props) => {
  return <StyledCategoryBtn {...props}>{props.children}</StyledCategoryBtn>;
};
