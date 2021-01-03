import styled from "styled-components";

export const MoreOptionsButton = styled.button`
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  &::hover,
  &::active,
  &::focus {
    background: #a1a1a1;
  }
`;

export const MoreOptionStyled = styled.span`
  position: relative;
  height: 5px;
  width: 5px;
  background-color: #292f36ff;
  border-radius: 1px;
  &::before,
  &::after {
    content: " ";
    position: absolute;
    height: 5px;
    width: 5px;
    background-color: #292f36ff;
    border-radius: 1px;
  }

  &::before {
    left: -7px;
  }
  &::after {
    left: 7px;
  }
`;
