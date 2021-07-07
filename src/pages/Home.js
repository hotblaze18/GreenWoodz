import React from 'react';
import Vendors from '../Components/Vendors';
import Navbar from '../Components/Navbar';
import { Container } from '@material-ui/core';


function Home() {
    return (
        <>
            <Navbar />
            <Container>
                <Vendors />
            </Container>
        </>
    );
}

export default Home;