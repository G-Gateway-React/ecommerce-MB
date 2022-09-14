import React, { useRef, useState } from "react";
import {ImagePath} from "../ImagePath/ImagePath";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './style.css'
import {Box, Span, P, Subspan, Size, Div, Button} from './styleSwiper'
import { FreeMode, Navigation, Thumbs } from "swiper";
import {Container, Grid} from "@mui/material";
import {Buttons} from "../Button/styleButton";

const colorsButtons = ["red" , "yellow" , "blue" , "green" , "black" , "white"]
export default function Slider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                    <Container maxWidth="sm">
                        <Box>
                    <Swiper
                        style={{
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <img src={ImagePath.Product} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ImagePath.Product} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ImagePath.Product} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ImagePath.Product} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ImagePath.Product} />
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        // onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={ImagePath.Product} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ImagePath.Product} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ImagePath.Product} />
                        </SwiperSlide>
                    </Swiper>
                </Box>
                </Container>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Box>
                        <Span>SKELETON HAND SHIRT</Span>
                        <P>$24.59</P>
                        <Subspan>COLOR</Subspan>
                            {
                                colorsButtons.map((item,index) => {
                                    return <Buttons key={index} background={item} ></Buttons>
                                })
                            }

                        </Box>
                        <Subspan>Size</Subspan>
                        <Div>
                         <Size>S</Size>
                         <Size>M</Size>
                         <Size>L</Size>
                         <Size>XL</Size>
                        </Div>
                        <Button>ADD TO BAG</Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
