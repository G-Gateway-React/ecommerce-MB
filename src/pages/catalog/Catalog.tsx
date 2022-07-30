import {
  Container,
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ImagesTopsCatalog from "../../components/imagesTops/ImagesTopsCatalog";
import CheckBoxCatalog from "../../components/checkboxCatalog/CheckBoxCatalog";
import Navbar from "../../components/navbar/Navbar";
import {
  InputSearch,
  ImagesTops,
  SpanPrice,
  Overlay,
  ImagesShirts,
} from "./styleCatalog";

const Catalog: React.FC = () => {
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
              <CheckBoxCatalog text={'SHIRTS'} />
              <CheckBoxCatalog text={'SHIRTS'} />
              <CheckBoxCatalog text={'SHIRTS'} />
              <CheckBoxCatalog text={'SHIRTS'} />
              <CheckBoxCatalog text={'SHIRTS'} />
              <CheckBoxCatalog text={'SHIRTS'} />
            </FormGroup>
            <Typography variant="h5">FILTERS</Typography>
          </Grid>
          <Grid item xs={8}>
            <InputSearch
              id="filled-search"
              label="Search..."
              type="search"
              variant="filled"
              sx={{
                bgColor: "red"
              }}
              fullWidth={true}
              InputProps={{
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
            </ImagesTops>
            <ImagesShirts style={{ margin: "30px 0 10px 0" }}>
              <Typography variant="h5">SHIRTS</Typography>
            </ImagesShirts>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Catalog;
