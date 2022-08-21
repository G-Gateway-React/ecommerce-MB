import CustomizedAccordions from "../../components/Acordinate/Acordinate";
import {Container, Grid} from "@mui/material";
import {CompleteLook} from "../../components/Complete_Look/Complete_Look";
import {Gallery} from "../../components/Gallery/Gallery";
import BasicTextFields from "../../components/Signup-Form/Signup-Form";
import Slider from "../../components/Swiper/Swiper";


const Product = () => {
    return (
        <>
            <Slider/>
            <Container maxWidth="lg">
                <Grid container spacing={2} sx={{ m: "2rem" }}>
                    <Grid item xs={6} md={4}>
                    <CustomizedAccordions title={'title test'} desc={'Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel.  '} />
                    <CustomizedAccordions title={'title test'} desc={' Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel. '} />
                    <CustomizedAccordions title={'title test'} desc={' Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel. '} />
                    </Grid>
                    <Grid item xs={6} md={4}>
                    <CustomizedAccordions title={'title test'} desc={'Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel. '} />
                    <CustomizedAccordions title={'title test'} desc={'Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel.  '} />
                    <CustomizedAccordions title={'title test'} desc={'Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel. '} />
                    </Grid>
                    <Grid item xs={6} md={4}>
                    <CustomizedAccordions title={'title test'} desc={'Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel. '} />
                    <CustomizedAccordions title={'title test'} desc={'Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel.  '} />
                    <CustomizedAccordions title={'title test'} desc={'Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel. '} />
                    </Grid>
                </Grid>
            </Container>
            <CompleteLook />
            <Gallery />
            <BasicTextFields />
        </>
    )
}
export default Product ;