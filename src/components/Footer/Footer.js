import "./footer.css";
import logoFooter from "../../assets/images/logo1.png";

// import { useState, useEffect } from 'react'
function Footer() {
  // const [backToTop, setBackToTop] = useState(false);

  // useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //         if (window.screenY > 100) {
  //             setBackToTop(true)
  //         } else {
  //             setBackToTop(false)
  //         }
  //     })
  // }, [])
  // const scrollUp = () => {
  //     window.scrollTo({
  //         top: 0,
  //         behavior: "smooth"
  //     })
  // }
  return (
    <div className="footer-wrap">
      <div className="sp-footer-logo">
        <img src={logoFooter} alt="footer-logo" className="footer-logo" />
      </div>
      {/* {backToTop && (<button style={{
                width: "80px",
                height: "80px",
                border: "none",
                background: "none"
            }} onClick={scrollUp}></button>)} */}
      <div className="footer-menu">
        <ul className="footer-menu-content">
          <li>Ecosystem</li>
          <li>Roadmap</li>
          <li>Document</li>
          <li>Introduction</li>
        </ul>
      </div>
      <div className="footer-group-frame"></div>

      <div className="footer-frame2">
        <hr className="footer-line-horizontal" />
        <h6 className="last-finaldefi">Ⓒ FINALDEFI 2023</h6>
      </div>
    </div>
  );
}

export default Footer;
