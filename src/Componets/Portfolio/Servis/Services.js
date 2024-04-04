import React,{useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faP } from "@fortawesome/free-solid-svg-icons";
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./Services.css"
import Aos from "aos";
import "aos/dist/aos.css"
const Services = () => {
    useEffect(()=>{
        Aos.init({duration:4000})
    })
  return (
    <div className="services p-5" id="servise">
      <div className="myServicesText pt-5">
        <h3>
          MY <span>SERVICES</span>
        </h3>{" "}
        <br/>
        <hr className="hr"/>
      </div>
      
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 p-3" data-aos="fade-right">
            <div className="border p-4 servise" >
              <p className="serviseIcon">
                <span className="border">
                  <FontAwesomeIcon icon={faCode} />
                </span>
              </p>
              <h5 className="mt-4">WEB DEVELOMPENT</h5>
              <p>
                 I have been working in the field of web programming for 3 months, if you also need a website, contact me!
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 p-3" data-aos="zoom-in">
            <div className="border  p-4 servise">
              <p className="serviseIcon">
                <span className="border">
                  <FontAwesomeIcon icon={faPhotoVideo} />
                </span>
              </p>
              <h5 className="mt-4">PHOTOGRAPHY</h5>
              <p>
              Currently studying PHOTOGRAPHY...
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 p-3" data-aos="fade-right">
            <div className="border  p-4 servise">
              <p className="serviseIcon">
                <span className="border">
                  <FontAwesomeIcon icon={faPen} />
                </span>
              </p>
              <h5 className="mt-4">WEB DISGN</h5>
              <p>
              Currently studying WEB DISGN...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
