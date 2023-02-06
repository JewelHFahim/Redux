import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Component/ProductCard';

const Cart = () => {
    const cart = useSelector( (state) => state.cart);

    return (
        <div className='w-11/12 mx-auto  grid grid-cols-1 lg:grid-cols-4 gap-6 py-10'>
             {
                cart.sort((a, b)=> a._id - b._id).map(product => <ProductCard product = {product} ></ProductCard>)
             }
        </div>
    );
};

export default Cart;