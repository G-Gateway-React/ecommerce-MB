import React, {useState} from 'react';
import {
  Container,
  Grid,
  Typography,
  FormGroup,
  InputAdornment,
  IconButton,
  Pagination,
  Slider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ImagesTopsCatalog from "../../components/imagesTops/ImagesTopsCatalog";
import CheckBoxCatalog from "../../components/checkboxCatalog/CheckBoxCatalog";
import Navbar from "../../components/navbar/Navbar";
import Tops from "../../assets/tops.png";
import {
  InputSearch,
  ImagesTops,
  ImagesShirts,
  Paginations,
  Sliders,
} from "./styleCatalog";


function valuetext(value: number) {
  return `${value}°C`;
}

const Catalog = () => {

    const [value, setValue] = useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    };
  return (
    <div>
      <Container>
        <Navbar navColor={"#000"} counterColor={"#D1094B"} />
      </Container>
      <Container sx={{ marginTop: "70px" }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography variant="h4">Categories</Typography>
            <FormGroup>
              <CheckBoxCatalog text={"SHIRTS"} />
              <CheckBoxCatalog text={"SHIRTS"} />
              <CheckBoxCatalog text={"SHIRTS"} />
              <CheckBoxCatalog text={"SHIRTS"} />
              <CheckBoxCatalog text={"SHIRTS"} />
            </FormGroup>
            <Typography variant="h5">FILTERS</Typography>
            <Sliders>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Sliders>
          </Grid>
          <Grid item xs={8}>
            <InputSearch
              id="filled-search"
              label="Search..."
              type="search"
              variant="filled"
              fullWidth={true}
              InputProps={{
                style: { backgroundColor: "white" },
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography sx={{ margin: "30px 0 10px 0" }} variant="h5">
              TOPS
            </Typography>
            <ImagesTops>
              <ImagesTopsCatalog />
              <ImagesTopsCatalog />
              <ImagesTopsCatalog />
              <ImagesTopsCatalog />
              <ImagesTopsCatalog />
            </ImagesTops>
            <ImagesShirts style={{ margin: "30px 0 10px 0" }}>
              <Typography variant="h5">SHIRTS</Typography>
              <ImagesShirts>
                <img src={Tops} alt="shirts" />
                <img src={Tops} alt="shirts" />
                <img src={Tops} alt="shirts" />
                <img src={Tops} alt="shirts" />
                <img src={Tops} alt="shirts" />
                <img src={Tops} alt="shirts" />
                <img src={Tops} alt="shirts" />
                <img src={Tops} alt="shirts" />
                <img src={Tops} alt="shirts" />
                <img src={Tops} alt="shirts" />
              </ImagesShirts>
              <Paginations>
                <Pagination
                  count={10}
                  sx={{
                    color: "#d1094b",
                  }}
                />
              </Paginations>
            </ImagesShirts>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Catalog;
