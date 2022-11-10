import React from 'react'
// import product_1 from '../images/image-product-1.jpg';
import cross from '../images/icon-closedark.svg';
import next from '../images/icon-next.svg';
import prev from '../images/icon-previous.svg';
// import productthumbail_1 from '../images/image-product-1-thumbnail.jpg'
// import productthumbail_2 from '../images/image-product-2-thumbnail.jpg'
// import productthumbail_3 from '../images/image-product-3-thumbnail.jpg'
// import productthumbail_4 from '../images/image-product-4-thumbnail.jpg'
import Slider from './SliderData';



function ImageCarousel({showImage,setShowImage,theme,setCurrent,current,prevSlide,nextSlide,length}) {


    if(!showImage){
        return null;
    }

  return (
    <div className='imagecarousel'>
        <div className="imgcarousel_container">
          <img src={cross} alt="close" className='cross' onClick={()=>setShowImage(false)}/>
          <img src={next} alt="next" className='nexticn' onClick={nextSlide}/>
          <img src={prev} alt="prev" className='previcn' onClick={prevSlide}/>
          {Slider.map((slide,index)=>{
            return(
              <div className={current===index ? 'imgcon active' : 'imgcon'} key={index}>
                {current===index && <img src={slide.image} alt='products'/>}
              </div>
            )
          })}
        </div>
        <div className='imgcarousel_thumb'>
          {/* <img src={productthumbail_1} alt='product_1' />
          <img src={productthumbail_2} alt='product_1' />
          <img src={productthumbail_3} alt='product_1' />
          <img src={productthumbail_4} alt='product_1' /> */}
          {Slider.map((slide,index)=>{
            return <img src={slide.thumb_img} alt='product' key={index} onClick={()=> setCurrent(index)}/>
          })}
        </div>
    </div>
  )
}

export default ImageCarousel
