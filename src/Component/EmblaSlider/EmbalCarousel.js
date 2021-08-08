import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from './EmbalCarouselButton';
import { useEmblaCarousel } from "embla-carousel/react";
import {connect} from 'react-redux';
import {selectorProducts} from '../../Redux/selector/product-selector';
import {AddItemsAction} from '../../Redux/AddToCart/add-action';
import {Cart,CartIcon,AddCart} from './EmbalCarousel-style';
import { Link } from 'react-router-dom';
import "./embla.css";
import 'react-toastify/dist/ReactToastify.css';
import{Background} from './EmbalCarousel-style'


const EmblaCarousel = ({ product, products , AddItemsAction ,AddNotify}) => {


  console.log("product on slider :", products)
  const productsSlider = products.filter(item => item.id !== product.id )
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 2,
    skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">

          {     
                  productsSlider.map(product => {
                    return(
                     
                          <div className="embla__slide"  key={product.id}>
                             <Link to= {`/product/${product.id}`}>
                             <div className="image">
                                <img  src={product.image} alt="product"/>
                            </div> 
                             </Link>
                            <div className ="discrip">
                              <h4>{product.title}</h4>
                              <h4>$ {product.price}</h4>
                            </div>
                            <Cart className="margin" onClick={() => {AddItemsAction(product);  AddNotify() }} >
                              <CartIcon ><i className="fa fa-shopping-cart width"></i></CartIcon>    
                              <AddCart className="width" ><h3>Add to cart</h3></AddCart>
                            </Cart>
                          </div>
    
                       
                    )
                })
          }
        </div>
      </div>

      <Background/>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <Background className="right"/>
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      
     
    </div>
  );
};

const mapStateToProps = state => ({
  products: selectorProducts(state)
  });

const mapDispatchToProps = dispatch => ({
    AddItemsAction: (product) => dispatch(AddItemsAction(product)) 
})
export default connect(mapStateToProps,mapDispatchToProps)(EmblaCarousel);
