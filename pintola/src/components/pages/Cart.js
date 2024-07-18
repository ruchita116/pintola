import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove, increment, decrement } from "../slice/CartSlice"
const Cart = () => {

  let names = useSelector((state) => state.cart)
  let dispatch = useDispatch()

  let REMOVE = (itemId) => {
    dispatch(remove(itemId))

  }
  // let subtotal=0;
  // if(names.length>0){
  //   names.forEach((item)=>{
  //   subtotal += item.price *item.quantity;
  // });
  // }

  const finaltotal = names.reduce(
    (total, item) => total + item.price * item.quantity, 0);


  let INCR = (itemId) => {
    dispatch(increment(itemId))
  }

  let DECR = (itemId) => {
    dispatch(decrement(itemId))
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(names))
  })
  return (
    <div className='cma'>
    <div className='cmain'>
      <div>

        {names.length === 0 ? <h1>Your cart is empty</h1> : 
        <div className='cartdetails' >
        <h1>Shopping Cart</h1>
        <div className='d-flex'>
          <p>Products</p>
          <p className='ms-4'>Price</p>
          <p className='ms-4'>Quantity</p>
          <p className='me-2'>Total</p>
        </div>
      </div>}
        {names.map((item) => {
      
          let total = item.price * item.quantity
          // let finaltotal =total+total
        
          return (
            <>
                <div className='cart1'>
                  <div className="cart-body">
                    <img src={item.image} className="cartimg" alt="..." />
                    <p className="cart-text ">{item.title}</p>
                    <p className="cart-text"> Rs.{item.price}
                      <br></br>
                      <del>Rs.{item.oldp}</del></p>

                    <div className='btnclicks'>
                      <a href="#" className="btnclic " onClick={() => DECR(item.id)} >-</a>

                      <p className="cartq">{item.quantity}</p>

                      <a href="#" className="btnclick " onClick={() => INCR(item.id)} >+</a>
                    </div>
                    <p className='tocart'>{total}</p>

                    <a href="#" className="btnclick1" onClick={() => REMOVE(item.id)}>⨯</a>

                  </div>
                  
                </div>
                <hr></hr>
                
            </>
          )
        })}
      </div>
      <div className='subtotal'>
      {names.length > 0 && ( <h3>SUBTOTAL:<>Rs.{finaltotal}</></h3>)
      }  
      </div>

    </div>
    </div>
  )
}

export default Cart


