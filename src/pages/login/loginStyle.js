import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const FormSection = styled.div`
  width: 50%;
  margin: 0 auto;
  border: 1px solid #000000;
  border-radius: 14px;
  padding: 20px;
  margin:50px auto;
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const ButtonForm = styled(Button)`
    width: 100%;
    background-color:  #000;
    color: #fff;
    padding: 15px 0;
    &:hover{
        background-color: #000;
        color: #fff;
    }


`
