import React from "react";

function WhoWeAre() {
  return (
    <section id="WhoWeAre">
    <div>
      <h1 className="WhoWeAreHeader">
        What is Sadaqa?
      </h1>
    </div>
    <div id="WhatSadaqa">
      <p>
        Sadaqa serves as a platform where individuals can make donations to various charitable organizations and also create fundraising campaigns for different causes.
        As an online donation website, Sadaqa provides a digital platform for donors to contribute funds easily and securely.Sadaqa offers features such as customizable donation amounts, options to select specific charities or causes, and provides transparency by sharing information on how the donated funds are utilized.
      </p>
    </div>
      <div className="row">
        <div className=" specs col-lg-4 col-md-4 col-sm-12">
          <i className="fa-solid fa-circle-check "></i>
          <h3>Empowerment.</h3>
          <p className="AboutUs">
            Sadaqa focuses on empowering individuals and communities by
            providing them with the necessary resources and support to overcome
            challenges and improve their circumstances.
          </p>
        </div>
        <div className="specs col-lg-4 col-md-4 col-sm-12">
          <i className="fa-solid fa-bullseye"></i>
          <h3>Compassion</h3>
          <p className="AboutUs">
            Sadaqa operates with a deep sense of compassion, recognizing the
            struggles faced by those in need and working tirelessly to offer
            them assistance, empathy, and understanding.
          </p>
        </div>

        <div className=" specs col-lg-4 col-md-4 col-sm-12">
          <i className="fa-solid fa-heart"></i>
          <h3>Impact</h3>
          <p className="AboutUs">
            Sadaqa strives to make a significant impact on the community by
            effectively utilizing donated funds to bring about positive change
            and improve the lives of individuals and families who require
            support the most.
          </p>
        </div>
      </div>
    </section>
  );
}
export default WhoWeAre;
