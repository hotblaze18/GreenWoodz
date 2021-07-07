import React, {useEffect, useState} from 'react';
import VendorCard from './VendorCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    gridItem: {
        height: '100%',
    }
})

function Vendors() {

    const classes = useStyles();

    const [vendors, setVendors] = useState([]); 

    useEffect(() => {
        fetch("http://localhost:3001/vendors")
            .then((res) => res.json())
            .then((data) => setVendors(data));
    }, [])

    return (
        <>
            <Grid container direction="row" spacing={5}>
            {vendors.map(({id, title, img, services}) => (
                <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
                    <VendorCard key={id} title={title} img={img} services={services} />
                </Grid>
            ))}
            </Grid>
        </>
    );
}

export default Vendors;