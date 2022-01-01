import styled from "styled-components";

export const Categories = styled.div`
  display: flex;
`;

export const Category = styled.div`
  margin-left: 15px;
  &:nth-child(1) {
    margin-left: 0;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
`;
