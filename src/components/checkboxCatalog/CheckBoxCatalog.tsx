import { FormControlLabel, Checkbox } from "@mui/material";

const CheckBoxCatalog = () => {
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#000",
              "&.Mui-checked": {
                color: "#D1094B",
              },
            }}
          />
        }
        label={'props.label'}
      />
    </>
  );
};

export default CheckBoxCatalog;
