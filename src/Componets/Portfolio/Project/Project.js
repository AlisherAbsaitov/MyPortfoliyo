import React,{useEffect} from "react";
import "./Project.css";
import Aos from "aos";
import "aos/dist/aos.css";
import card_1 from "./img/card_1.png";
import card_2 from './img/card_2.png';
import card_3 from './img/card_3.png';
import card_4 from "./img/card_4.png";
import card_5 from "./img/card_5.png";
import card_6 from "./img/card_6.png";
const Project = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    })
  return (
    <div className="projects p-5" id="project">
      <div className="myProjectText pt-5">
        <h3>
          MY <span>PROJECTS</span>
        </h3>{" "}
        <br/>
        <hr className="hr"/>
      </div>
      
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 p-3" data-aos="fade-right">
            <div className="card text-dark" >
              <img src={card_1} className={"card-img-top"} alt="Social media"/>
              <div className="card-body">
                <h5 className="card-title">Zako IT akademy</h5>
                <p>Some quick exampe text to build on the card title and ...</p>
                <a href="https://zako.netlify.app" className="btn " target={"_blank"}>More Detail...</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 p-3" data-aos="zoom-in">
            <div className="card text-dark" >
              <img src={card_2} className={"card-img-top"} alt="Social media"/>
              <div className="card-body">
                <h5 className="card-title">Faq about Uzbekistan</h5>
                <p>Some quick exampe text to build on the card title and ...</p>
                <a href="https://faqreder.netlify.app" className="btn" target={"_blank"}>More Detail...</a>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-6 col-lg-4 p-3" data-aos="fade-right">
            <div className="card text-dark" >
              <img src={card_3} className={"card-img-top"} alt="Social media"/>
              <div className="card-body">
                <h5 className="card-title">Kankulyotor</h5>
                <p>Some quick exampe text to build on the card title and ...</p>
                <a href="https://moderkankulyator.netlify.app" className="btn " target={"_blank"}>More Detail...</a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 p-3" data-aos="fade-right">
            <div className="card text-dark" >
              <img src={card_4} className={"card-img-top"} alt="Social media"/>
              <div className="card-body">
                <h5 className="card-title">Ob havo</h5>
                <p>Some quick exampe text to build on the card title and ...</p>
                <a href="https://obhavoinfo.netlify.app" className="btn " target={"_blank"}>More Detail...</a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 p-3" data-aos="fade-right">
            <div className="card text-dark" >
              <img src={card_5} className={"card-img-top"} alt="Social media"/>
              <div className="card-body">
                <h5 className="card-title">QR code</h5>
                <p>Some quick exampe text to build on the card title and ...</p>
                <a href="https://modernqrcode.netlify.app" className="btn " target={"_blank"}>More Detail...</a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 p-3" data-aos="fade-right">
            <div className="card text-dark" >
              <img src={card_6} className={"card-img-top"} alt="Social media"/>
              <div className="card-body">
                <h5 className="card-title">Gecko</h5>
                <p>Some quick exampe text to build on the card title and ...</p>
                <a href="https://moderngecko.netlify.app/" target={"_blank"} className="btn ">More Detail...</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
