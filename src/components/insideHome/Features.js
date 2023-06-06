import './inside.css'
import arrowImage from '../../assets/images/arrow.png'
import pancake from '../../assets/images/pancake.png'
import coinbase from '../../assets/images/coinbase.png'
function Features() {
  return (
    <section className='features-section'>
      <img src={arrowImage} alt='arrow-img' className='arrow-img' />
      <div className="partner">
        <div className='partner-frame'>
            <div className='frame'>
                <div className='frame-heading'>
                    <h3 className='heading'>OUR PARTNERS</h3>
                </div>
            </div>
        </div>
        <div className='partner-frame1088'>
            <div className='control-left'>
                <div className='arrow-left'>
                  <span className='vector1'></span>
                  <span className='vector2'>-</span>
                </div>
                <div className='control-frame-left'></div>
            </div>
            <div className='control-right'>
                <div className='arrow-right'>
                    <span className='vector4'>-</span>
                </div>
                <div className='control-frame-right'></div>
            </div>
            <div className='frame1089'>
              <div className='paralax'>
                <div className='paralax-partner1'>
                  <div className='img-block'>
                    <div className='section-divider'></div>
                    <div className='partner-content1'>
                      <div className='img-content1'>
                        <img src={pancake} alt='pancake-img' className='pancake-img' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='paralax-partner2'>
                  <div className='img-block2'>
                    <div className='section-divider2'></div>
                    <div className='partner-content2'>
                      <div className='img-content2'>
                        <img src={coinbase} alt='coinbase-img' className='coinbase-img' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='paralax-partner3'>
                  <div className='img-block3'>
                    <div className='section-divider3'></div>
                    <div className='partner-content3'>
                      <div className='img-content3'>
                        {/* <img src={coinbase} alt='coinbase-img' className='coinbase-img' /> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='paralax-partner4'>
                  <div className='img-block4'>
                    <div className='section-divider4'></div>
                    <div className='partner-content4'>
                      <div className='img-content4'>
                        {/* <img src={coinbase} alt='coinbase-img' className='coinbase-img' /> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='paralax-partner5'>
                  <div className='img-block5'>
                    <div className='section-divider5'></div>
                    <div className='partner-content5'>
                      <div className='img-content5'>
                        {/* <img src={coinbase} alt='coinbase-img' className='coinbase-img' /> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='paralax-partner6'>
                  <div className='img-block6'>
                    <div className='section-divider6'></div>
                    <div className='partner-content6'>
                      <div className='img-content6'>
                        {/* <img src={coinbase} alt='coinbase-img' className='coinbase-img' /> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='paralax-partner7'>
                  <div className='img-block7'>
                    <div className='section-divider7'></div>
                    <div className='partner-content7'>
                      <div className='img-content7'>
                        {/* <img src={coinbase} alt='coinbase-img' className='coinbase-img' /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className='features-grants'></div>
      </div>
      
    </section>
  );
}

export default Features;
