import frameIMG from '../assets/images/frame.png'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

function About() {
    return (
        <div className="about-us">
            <div className="group">
                <div className="group-frame1">
                    <img src={frameIMG} alt="img-nft" className="about-img" />
                    <div className="video-button">
                        <div className="btn-icon">
                            <FontAwesomeIcon icon={faCirclePlay} />
                        </div>
                        <h5 className="text-btn">Watch Video</h5>
                    </div>
                    <div className="frame-group">
                        <div className="polygon"></div>
                        <div className="ellipse"></div>
                    </div>
                    <div className="blog-post">
                        <div className="blog-img-block">
                            <div className="blog-section-divider"></div>
                        </div>
                        <div className="blog-content">
                            <div className="blog-content-frame1">
                                <div className="text-category"></div>
                                <div className="text-article"></div>
                            </div>
                            <div className="blog-content-frame2">
                                <div className="text-jan"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-frame2">

                    <div className="frame-text">

                        <h3 className="heading-text">What’s Finaldefi ?</h3>
                        <h4 className="sp-text">Finaldefi operates on a decentralized finance (DeFi) platform, integrating a marketing program and an automatic algorithm to distribute 100% of the funds to each participant’s position. The links in Finaldefi CHAIN are transparent, safe, fast, and fair, creating long-term stability for all participants</h4>

                        <div className="frame-action">
                            <p className="read-more">Read more on our blog</p>
                            <div className="read-arrow-right">
                                <FontAwesomeIcon icon={faArrowRight} className='read-more-icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;