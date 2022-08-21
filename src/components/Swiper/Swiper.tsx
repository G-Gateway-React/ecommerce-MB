import React, { useRef, useState } from "react";
import {ImagePath} from "../ImagePath/ImagePath";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './style.css'
import {Box, Span, P, Subspan, Size, Div, Button} from './styleSwiper'

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import {Container, Grid} from "@mui/material";
import {Buttons} from "../Button/styleButton";

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
                            // "--swiper-navigation-color": "#fff",
                            // "--swiper-pagination-color": "#fff",
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
                            <Buttons background={'red'} ></Buttons>
                            <Buttons background={'yellow'} ></Buttons>
                            <Buttons background={'green'} ></Buttons>
                            <Buttons background={'#66'} ></Buttons>
                            <Buttons background={'#92a039'} ></Buttons>
                            <Buttons background={'#59a5de'} ></Buttons>
                            <Buttons background={'#b0ff00'} ></Buttons>
                            <Buttons background={'#2bf1b6'} ></Buttons>
                            <Buttons background={'#9126f8'} ></Buttons>
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
