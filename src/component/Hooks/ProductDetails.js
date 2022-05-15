import { useEffect, useState } from 'react';

const ProductDetails = productId => {
    const [product, setProduct] = useState({});
    console.log(product);

    useEffect(() => {
        const url = `https://evening-escarpment-39400.herokuapp.com/product/${productId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [productId]);
    return [product]
}

export default ProductDetails;


