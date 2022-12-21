import './ProductCard.scss'
import ropa from '@assets/ropa.jpg'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react'

const ProductCard = ({ product }) => {

    const [likedProduct, setLikedProduct] = useState(true);

    return (
        <div className='Card'>
            <div className="Card-header">
                <img className='Card-product-image' src={product.productoImagen} alt="" />
                <span className='Card-product-name'>Category</span>
                <div className='Card-product-icon'>
                    {
                        likedProduct ? <AiFillHeart className='Card-product-heart-liked' /> : <AiOutlineHeart className='Card-product-heart' />
                    }
                </div>
            </div>
            <div className="Card-body">
                <div className='Card-product-description'>
                    <h3>{product.productoNombre}</h3>
                    <p>{product.productoDescripcion}</p>
                </div>
                <div className='Card-product-price'>
                    <button className='Card-price-button'>${product.productoPrecio}</button>
                </div>
            </div>
        </div>
    )
}

export { ProductCard };