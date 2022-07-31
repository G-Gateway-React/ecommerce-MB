import { TextField } from "@mui/material";
import React from "react";
import { InputSearch } from "../../pages/catalog/styleCatalog";
import SearchIcon from "@mui/icons-material/Search";


interface InputProps {
  type: string;
  placeholder: string;
}


const Input: React.FC<InputProps> = (props) => {
  return (
    <>
      <TextField
        type={props.type}
        id="standard-basic"
        label={props.placeholder}
        fullWidth={true}
        variant="standard"
      />
    </>
  );
};

export default Input;
