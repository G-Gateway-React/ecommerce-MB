import { FormControlLabel, Checkbox } from "@mui/material";

type CheckBoxCatalogProps = {
  text: string;
}

const CheckBoxCatalog = (props: CheckBoxCatalogProps) => {
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
        label={props.text}
      />
    </>
  );
};

export default CheckBoxCatalog;
