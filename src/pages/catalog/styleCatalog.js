import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const InputSearch = styled(TextField)`
  background-color: #fff;
  .MuiTextField-root {
    background-color: #fff;
  }
`;

export const ImagesTops = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100px;
  gap: 10px;

  div {
    position: relative;
    width: 32%;
    overflow: hidden;
    &:hover .overlay{
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


`


