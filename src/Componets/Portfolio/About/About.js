import React, { useEffect } from "react";
import Yousaf from "../images/people_1.png";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-100 about" id="about">
      <div className="container">
        <div className="row p-5 about_padding">
          <div
            className="col-12 col-md-6 col-lg-6 aboutImgPart"
            data-aos="fade-right"
          >
            <img src={Yousaf} alt="Yousaf" width={"300px"}/>
          </div>

          <div
            className="col-12 col-md-6 col-lg-6 aboutTextPart text-white"
            data-aos="fade-right"
          >
            <div>
              <h3>Hello, I'am a Absaitov Alisher</h3>

              <p>
                I'am passionate and extremelly new front-end developer. My goal
                is to become the best programmer and become a programmer who
                will benefit the people. God willing, I will achieve this goal.
              </p>
              <table>
                <tbody>
                  <tr>
                    <td className="pe-5">Name</td>
                    <td>: Absaitov Alisher</td>
                  </tr>
                  <tr>
                    <td className="pe-5">Age</td>
                    <td>: 20</td>
                  </tr>
                  <tr>
                    <td className="pe-5">Adress</td>
                    <td>: Tashkent, Uzbekistan</td>
                  </tr>
                  <tr>
                    <td className="pe-5">phone</td>
                    <td>: +94 953-32-34</td>
                  </tr>
                  <tr>
                    <td className="pe-5">Email</td>
                    <td>: @alisher24032002@gmail.com</td>
                  </tr>
                </tbody>
                <button className="btn downloadcv mt-4">Download CV</button>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
