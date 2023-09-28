import React from "react";
import './Style.css'
import logo from './ASET/logo.png'
import twotter from "./ASET/twotter.png";
import facebook from "./ASET/facebook.png";
import ig from "./ASET/ig.png";
import git from "./ASET/git.png";
import stamp from "./ASET/stamp.png";
import adverus from "./ASET/adverus.png";
import manter from "./ASET/manter.png";
import spaced from "./ASET/spaced.png";
import venuer from "./ASET/venuer.png";
import Group13 from "./ASET/Group 13.png";
import logo2 from "./ASET/logo2.png";
import Social from "./ASET/Social.png";

const Landing = () => {
  return (
   <div>
      <div className="body">
        {/* section1 */}
        <div className="section1">
          {/* navbar */}
          <nav>
            <ul>
              <img src={logo} alt="Logo" className="imglogo" />
              <li style={{ float: "left" }}>
                <a href="#">Contact</a>
              </li>
              <li style={{ float: "left" }}>
                <a href="#">FAQ</a>
              </li>
              <li style={{ float: "left" }}>
                <a href="#">Testimonial</a>
              </li>
              <li style={{ float: "left" }}>
                <a href="#">Portofolio</a>
              </li>
              <li style={{ float: "left" }}>
                <a href="#" className>
                  Events
                </a>
              </li>
              <li style={{ float: "left" }}>
                <a href="#" className>
                  Client
                </a>
              </li>
              <div className="socmed">
                <img src={twotter} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={ig} alt="ig" />
                <img src={git} alt="git" />
              </div>
            </ul>
          </nav>
          {/* navbar */}
          <div className="container">
            <div className="conten1">
              <h1>
                Dede Sudiahna, <br /> Digital Expert
              </h1>
              <h6 style={{ textAlign: "left" }}>CONTACT ME FOR MORE</h6>
              <h3>Dedegetto_47@yahoo.com</h3>
              <button>Download CV</button>
            </div>
            <div className="content2">
              <img src={Group13} alt="Group 13" className="imgstyle1" />
            </div>
          </div>
        </div>
        <div className="company">
          <h3>Companies I work with</h3>
          <div className="logocomp">
            <img src={stamp} alt="stamp" />
            <img src={adverus} alt="adverus" />
            <img src={manter} alt="manter" />
            <img src={spaced} alt="spaced" />
            <img src={venuer} alt="venuer" />
          </div>
          <div className="copy">
            <h6>My Masterpiece</h6>
            <h2>
              I Love <span style={{ color: "#466db1" }}> to show </span>you my
              work
            </h2>
          </div>
        </div>
        {/* section2 */}
        <div className="section2">
          <i />
          <div className="container2">
            <i className="fa-solid fa-circle-chevron-left" />
            <div className="content3">
              <h5>SOCIAL MEDIA MANAGER</h5>
            </div>
            <div className="content4">
              <h5>VIDEO PRODUCTION</h5>
            </div>
            <div className="content5">
              <h5>UI/UX</h5>
            </div>
            <i className="fa-solid fa-circle-chevron-right" />
          </div>
        </div>
        <div className="section3">
          <div className="load">
            <button>Load more</button>
          </div>
          <div className="copy">
            <h6>Trusted Testimonial</h6>
            <h2>
              People <span style={{ color: "#466db1" }}> I've help </span>to
              solved their problem
            </h2>
          </div>
        </div>
        <div className="section4">
          <div className="testimoni">
            <div className="foto" />
            <div className="text">
              <div className="review"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas magni corporis et placeat atque commodi recusandae quos
                aliquid, ipsum, maxime impedit blanditiis quaerat laboriosam.
              </p>
              <h4 style={{ textAlign: "center" }}>
                Devron <span style={{ fontWeight: 200 }}>space UK</span>
              </h4>
            </div>
          </div>
          <div className="testimoni">
            <div className="foto2" />
            <div className="text">
              <div className="review"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas magni corporis et placeat atque commodi recusandae quos
                aliquid, ipsum, maxime impedit blanditiis quaerat laboriosam.
              </p>
              <h4 style={{ textAlign: "center" }}>
                Devron <span style={{ fontWeight: 200 }}>space UK</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="copy">
            <h6>Take action now</h6>
            <h2>
              Ready to <span style={{ color: "#466db1" }}> boost </span>your
              business?
            </h2>
          </div>
        </div>
        <div className="section5">
          <div className="cta">
            <div className="foto3" />
            <div className="text2">
              <p>Ready to create your next amazing product?</p>
              <button>Let's Talk</button>
            </div>
          </div>
        </div>
        <footer>
          <div className="fot1">
            <img src={logo2} alt="Logo 2" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur.
            </p>
            <img src={Social} alt="Social Media" />
          </div>
          <div className="fot2">
            <p style={{ color: "#466db1", fontWeight: "bold" }}>ABOUT ME</p>
            <p>Certificates</p>
            <p>Experience</p>
            <p>Award</p>
            <p>Winner</p>
          </div>
          <div className="fot3">
            <p style={{ color: "#466db1", fontWeight: "bold" }}>AGREEMENTS</p>
            <p>licenses</p>
            <p>Term &amp; Condition</p>
            <p>Privacy Policy</p>
            <p>for Commercial</p>
          </div>
          <div className="fot4">
            <p style={{ color: "#466db1", fontWeight: "bold" }}>NEWSLETTER</p>
            <input type="text" defaultValue="Enter your email address" />
            <button>Subscribe Now</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
