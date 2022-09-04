import React from "react";
import { FooterSection, FooterList } from "./footerComStyle";
import { Container, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <Container>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            padding: "0",
          }}
          spacing={3}
        >
          <Grid item xs={4}>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "24px",
                textTransform: "uppercase",
              }}
              variant="h5"
            >
              customer service
            </Typography>
            <FooterList>
              <li>contact</li>
              <li>track order</li>
              <li>delivery &amp; returns</li>
              <li>payments</li>
              <li>make a return</li>
              <li>faq</li>
            </FooterList>
          </Grid>
          <Grid item xs={4}>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "24px",
                textTransform: "uppercase",
              }}
              variant="h5"
            >
              info
            </Typography>
            <FooterList>
              <li>gift vouchers</li>
              <li>size guide</li>
              <li>careers</li>
              <li>about us</li>
              <li>guide</li>
              <li>legal policies</li>
            </FooterList>
          </Grid>
          <Grid item xs={4}>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "24px",
                textTransform: "uppercase",
              }}
              variant="h5"
            >
              follow us
            </Typography>
            <FooterList>
              <li>
                <FacebookIcon /> facebook
              </li>
              <li>
                <InstagramIcon /> instagram
              </li>
            </FooterList>
          </Grid>
          <Grid item xs={4}>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "24px",
                textTransform: "uppercase",
              }}
              variant="h5"
            >
              contact us
            </Typography>
            <FooterList>
              <li>hello@shoesly.com</li>
              <li>+972599123456</li>
            </FooterList>
          </Grid>
        </Grid>
      </Container>
    </FooterSection>
  );
};

export default Footer;
