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
              color: "#D1094B",
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
