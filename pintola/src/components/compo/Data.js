import React, { useState } from 'react'
import { shopourbest, newlylaunched } from "./Datadetails"
import { useSelector, useDispatch } from 'react-redux'
import { add } from "../slice/CartSlice"
import { Link } from 'react-router-dom'

const Data = () => {

  let [sold, setSold] = useState(shopourbest, newlylaunched)
  let [searchh, setSearchh] = useState("")
  let [pricerate, setPricerate] = useState("")

  let names = useSelector((state) => state.cart)
  let dispatch = useDispatch()

  let ADD = (demo) => {
    // dispatch(add(demo))

    let numm = names.find((totalitem) => totalitem.id === demo.id)
    if (!numm) {
      dispatch(add(demo))
    }
    else {
      alert("product succesfully added in cart..🤩")
    }

  }





  return (


    <div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src="https://pintola.in/cdn/shop/files/Website-Banner-copy3_2500x.jpg?v=1708516056" className="d-block w-100"
              alt="..." />
            <div className="carousel-caption d-none d-md-block">

            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://pintola.in/cdn/shop/files/Desktop_2500x.jpg?v=1704966813" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">

            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://pintola.in/cdn/shop/files/Website_Banner-4_1800x650_1783ac72-3589-4885-a437-536ab0b805fc_2500x.jpg?v=1717571458"
              className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">

            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="contain">
        <div className="shop">Shop Our Best Sellers </div>
        <div className="un"></div>
      </div>
      <div className="datarow ">
        {shopourbest.map((demo) => {
          return (
            <>

              <div className="card-container">
                <div className="card-grid">

                  <div class="card">
                    <Link to={`demo/${demo.id}`}>
                      <div class="discount-badge">4% OFF</div>

                      <img src={demo.image} />
                    </Link>
                    <div class="card-content">
                      <h3>{demo.title}</h3>
                      <p><i>from Rs.{demo.price}</i><span class="original-price">Rs.{demo.oldp}</span></p>
                      <p class="colo">
                        <select id="flavors" class="flavors" name="flavors">
                          <option value="400g"></option>
                          <option value="1Kg">{demo.variants.v_id}</option>
                        </select>
                      </p>
                      <button onClick={() => ADD(demo)}>Add to cart</button>
                    </div>
                  </div>

                </div>
              </div>



            </>
          )


        })}

      </div>





      <div className="contain">
        <div className="shop">Newly Launched</div>
        <div className="un"></div>
      </div>
      <div className="datarow ">
        {newlylaunched.map((demo) => {
          return (
            <>


              <div class="card-container">
                <div class="card-grid2">

                  <div class="card">
                    <Link to={`demo/${demo.id}`}>
                      <div class="discount-badge">5% OFF</div>
                      <img src={demo.image} /></Link>
                    <div class="card-content">
                      <h3>{demo.title}</h3>
                      <p><i>from</i>{demo.price}<span class="original-price">{demo.oldp}</span></p>
                      <p class="colo">
                        <select id="flavors" class="flavors" name="flavors">
                          <option value="350gm">350gm</option>
                          <option value="800gm">800gm</option>
                        </select>
                      </p>
                      <button onClick={() => ADD(demo)}>Add to cart</button>
                    </div>
                  </div>

                </div>
              </div>



            </>
          )


        })}

      </div>
    </div>
  )
}

export default Data