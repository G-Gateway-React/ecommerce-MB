import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container} from "@mui/material";
import {Pargraph, Title} from "./styleSignup-Form";

export default function BasicTextFields() {
    return (
        <Container maxWidth="md">
            <Title>SIGN UP FOR UPDATES</Title>
            <Pargraph>Sign up for exclusive early sale access and tailored new arrivals.</Pargraph>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </Box>
        </Container>
    );
}
