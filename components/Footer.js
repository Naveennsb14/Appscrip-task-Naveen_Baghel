import React from "react";
import Image from "next/image";
import flag from "../public/United States of America (US).png";
import social from "../public/Frame 28.png";
import cards from "../public/Frame 136278.png";
export const Footer = () => {
  return (
    <>
      <div className="Footer_Container">
        <div className="upper_Footer">
          <div className="upperFooter_LHS">
            <div className="Footer_Mailtext">
              <span className="footer_Maintext">BE THE FIRST TO KNOW</span>
              <span className="footer_signuptext">
                Sign up for update from meta muse
              </span>
            </div>
            <div className="footer_Inputcontainer">
              <input
                type="text"
                className="footer_Inputbox"
                placeholder="Enter your e-mail..."
              />
              <button className="footer_InputSubscribeBtn">SUBSCRIBE</button>
            </div>
          </div>
          <div className="upperFooter_RHS">
            <span className="upperFooter_ContactUs">CONTACT US</span>
            <span className="upperFooter_ContactNumber">+44 221 133 5360</span>
            <span className="upperFooter_ContactEmail">
              customercare@metamuse.com
            </span>
            <span className="upperFooter_Currency">CURRENCY</span>
            <div className="upperFooter_country">
              <Image src={flag} />
              <span className="upperFooter_countryDesc">+USD</span>
            </div>
            <span className="upperFooter_currencyDetails">
              Transaction will be completed in Euros and a currency reference is
              available on hover
            </span>
          </div>
        </div>
        <hr className="Footer_lineBreak" />
        <div className="lower_Footer">
          <div className="footer_first">
            <span className="footer_heading">metta muse</span>
            <span className="footer_list">About us</span>
            <span className="footer_list">Stories</span>
            <span className="footer_list">Artisans</span>
            <span className="footer_list">Boutiques</span>
            <span className="footer_list">Contact us</span>
            <span className="footer_list">Eu compliance docs</span>
          </div>
          <div className="footer_second">
            <span className="footer_heading">QUICK LINKS</span>
            <span className="footer_list">Orders and shopping</span>
            <span className="footer_list">Join/login as seller</span>
            <span className="footer_list">Payment & Pricing</span>
            <span className="footer_list">Return & Refunds</span>
            <span className="footer_list">FAQ's</span>
            <span className="footer_list">Privacy Policy</span>
            <span className="footer_list">Terms & condition</span>
          </div>
          <div className="footer_third">
            <span className="footer_thirdfollowText">FOLLOW US</span>
            <div className="footer_publicProfile">
              <Image src={social} />
            </div>
            <div className="footer__cardAccepts">
              <span>meta muse ACCEPTS</span>
              <Image src={cards} />
            </div>
          </div>
        </div>
        <footer className="footer__copyrightText">
          Copyright © 2023 mettamuse. All rights reserved.
        </footer>
      </div>
    </>
  );
};
