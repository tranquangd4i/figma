import "./features.css";
import arrowImage from "../../assets/images/arrow.png";
import pancake from "../../assets/images/pancake.png";
import coinbase from "../../assets/images/coinbase.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Features() {
  return (
    <div className="features-section">
      <img src={arrowImage} alt="arrow-img" className="arrow-img" />
      <div className="partner">
        <div className="partner-frame">
          <div className="frame">
            <div className="frame-heading">
              <h3 className="heading">OUR PARTNERS</h3>
            </div>
          </div>
        </div>
        <div className="partner-frame1088">
          <div className="control-left">
            {/* <div className='arrow-left'>
            </div> */}
            {/* <FontAwesomeIcon icon={faArrowLeft} className='fa-arrow-left-icon' /> */}
            <div className="control-frame-left">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="fa-arrow-left-icon"
              />
            </div>
          </div>
          <div className="partner-list">
            <PartnerCard img={coinbase} />
            <PartnerCard img={pancake} />
            <PartnerCard img={coinbase} />
            <PartnerCard img={pancake} />
          </div>
          <div className="control-right">
            {/* <div className='arrow-right'>
              
            </div> */}
            <div className="control-frame-right">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="fa-arrow-right-icon"
              />
            </div>
            {/* <FontAwesomeIcon icon={faArrowRight} className='fa-arrow-right-icon' /> */}
          </div>
          {/* <div className='frame1089'>
            <div className='paralax'>
              <div className='paralax-partner'>
                <div className='img-block'>
                  <div className='section-divider'></div>
                  <div className='partner-content'>
                    <div className='img-content'>
                      <img src={pancake} alt='pancake-img' className='pancake-img' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='paralax-partner'>
                <div className='img-block'>
                  <div className='section-divider'></div>
                  <div className='partner-content'>
                    <div className='img-content'>
                      <img src={coinbase} alt='coinbase-img' className='coinbase-img' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='paralax-partner'>
                <div className='img-block'>
                  <div className='section-divider'></div>
                  <div className='partner-content'>
                    <div className='img-content'>
                      <img src={coinbase} alt='coinbase-img' className='coinbase-img' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='paralax-partner'>
                <div className='img-block'>
                  <div className='section-divider'></div>
                  <div className='partner-content'>
                    <div className='img-content'>
                      <img src={coinbase} alt='coinbase-img' className='coinbase-img' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='paralax-partner'>
                <div className='img-block'>
                  <div className='section-divider'></div>
                  <div className='partner-content'>
                    <div className='img-content'>
                      <img src={coinbase} alt='coinbase-img' className='coinbase-img' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='paralax-partner'>
                <div className='img-block'>
                  <div className='section-divider'></div>
                  <div className='partner-content'>
                    <div className='img-content'>
                      <img src={coinbase} alt='coinbase-img' className='coinbase-img' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='paralax-partner'>
                <div className='img-block'>
                  <div className='section-divider'></div>
                  <div className='partner-content'>
                    <div className='img-content'>
                      <img src={coinbase} alt='coinbase-img' className='coinbase-img' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="features-grants"></div>
      </div>
      <div className="bg-line"></div>
    </div>
  );
}

export default Features;

const PartnerCard = ({ img }) => {
  return (
    <div className="partner-card">
      <div className="img-wrapper">
        <img src={img} alt="partner-img" className="card-img" />
      </div>
    </div>
  );
};
