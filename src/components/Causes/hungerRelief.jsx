import React from "react";
function hungerRelief() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>HUNGER IS A PROBLEM. WE CAN HELP!</h1>
            <p>lorem ipsum seggeret</p>
          </div>
        </div>
      </div>
      <div className="form-div">
        <form>
          <div className="form-row">
            <div className="form col-6">
              <label for="inputEmail4">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="inputname4"
                placeholder="Enter Your Full Name"
              />
            </div>
            <div className="form col-6">
              <label for="inputPassword4">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="inputemail4"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress2">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">Phone Number</label>
              <input type="text" className="form-control" id="inputPhone" />
            </div>
            <div className="form-group col-md-4">
              <label for="inputCause">Causes</label>
              <select id="inputCause" className="form-control">
                <option selected>Select Cause</option>
                <option>General Pool</option>
                <option>Hungry Relief</option>
                <option>Help the ill</option>
                <option>Education</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default hungerRelief;
