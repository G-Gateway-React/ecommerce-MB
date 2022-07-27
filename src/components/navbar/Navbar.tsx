import { Grid } from "@mui/material";
import { NavbarList, Logo, SpanCounter } from "./styleNavbar";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Navbar = (props: any) => {
  return (
    <Grid sx={{ margin: 0, padding: "10px 0" }} container spacing={3}>
      <Grid md={4}>
        <NavbarList color={props.navColor}>
          <li>new arrivals</li>
          <li>shop</li>
          <li>collections</li>
        </NavbarList>
      </Grid>
      <Grid md={4}>
        <Logo color={props.navColor}>
          <span>S</span>hoOp
        </Logo>
      </Grid>
      <Grid md={4}>
        <NavbarList color={props.navColor}>
          <li>
            <SearchIcon /> search
          </li>
          <li>sign in</li>
          <li>
            bag <SpanCounter color={props.counterColor}>(2)</SpanCounter>
          </li>
          <li>
            <FavoriteBorderOutlinedIcon />
          </li>
        </NavbarList>
      </Grid>
    </Grid>
  );
};

export default Navbar;
