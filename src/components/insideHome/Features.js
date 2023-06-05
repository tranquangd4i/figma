import './inside.css'
import arrowImage from '../../assets/images/arrow.png'
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

                </div>
                <div className='control-frame-left'></div>
            </div>
            <div className='control-right'>
                <div className='arrow-right'>

                </div>
                <div className='control-frame-right'></div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
