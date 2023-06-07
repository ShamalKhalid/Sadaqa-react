import React from "react";

function AssociatesBody() {
  return (
    <section id="features">
      <div className="AssociatesBodyHeader">
        <h1>Get to know our Associates.</h1>
      </div>
      <div className="row">
        <div className=" specs col-lg-6 col-md-6 col-sm-12">
          <i className="fa-solid fa-circle-check "></i>
          <h3>Empowerment.</h3>
          <p className="AboutUs">
            Sadaqa focuses on empowering individuals and communities by
            providing them with the necessary resources and support to overcome
            challenges and improve their circumstances.
          </p>
        </div>
        <div className="specs col-lg-6 col-md-6 col-sm-12">
          <i className="fa-solid fa-bullseye"></i>
          <h3>Compassion</h3>
          <p className="AboutUs">
            Sadaqa operates with a deep sense of compassion, recognizing the
            struggles faced by those in need and working tirelessly to offer
            them assistance, empathy, and understanding.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AssociatesBody;
