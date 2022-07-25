import styled from '@emotion/styled'
import MaskImage from './../../assets/mask.png'

export const HeroSection = styled.section`
  background-image: url(${MaskImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;