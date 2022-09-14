import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { baseUrl, token } from "../../API";
import CategoryImage from "../../components/categoryImages/CategoryImage";

function valuetext(value: number) {
  return `${value}°C`;
}

interface CategoryType {
  id: string;
  title: string;
}

interface ProductsType {
  id: string;
  price: string;
  images: {
    url: string;
  };
}

const Catalog = () => {
  const [value, setValue] = useState<number[]>([20, 37]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [products, setProducts] = useState<ProductsType[]>([]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const fetchCategory = async () => {
    return await axios
      .get<CategoryType[]>(`${baseUrl}/category`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setCategories(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchProducts = async () => {
    return await axios
      .get(
        `${baseUrl}/product?page=0&perPage=10&price[from]=20&price[to]=100`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        setProducts(res.data.data);
        // console.log(res.data.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const categoriesList = categories.map((item) => {
    return <CheckBoxCatalog key={item.id} text={item.title} />;
  });

  const productsList = products.map((item) => {
    return <ImagesTopsCatalog price={item.price} img={item.images} />;
  });

  useEffect(() => {
    fetchCategory();
    fetchProducts();
  }, []);
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
              {/* <CheckBoxCatalog text={"SHIRTS"} />
              <CheckBoxCatalog text={"SHIRTS"} />
              <CheckBoxCatalog text={"SHIRTS"} />
              <CheckBoxCatalog text={"SHIRTS"} />
              <CheckBoxCatalog text={"SHIRTS"} /> */}
              {categoriesList}
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
              {/* <ImagesTopsCatalog />
              <ImagesTopsCatalog />
              <ImagesTopsCatalog />
              <ImagesTopsCatalog />
              <ImagesTopsCatalog /> */}
              {productsList}
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
