import React from "react";
import { NavLink } from "react-router-dom";
const HomeAbout = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1> {props.name} <strong className="brand-name"> RATNA NIDHI CHARITABLE TRUST </strong></h1>
                <h6> Ratna Nidhi Charitable Trust, is a registered charity that was established over 25 years ago by Mr Mahendra Mehta. It was set up in order to tackle the problems of poverty in Mumbai, especially amongst young children. From its humble origins as a family institution it has grown rapidly, and now its projects cover a wide range of activities located in both India and other developing countries, including Afghanistan, Sudan, Kenya and Burundi. </h6>
                <div className="mt-3">
                  <NavLink className="btn-get-started" to={props.visit} role="button">{props.btname}</NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
}
export default HomeAbout;