import styled from '@emotion/styled'

export const ImageParent = styled.div`
    width: 32%;
    position: relative;
    height: 400px;
    &:hover button{
        visibility: visible;

    }
    .overlay{
        transition: all .3s ease-in-out;
        z-index: 2;
    }

    &:hover .overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .3);
        z-index: 2;
        border-radius: 4px
    }

`
export const Img = styled.img`
    width: 100%;
    position: absolute;
    height: 100%;
    border-radius: 4px;
    z-index: 1
`

export const Button = styled.button`
    position: absolute;
    background: none;
    border: none;
    outline: none;
    color: #fff;
    padding: 8px 20px;
    font-size: 30px;
    bottom: 30px;
    display: flex;
    justify-content: center;
    visibility: hidden;
    transition: all .3s ease-in-out;
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
    z-index: 3;


`