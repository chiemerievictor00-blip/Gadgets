import React from "react";
import Advert from "../Components/Advert.jsx";
import "../Styles/Heropage.css";
import { Link } from "react-router-dom";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { LuCircleArrowOutDownLeft } from "react-icons/lu";
import { MdPayments } from "react-icons/md";
import { MdOutlineGppGood } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaFileAudio } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { GiCircuitry } from "react-icons/gi";
import { VscTelescope } from "react-icons/vsc";
import { motion } from "framer-motion";
import iphone from "../assets/iphone.jpg";
import ps5 from "../assets/ps5.jpg";
import headset from "../assets/headset.jpg";
import applewatch from "../assets/applewatch.jpg";
import osmo from "../assets/osmo.jpg";
import drone from "../assets/drone.jpg";
import earbud from "../assets/earbud.jpg";
import samsung from "../assets/samsung.jpg";
import jbl from "../assets/JBL.jpg";
import ScrollToTop from "../Ui/Scrolltop.jsx";

const Heropage = () => {
  return (
    <>
      <div className="heropage">
        <div className="heropage-content">
          <div className="writings">
            <h1>Upgrade Your Tech Life Today</h1>
            <p>
              Find cutting-edge tech designed to simplify your everyday life.{" "}
              <br />
              shop the newest smartphones, wearables, and accessories at <br />
              unbeatable prices.
            </p>
          </div>

          <div className="heropage-btn">
            <div className="btn1">
              <Link to="/Products">
                <button>Shop Now</button>
              </Link>
            </div>
            <div className="btn2">
              <Link to="/Deals">
                {" "}
                <button>Explore Deals</button>
              </Link>
            </div>
          </div>

          <div className="heropage-ratings">
            <div className="rating1">
              <h2>4.8/5</h2>
              <p>Customer Satisfaction</p>
            </div>
            <div className="rating2">
              <h2>100K+</h2>
              <p>Products Sold</p>
            </div>
            <div className="rating3">
              <h2>500+</h2>
              <p>Brands Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* shop by categories */}

      <div className="header-span">
        <span>[CATEGORIES]</span>
      </div>

      <div className="header1">
        <h1>Shop by Category</h1>
        <Link to={"/Products"}>View all</Link>
      </div>

      <div className="categories-box">
        <div className="cat1">
          <span>
            <GiCircuitry />
          </span>
          <h4>Consumer Electronics</h4>
          <div className="info">
            <p>
              <span>41</span>Products
            </p>
          </div>
          <Link to="/Products">
            <button className="shop-btn">Buy Now</button>
          </Link>
        </div>

        <div className="cat1">
          <span>
            <FaLaptop />
          </span>
          <h4>Laptops</h4>
          <div className="info">
            <p>
              {" "}
              <span>32</span>Products
            </p>
          </div>
          <Link to="/Products">
            <button className="shop-btn">Buy Now</button>
          </Link>
        </div>

        <div className="cat1">
          <span>
            <FaFileAudio />
          </span>
          <h4>Audio</h4>
          <div className="info">
            <p>
              {" "}
              <span>64</span>Products
            </p>
          </div>
          <Link to="/Products">
            <button className="shop-btn">Buy Now</button>
          </Link>
        </div>

        <div className="cat1">
          <span>
            <IoHeadset />
          </span>
          <h4>Wearables</h4>
          <div className="info">
            <p>
              {" "}
              <span>24</span>Products
            </p>
          </div>
          <Link to="/Products">
            <button className="shop-btn">Buy Now</button>
          </Link>
        </div>

        <div className="cat1">
          <span>
            <IoGameControllerOutline />
          </span>
          <h4>Gaming</h4>
          <div className="info">
            <p>
              <span>41</span>Products
            </p>
          </div>
          <Link to="/Products">
            <button className="shop-btn">Buy Now</button>
          </Link>
        </div>

        <div className="cat1">
          <span>
            <FaCameraRetro />
          </span>
          <h4>Cameras</h4>
          <div className="info">
            <p>
              <span>19</span>Products
            </p>
          </div>
          <Link to="/Products">
            <button className="shop-btn">Buy Now</button>
          </Link>
        </div>

        <div className="cat1">
          <span>
            {" "}
            <FaTv />
          </span>
          <h4>Smart TV</h4>
          <div className="info">
            <p>
              <span>15</span>Products
            </p>
          </div>
          <Link to="/Products">
            <button className="shop-btn">Buy Now</button>
          </Link>
        </div>

        <div className="cat1">
          <span>
            <VscTelescope />
          </span>
          <h4>Travel Devices</h4>
          <div className="info">
            <p>
              <span>20</span>Products
            </p>
          </div>
          <Link to="/Products">
            <button className="shop-btn">Buy Now</button>
          </Link>
        </div>
      </div>

      {/* trending products */}

      <div className="header-span">
        <span>[TRENDING PRODUCTS]</span>
      </div>

      <div className="trendhead">
        <h1>Trending Now</h1>
        <Link to={"/Products"}>View all</Link>
      </div>

      <div className="productbox">
        <div className="product-card">
          <span className="badge">NEW</span>

          <div className="image-box">
            <img src={iphone} alt="iphone 12 pro max phone" />
          </div>

          <div className="content">
            <p className="category">PHONES</p>
            <h2 className="title">iphone 12 pro max</h2>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>(120)</span>
            </div>

            <div className="bottom">
              <p className="price">
                $2199 <span>$2499</span>
              </p>
              <button className="cart-btn">+ CART</button>
            </div>
          </div>
        </div>

        <div className="product-card">
          <span className="badge">HOT</span>

          <div className="image-box">
            <img src={ps5} alt="ps5 controller" />
          </div>

          <div className="content">
            <p className="category">GAMES</p>
            <h2 className="title">PS 5 Controller</h2>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>(220)</span>
            </div>

            <div className="bottom">
              <p className="price">
                $1900<span>$2000</span>
              </p>
              <button className="cart-btn">+ CART</button>
            </div>
          </div>
        </div>

        <div className="product-card">
          <span className="badge">SALE</span>

          <div className="image-box">
            <img src={headset} alt="headset" />
          </div>

          <div className="content">
            <p className="category">AUDIO</p>
            <h2 className="title">Apple boom headset</h2>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>(320)</span>
            </div>

            <div className="bottom">
              <p className="price">
                $1500<span>$1800</span>
              </p>
              <button className="cart-btn">+ CART</button>
            </div>
          </div>
        </div>

        <div className="product-card">
          <span className="badge">HOT</span>

          <div className="image-box">
            <img src={applewatch} alt="apple watch" />
          </div>

          <div className="content">
            <p className="category">WAREABLES</p>
            <h2 className="title">Apples series 5 smart watch</h2>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>(520)</span>
            </div>

            <div className="bottom">
              <p className="price">
                $2500<span>$3000</span>
              </p>
              <button className="cart-btn">+ CART</button>
            </div>
          </div>
        </div>

        <div className="product-card">
          <span className="badge">HOT</span>

          <div className="image-box">
            <img src={jbl} alt="jbl speaker" />
          </div>

          <div className="content">
            <p className="category">AUDIO</p>
            <h2 className="title">JBL camo speaker</h2>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>(520)</span>
            </div>

            <div className="bottom">
              <p className="price">
                $1400<span>$2000</span>
              </p>
              <button className="cart-btn">+ CART</button>
            </div>
          </div>
        </div>

        <div className="product-card">
          <span className="badge">HOT</span>

          <div className="image-box">
            <img src={samsung} alt="samsung phone" />
          </div>

          <div className="content">
            <p className="category">PHONES</p>
            <h2 className="title">Samsung S26 Ultra</h2>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>(1000)</span>
            </div>

            <div className="bottom">
              <p className="price">
                $6500<span>$8000</span>
              </p>
              <button className="cart-btn">+ CART</button>
            </div>
          </div>
        </div>

        <div className="product-card">
          <span className="badge">HOT</span>

          <div className="image-box">
            <img src={earbud} alt="apple earbuds" />
          </div>

          <div className="content">
            <p className="category">AUDIO</p>
            <h2 className="title">Apple earbuds</h2>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>(100)</span>
            </div>

            <div className="bottom">
              <p className="price">
                $350<span>$500</span>
              </p>
              <button className="cart-btn">+ CART</button>
            </div>
          </div>
        </div>

        <div className="product-card">
          <span className="badge">NEW</span>

          <div className="image-box">
            <img src={osmo} alt="osmo camera" />
          </div>

          <div className="content">
            <p className="category">TRAVELS</p>
            <h2 className="title">Dji Osmo camera</h2>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>(210)</span>
            </div>

            <div className="bottom">
              <p className="price">
                $700<span>$1000</span>
              </p>
              <button className="cart-btn">+ CART</button>
            </div>
          </div>
        </div>
      </div>

      {/* advert */}
      <Advert />
      <ScrollToTop />

      {/* 
        <div className="services-head">
            <h1>Our Premium Services</h1>
        </div> */}

      <div className="services">
        {/* 
            <div className="service1">
                <span><LiaShippingFastSolid /></span>
                <h6>Free Shipping</h6>
                <p>Enjoy free shipping on all orders, no minimum purchase required.</p>
            </div>

            <div className="service1">
                <span><BiSupport /></span>
                <h6>24/7 Support</h6>
                <p>Our support team is here to assist you anytime, day or night.</p>
            </div> */}
        {/* 
            <div className="service3">
                <span><LuCircleArrowOutDownLeft /></span>
                <h6>Easy Returns</h6>
                <p>Not satisfied? Return your purchase within 30 days for a full refund.</p>
            </div> */}

        {/* <div className="service1">
                <span><MdPayments /></span>
                <h6>Secure Payments</h6>
                <p>Shop with confidence using our secure and encrypted payment options.</p>
            </div>

            <div className="service1">
                <span><MdOutlineGppGood /></span>
                <h6>2years Warranty</h6>
                <p>Protect your purchase with our comprehensive two-year warranty coverage.</p>
            </div> */}
      </div>
    </>
  );
};
export default Heropage;
