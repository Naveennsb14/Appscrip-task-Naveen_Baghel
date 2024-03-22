import React, { useEffect, useState } from "react";
import Image from "next/image";
import Checkbox from "../public/checkbox.png";
import Arrow from "../public/arrow-left.png";
import heart from '../public/heart.png'

export const Products = ({show, setShow}) => {

  const [list, setList]= useState([]);

  const getProducts = async ()=>{
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      console.log('products', products)
      setList(products)
      
    } catch (error) {
      console.log('error', error)
      
    }
  }
  useEffect(()=>{
    console.log("useEffect Called");
    getProducts();

  },[])
  
  return (
    <div className="product_mainContainer">
      <div className="product_Container">
        {show && <div className="product_SideBar">
          <div className="product_customize">
            <Image src={Checkbox} alt="checkbox" />
            <span className="product_text">CUSTOMIZABLE</span>
          </div>
          <hr />
          <div className="product_category">
            <div className="product_type">
              <span>IDEAL FOR</span>
              <h5>All</h5>
            </div>
            <Image src={Arrow} />
          </div>
          <hr />
          <div className="product_category">
            <div className="product_type">
              <span>OCASSION</span>
              <h5>All</h5>
            </div>
            <Image src={Arrow} />
          </div>
          <hr />
          <div className="product_category">
            <div className="product_type">
              <span>WORK</span>
              <h5>All</h5>
            </div>
            <Image src={Arrow} />
          </div>
          <hr />
          <div className="product_category">
            <div className="product_type">
              <span>FABRIC</span>
              <h5>All</h5>
            </div>
            <Image src={Arrow} />
          </div>
          <hr />
          <div className="product_category">
            <div className="product_type">
              <span>SEGMENT</span>
              <h5>All</h5>
            </div>
            <Image src={Arrow} />
          </div>
          <hr />
          <div className="product_category">
            <div className="product_type">
              <span>SUITABLE FOR</span>
              <h5>All</h5>
            </div>
            <Image src={Arrow} />
          </div>
          <hr />
          <div className="product_category">
            <div className="product_type">
              <span>RAW MATERIALS</span>
              <h5>All</h5>
            </div>
            <Image src={Arrow} />
          </div>
          <hr />
          <div className="product_category">
            <div className="product_type">
              <span>PATTERN</span>
              <h5>All</h5>
            </div>
            <Image src={Arrow} />
          </div>
        </div>}
        <div className="product_ProductItems">
          
          {list.map((movies, index)=>(
            <div className="product_card" key={index}>
            <div className="productImage">
              <img src={movies.image} width={168} height={224}/>
            </div>
            <div className="product_description">
              <span className="product_Name">{movies.category}</span>
              <div className="product_desc">
              <span className="Product_otherDesc">
                login/signup for Pricing
              </span>
              <Image src={heart}/>
              </div>
            </div>
          </div>
          ))}

        </div>
      </div>
    </div>
  );
};
