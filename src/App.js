import { useState } from "react";
import CartHolder from "./components/CartHolder";
import Header from "./components/Header";
import ImageCarousel from "./components/ImageCarousel";
import Product from "./components/Product";
import Slider from "./components/SliderData";


function App() {

  const [theme, setTheme] = useState("light-theme");
  const [quan, setQuan] = useState(0)
  const [show, setShow] = useState(false)
  const [inCart, setInCart] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const [current, setCurrent] = useState(0)

  const length = Slider.length;


  const toggleTheme = () => {
    theme === "dark-theme" ? (setTheme("light-theme")) : (setTheme("dark-theme"));
  }

  const nextSlide = () => {
    setCurrent(current===length-1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const name = 'Fall Limited Edition Sneakers';
  const price = 125.00 ;
  const total = price * quan;

  console.log(current)

  return (
    <div className={`App ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme} quan={quan} show={show} setShow={setShow} inCart={inCart} />
      <Product theme={theme} quan={quan} setQuan={setQuan} name={name} price={price} total={total} inCart={inCart} setInCart={setInCart} setShowImage={setShowImage} current={current} setCurrent={setCurrent} nextSlide={nextSlide} prevSlide={prevSlide} length={length}/>
      <CartHolder name={name} price={price} total={total} quan={quan} setQuan={setQuan} show={show} inCart={inCart}/>
      <ImageCarousel showImage={showImage} setShowImage={setShowImage} theme={theme} current={current} setCurrent={setCurrent} nextSlide={nextSlide} prevSlide={prevSlide} length={length}/>
    </div>
  );
}

export default App;
