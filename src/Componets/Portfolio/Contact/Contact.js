import React from "react";
import "./Contact.css";
const Contact = () => {
  
  return (
    <div className="contact text-center text-white pb-2" id="contact">
      <br /> <h1>Contact</h1> <br />
      <hr />
      <div className="mx-md-auto text-center container">
        <form>
          <div className="form-group mt-2" >
            <label for="Uname">User Name:</label>
            <input
              type={"text"}
              className={"form-control"}
              id={"Uname"}
              placeholder={"Enter your name..."}
            />
          </div>
          <div className="form-group mt-2">
            <label for="email">Email:</label>
            <input
              type={"email"}
              className={"form-control"}
              id={"email"}
              placeholder={"Enter your email..."}
            />
          </div>
          <div className="form-group mt-2" >
            <label for="message">Message:</label>
            <textarea className="form-control" placeholder="Enter your message..." col="30" rows={"10"}></textarea>
          </div>
          <button type="button" className="btn mt-2">Message Me</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
