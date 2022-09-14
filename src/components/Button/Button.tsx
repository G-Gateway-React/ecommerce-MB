import {Buttons} from "./styleButton";

interface CustomProps {
    background : any ;
}

export const Button = (props : CustomProps ) => {
    return (
        <>
            <Buttons background={props.background}></Buttons>
        </>
    )
}