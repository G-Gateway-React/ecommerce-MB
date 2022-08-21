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
`;


export const HeroH1 = styled.h1`
font-size:80px;
line-height:60px;
display:flex;
flex-direction:column;
color: #fff;
margin: 0;
span{
  color:#D1094B
}
`

export const HeroP = styled.p`
font-size:29px;
line-height:37px;
color:#fff;
margin: 0;
`


export const Button = styled.button`
    width: 300px;
    height: 50px;
    margin: 0 auto;
   cursor: pointer;
   background: linear-gradient(92.3deg, rgba(255, 255, 255, 0.7) 1.85%, rgba(255, 255, 255, 0.3) 100%);
   border: 2px solid #FFFFFF;

   &:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
 }   
`

