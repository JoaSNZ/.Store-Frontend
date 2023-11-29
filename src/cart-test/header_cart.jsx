import { useState } from 'react';
import './header_cart.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
export const Header_Cart = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {
	const [cartItems] = useState([]);
	const [active, setActive] = useState(false);

	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	const carritoFiltrado = Object.values(cartItems).map(({ id, cart }) => ({ id, cart }));

	const carritoRegistrado = JSON.stringify(carritoFiltrado);

	const handleCart = async () => {
        if (carritoRegistrado !== "[]") {
            try {
                await axios.post('http://localhost:8080/carrito', {carritoRegistrado});
    
                alert('Articulos comprados con exito');
            } catch (err) {
                alert('Error al realizar la compra');
                console.log("Error al registrar carrito: ", err)
            }    
        } else {
            alert('Seleccionar articulos antes de realizar la compra');
        }
    };

	return (
		<header className='headerTest'>
			<Link to= '/'><h1>Tienda</h1></Link>

			<div className='container-iconTest'>
				<div
					className='container-cart-iconTest'
					onClick={() => setActive(!active)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className='count-productsTest'>
						<span id='contador-productos'>{countProducts}</span>
					</div>
				</div>

				<div
					className={`container-cart-productsTest ${
						active ? '' : 'hidden-cart'
					}`}
				>
					{allProducts.length ? (
						<>
							<div className='row-productTest'>
								{allProducts.map(product => (
									<div className='cart-productTest' key={product.id}>
										<div className='info-cart-productTest'>
											<span className='imagen-producto-carrito'>
												{product.img}
											</span>
											<p className='titulo-producto-carrito'>
												{product.name}
											</p>
											<span className='precio-producto-carrito'>
												${product.price}
											</span>
											<span className='cantidad-producto-carrito'>
												${product.quantity}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-totalTest'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>

							<button className='btn-clear-all' onClick={handleCart}>
								Comprar
							</button>

							<button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className='cart-empty'>El carrito está vacío</p>
					)}
				</div>
			</div>
		</header>
	);
};
