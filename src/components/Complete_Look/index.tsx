import {Container , Grid} from "@mui/material";
import {ImagePath} from "../ImagePath/ImagePath";
import {Img, Img1, Title} from "./styleComplete_Look";
export const CompleteLook = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                    <Title>Complete
                        the look</Title>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Img1 src={ImagePath.Trouser} alt='Trouser'/>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Img src={ImagePath.Cap} alt='Cap'/>
                </Grid>
            </Grid>
        </Container>
    )
}