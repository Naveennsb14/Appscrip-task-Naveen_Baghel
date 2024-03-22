import React, { useState } from "react";
import Image from "next/image";
import Arrow from "../public/arrow-left.png";
import HideFilter from "../public/HIDE FILTER.png";
import Showfilter from "../public/SHOW FILTER.png";
import down from "../public/arrow-down.png";

const Filter = ({ show, setShow }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="filter_mainContainer">
        <div className="Filter_container">
          <div className="filter_section">
            <span className="filter_items">3425 ITEMS</span>
            <div className="filter_text" onClick={() => setShow(!show)}>
              <Image src={Arrow} />
              <span>{show?<Image src={HideFilter}/>:<Image src={Showfilter}/>}</span>
            </div>
          </div>
          <div className="recommend_section" onClick={() => setModal(!modal)}>
            <span>RECOMMENDED</span>
            <Image src={down} />
          </div>
        </div>
      </div>
      {modal && (
        <div className="filter_popup">
          <span className="popup_heading">RECOMMENDED</span>
          <span className="popup_text">NEWEST FIRST</span>
          <span className="popup_text">POPULAR</span>
          <span className="popup_text">PRICE: HIGH TO LOW</span>
          <span className="popup_text">PRICE: LOW TO HIGH</span>
        </div>
      )}
    </>
  );
};

export default Filter;
