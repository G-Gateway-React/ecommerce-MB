import { Grid } from "@mui/material";
import { NavbarList, Logo } from "./styleNavbar";

const Navbar = () => {
  return (
    <Grid sx={{margin: 0, padding: '10px 0'}} container spacing={3}>
      <Grid md={4}>
        <NavbarList>
          <li>new arrivals</li>
          <li>shop</li>
          <li>collections</li>
        </NavbarList>
      </Grid>
      <Grid md={4}>
        <Logo>
          <span>S</span>hoOp
        </Logo>
      </Grid>
      <Grid md={4}>
        <NavbarList>
          <li>search</li>
          <li>sign in</li>
          <li>bag</li>
          <li>wishlist</li>
        </NavbarList>
      </Grid>
    </Grid>
  );
};

export default Navbar;
