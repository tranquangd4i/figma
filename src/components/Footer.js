import './footer.css'
import logoFooter from '../assets/images/logo1.png'
function Footer() {
    return (
        <div className='footer-wrap'>
           
             
                    <img src={logoFooter} alt='footer-logo' className='footer-logo' />
                    <div className='footer-menu'>
                        <ul className='footer-menu-content'>
                            <li>Ecosystem</li>
                            <li>Roadmap</li>
                            <li>Document</li>
                            <li>Introduction</li>
                        </ul>
                    </div>
                <div className='footer-group-frame'></div>
            
            <div className='footer-frame2'>
                <hr className='footer-line-horizontal' />
                <h6 className='last-finaldefi'>Ⓒ FINALDEFI 2023</h6>
            </div>
        </div>
     );
}

export default Footer ;