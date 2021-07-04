import React, {useEffect, useState} from 'react';
import VendorCard from './VendorCard';

function Vendors() {

    const [vendors, setVendors] = useState([]); 

    useEffect(() => {
        fetch("http://localhost:3001/vendors")
            .then((res) => res.json())
            .then((data) => setVendors(data));
    }, [])

    return (
        <>
            {vendors.map(({id, title, img, services}) => (
                <VendorCard key={id} title={title} img={img} services={services} />
            ))}
        </>
    );
}

export default Vendors;