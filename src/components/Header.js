/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../assets/images/logo1.png";
import "./header.css";
function Header() {
  return (
    <div className="navbar">
      <div className="container-fluid">
        <div className="navbar-collapse">
          
            
          
          <div className="navbar-nav">
            <img src={logo} className="img-logo" alt="..." />
          <div className="navbar-menu">
            <div className="navbar-frame">
              <div className="frame">
                <div className="frame-com">
                  <div className="item1">
                    <a className="item-link1">Partner</a>
                  </div>
                  <div className="item2">
                    <a className="item-link2">Ecosystem</a>
                  </div>
                  <div className="item3">
                    <a className="item-link3">About</a>
                  </div>
                  <div className="item4">
                    <a className="item-link4">Road map</a>
                  </div>
                  <div className="item5">
                    <a className="item-link5">Whitepaper</a>
                  </div>
                  <div className="item6">
                    <a className="item-link6">News</a>
                  </div>
                  <div className="item7">
                    <a className="item-link7">Connect</a>
                  </div>
                  <button className="dashboard">Dashboard</button>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
