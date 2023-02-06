import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Component/ProductCard';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const state = useSelector((state)=>state);

    console.log(state)

    return (
        <div className='w-11/12 mx-auto  grid grid-cols-1 lg:grid-cols-4 gap-6 py-10'>
            {
                products.map(product => <ProductCard key = {product._id}  product = {product} ></ProductCard>)
            }
        </div>
    );
};

export default Home;