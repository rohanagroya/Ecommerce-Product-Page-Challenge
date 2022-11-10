import React from 'react';
import productthumbail_1 from '../images/image-product-1-thumbnail.jpg';
import dele from '../images/icon-delete.svg';

const CartHolder = ({name ,price, total, quan, setQuan, show, inCart}) => {

  if(!show){
    return null;
  }

  return (
        <div className="cart_holder">

            {quan !== 0 && inCart === true ? (
                <>
                    <h3>Cart</h3>
                    <hr/>
                    <div className="product_holder">
                        <div className='holder_img'>
                            <img src={productthumbail_1} alt="Product_1" />
                        </div>
                        <div className="holder_deatils">
                            <p>{name}</p>
                            <span>${price} X {quan} <span className='holder_total'>${total}</span></span>
                        </div>
                        <div className='del_btn'>
                            <img src={dele} alt='Delete' onClick={() => setQuan(0)}/>
                        </div>
                    </div>
                    <button>Checkout</button>
                </>
            ) : (
                <div className='empty'>Your cart is empty.</div>
            )}
        </div>
  )
}

export default CartHolder