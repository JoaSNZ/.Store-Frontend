import './productlist.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Product_List() {
	const [cartItems, setCartItems] = useState([]);
    const [data, setData] = useState([]);

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

	const addToCart = (product) => {
        if (cartItems[product.id]) {
            const updatedCart = { ...cartItems };
            updatedCart[product.id].quantity += 1;
            setCartItems(updatedCart);
        } else {
            setCartItems({
            ...cartItems,
            [product.id]: { ...product, quantity: 1 },
            });
        }
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
