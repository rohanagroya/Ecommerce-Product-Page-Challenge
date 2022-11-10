import React from 'react'
import productthumbail_1 from '../images/image-product-1-thumbnail.jpg'
import productthumbail_2 from '../images/image-product-2-thumbnail.jpg'
import productthumbail_3 from '../images/image-product-3-thumbnail.jpg'
import productthumbail_4 from '../images/image-product-4-thumbnail.jpg'
import product_1 from '../images/image-product-1.jpg'
import plus from '../images/icon-plus.svg'
import minus from '../images/icon-minus.svg'
import cart from '../images/icon-cartdark.svg'
import next from '../images/icon-next.svg'
import nextdark from '../images/icon-nextdark.svg'
import prev from '../images/icon-previous.svg'
import prevdark from '../images/icon-previousdark.svg'
import Slider from './SliderData'

const Product = ({theme, quan, setQuan, name, price, total, inCart, setInCart, setShowImage, current, nextSlide, prevSlide}) => {


  return (
    <main className='product'>

        <div className="left_side">
            <div className="image">
                <img src={product_1} alt="product_1" />
            </div>

            <div className="image_mob">
                {theme==='light-theme'?(<img src={prev} alt="Previous" className='previcon' onClick={prevSlide}/>) : (<img src={prevdark} alt="Previous" className='previcon' onClick={prevSlide}/>)}
                {theme==='light-theme'?(<img src={next} alt="Next" className='nexticon' onClick={prevSlide} />) : (<img src={nextdark} alt="Next" className='nexticon' onClick={prevSlide} />)}
                {/* <div className='mobimg active'><img src={product_1} alt="product_1" className='mobimg active'/></div> */}
                {Slider.map((slide,index)=>{
                    return(
                        <div className={current===index ? 'mobimg active' : 'mobimg'} key={index}>
                            {current===index && <img src={slide.image} alt='products'/>}
                        </div>
                    )
                })}
            </div>
            <div className="thumbnails">
                <div className='thumb_img' onClick={()=>setShowImage(true)}><img src={productthumbail_1} alt="product_1" /></div>
                <div className='thumb_img' onClick={()=>setShowImage(true)}><img src={productthumbail_2} alt="product_2" /></div>
                <div className='thumb_img' onClick={()=>setShowImage(true)}><img src={productthumbail_3} alt="product_3" /></div>
                <div className='thumb_img' onClick={()=>setShowImage(true)}><img src={productthumbail_4} alt="product_4" /></div>
            </div>
        </div>

        <div className="right_side">
            <p className='company_name'>SNEAKER COMPANY</p>
            <h1 className='prod_name'>{name}</h1>
            <p className='prod_desc'>These low-profile sneakers are your perfect casual wear companion. Featuring
                a durable rubber outer sole. they'll withstand everything the weather can offer.
            </p>
            <h2 className='prod_price'>$125.00 <span>50%</span></h2>
            <p className='prod_disc'><del>${price}</del></p>
            
            <div className='prod_add'>
                <div className="quantity">
                    <img src={plus} alt="+" onClick={() => setQuan(quan + 1)}/>
                    {quan}
                    <img src={minus} alt="-" onClick={quan >= 0 ? (() => setQuan(quan - 1)) : (setQuan(0))}/>
                </div>

                <button className='prod_btn'>
                    <img src={cart} alt="cart" />
                    <p onClick={()=>setInCart(true)}>Add to cart</p>
                </button>
            </div>
        </div>

    </main>
  )
}

export default Product