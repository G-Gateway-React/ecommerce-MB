import {ImagePath} from "../ImagePath/ImagePath";
import {Container, Grid} from "@mui/material";
import {Flex, Img, Title} from "./styleGallery";
export const Gallery = () => {
    return (
        <Container maxWidth="lg">
            <Title className='flex'>
                 YOU MAY ALSO LIKE
            </Title>
            <Flex>
                    <Img src={ImagePath.Shose1} alt='Shose1'/>
                    <Img src={ImagePath.Shose2} alt='Shose2'/>
                    <Img src={ImagePath.Shose3} alt='Shose3'/>
                    <Img src={ImagePath.Shose1} alt='Shose4'/>
            </Flex>
        </Container>
    )

}