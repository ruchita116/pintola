import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../slice/CartSlice';
import { shopourbest, newlylaunched } from '../compo/Datadetails';
import { increment, decrement } from "../slice/CartSlice"
const Singleproduct = () => {
    let names = useSelector((state) => state.cart);
    let dispatch = useDispatch();
    let { id } = useParams();
    let [selectedSize, setSelectedSize] = useState('');
    let [selectedFlavor, setSelectedFlavor] = useState('');

    let ADD = (demo) => {
        let numm = names.find((totalitem) => totalitem.id === demo.id);
        if (!numm) {
            dispatch(add(demo));
        } else {
            alert('Product successfully added to cart..🤩');
        }
    };
    let INCR = (itemId) => {
        dispatch(increment(itemId))
    }

    let DECR = (itemId) => {
        dispatch(decrement(itemId))
    }
    let demo = shopourbest.find((filterID) => filterID.id == id) || newlylaunched.find((filterID) => filterID.id == id);

    if (!demo) {
        return <div>Product not found</div>;
    }

    let variants = demo.variants || demo.variants;

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleFlavorChange = (flavor) => {
        setSelectedFlavor(flavor);
    };

    let selectedVariant = variants.find(
        (variant) => variant.size === selectedSize && (!variant.flavor || variant.flavor === selectedFlavor)
    );

    // Get unique sizes and flavors
    const uniqueSizes = [...new Set(variants.map((variant) => variant.size))];
    const uniqueFlavors = [...new Set(variants.map((variant) => variant.flavor).filter(flavor => flavor))];

    return (



        <div >
            <div className='pbody'>
                <img src={demo.image} className='card-img-top' alt='...' />
                <div className='pdetails'>
                    <div class="dbadge">4% OFF</div>
                    <h4 >{demo.title}</h4>
                    <div className='proprice'> <p ><i>from Rs.{demo.price}</i><span class="original-price">Rs.{demo.oldp}</span></p></div>
                    {variants && (
                        <>
                            <div className='mt-4'>
                                <label className='form-label'>Size:</label>
                                <div className='button-group'>
                                    {uniqueSizes.map((size) => (
                                        <button
                                            key={size}
                                            className={`btn ${selectedSize === size ? 'btn' : 'btn-o'}`}
                                            onClick={() => handleSizeChange(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {uniqueFlavors.length > 0 && (
                                <div className='mt-4'>
                                    <label className='form-label'>variant:</label>
                                    <div className='button-group'>
                                        {uniqueFlavors.map((flavor) => (
                                            <button
                                                key={flavor}
                                                className={`btn ${selectedFlavor === flavor ? 'btn' : 'btn'}`}
                                                onClick={() => handleFlavorChange(flavor)}
                                            >
                                                {flavor}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}



                    <p >Price:
                        {selectedVariant ? selectedVariant.price : demo.price}
                    </p>

                    <div className='mainbtn'>
                        <a href="#" className="incr" onClick={() => DECR(demo.id)} >-</a>
                        <a href="#" className="pq " >{demo.quantity}</a>
               

                        <a href="#" className="decr " onClick={() => INCR(demo.id)} >+</a>
                    </div>
                    <button className='spadd'> <a href='#' onClick={() => ADD(selectedVariant || demo)} >
                        ADD TO CART
                    </a></button>
                    <button className='spadd'> <a href='#' onClick={() => ADD(selectedVariant || demo)} >
        buy now
                </a></button>
                </div>
            </div>

        </div>

    );
};

export default Singleproduct;
