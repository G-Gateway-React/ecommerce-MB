import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const InputSearch = styled(TextField)`
  background-color: rgba(255, 255, 255, 1) !important;
  opacity: 1;
  .MuiInputBase-root-MuiFilledInput-root {
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const ImagesTops = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  div {
    position: relative;
    width: 32%;
    overflow: hidden;
    &:hover .overlay {
      height: 98%;
    }
    img {
      width: 100%;
    }
  }
`;

export const SpanPrice = styled.span`
  clip-path: polygon(0% 0%, 100% 0%, 80% 50%, 100% 100%, 0 100%);
  background-color: #d1094b;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  position: absolute;
  border-radius: 4px;
  top: 0;
  left: 0;
  width: 45%;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  &:before {
    content: "";
    position: absolute;
    top: 6px;
    left: 10px;
    width: 5px;
    height: 70%;
    background-color: #fff;
    margin: auto 0;
    border-radius: 4px;
  }
`;

export const Overlay = styled.span`
  position: absolute;
  z-index: 9;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 0%;
  display: flex;
  align-items: end;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  button {
    position: absolute;
    background: none;
    border: none;
    bottom: 35px;
    margin: 0;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    width: 100%;
    padding: 0;
    cursor: pointer;
  }
`;

export const ImagesShirts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  text-align: center;
  img {
    width: 32%;
  }
`;

export const Paginations = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  ul {
    li {
      button[aria-current="true"] {
        background: #d1094b;
        color: #fff;
      }
    }
  }
`;


export const Sliders = styled.div`
  span {
    span:not(:first-of-type) {
      background: #d1094b;
      border: 1px solid #d1094b;
    }
  }
`;
