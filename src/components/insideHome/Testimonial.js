import './inside.css'
import imageNFT from '../../assets/images/image.png'
function Testimonial() {
    return ( 
        <div className="testimonial">
            <div className="ecosystem">
                <div className="ecosystem-frame">
                    <div className="circle">
                        <div className="oval"></div>
                    </div>
                    <div className="eco-headings-sp-text">
                        <h3 className="eco-heading">FINALDEFI  ECOSYSTEM</h3>
                    </div>
                    <div className="eco-frame1090"><img src={imageNFT} alt="img-nft" className="img-nft" /></div>
                </div>
            </div>
            <div className="testimonial-content">
                <div className="title-carousel">
                    <div className="test-content-heading-sp-text"></div>
                    <div className="carousel"></div>
                </div>
                <div className="content-card"></div>
            </div>
        </div>
     );
}

export default Testimonial;