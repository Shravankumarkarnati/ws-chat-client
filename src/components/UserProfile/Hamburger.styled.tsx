import React from "react";
import styled from "styled-components";

const HamButton = styled.button`
  position: absolute;
  top: 0rem;
  right: 0rem;
  z-index: 100;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  background-color: white;
  &,
  &:hover,
  &:active,
  &:focus {
    border: 0;
    outline: none;
    background-color: transparent;
  }
`;

const HamBurger = styled.div`
  height: 3px;
  width: 30px;
  background-color: black;
  position: relative;
  opacity: 1;
  visibility: visible;
  &::before,
  &::after {
    transition: all 0.1s ease-in-out;
    opacity: 1;
    content: " ";
    height: 100%;
    width: 100%;
    background-color: black;
    position: absolute;
    left: 0;
  }
  &::before {
    top: -7px;
  }
  &::after {
    top: 7px;
  }
  &.open {
    & {
      visibility: hidden;
    }
    &::before {
      transform: rotate(45deg);
      visibility: visible;
      top: 0px;
      background-color: white;
    }
    &::after {
      transform: rotate(-45deg);
      visibility: visible;
      top: 0px;
      background-color: white;
    }
  }
`;

interface HamburgerStyledProps {
  close: Boolean;
  setClose: React.Dispatch<React.SetStateAction<Boolean>>;
}

const HamburgerStyled: React.FC<HamburgerStyledProps> = ({
  close,
  setClose,
}) => {
  return (
    <HamButton onClick={() => setClose(!close)}>
      <HamBurger className={close ? "open" : "close"} />
    </HamButton>
  );
};
export default HamburgerStyled;
