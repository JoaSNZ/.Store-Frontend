import './productlist.css';
import axios from 'axios';
import './header_cart';
import React, { useState, useEffect } from 'react';

    export const Product_List = ( 
    ) => {
        const [cartItems, setCartItems] = useState([]);
        const [data, setData] = useState([]);
        const [total, setTotal] = useState(0); 
        const [countProducts, setCountProducts] = useState(0);
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get('http://localhost:8080/producto');
                    setData(response.data);
                } catch (error) {
                    console.error('Error interno del servidor:', error);
                }
            };

            fetchData();
        }, []);

        const addToCart = product => {
            console.log('Tipo de cartItems:', Array.isArray(cartItems));
            if (cartItems.find(item => item.id === product.id)) {
                const products = cartItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                setTotal(total + product.price * product.quantity);
                setCountProducts(countProducts + product.quantity);
                return setCartItems([...products]);
            }

            setTotal(total + product.price * product.quantity);
            setCountProducts(countProducts + product.quantity);
            setCartItems([...cartItems, product]);
        };

	return (
        
		<div className='container-itemsTest'>
			{data.map(product => (
				<div className='itemTest' key={product.id}>
					<figure>
						<img src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-productTest'>
						<h2>{product.nameProduct}</h2>
						<p className='priceTest'>${product.price}</p>
						<button onClick={() => addToCart(product)}>
							Añadir al carrito
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
