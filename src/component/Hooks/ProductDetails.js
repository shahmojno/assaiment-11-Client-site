import { useEffect, useState } from 'react';

const ProductDetails = productId => {
    const [product, setProduct] = useState({});
    console.log(product);

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [productId]);
    return [product]
}

export default ProductDetails;


