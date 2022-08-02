import styled from "@emotion/styled";

export const ImageList = styled.ul`
    list-style: none;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-weight: 600;
    margin: -50px;
    li{
        text-transform: capitalize;
    }
`

export const CategoryList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 50px
`

export const TypographyHeading= styled.h2`
display: flex;
justify-content: center;
text-align: center;
font-size: 64px;
span{
    background: #D1094B;
    color: #fff;
    padding: 0px 0 0px 10px;
}
`