/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../assets/images/logo1.png";
import "./header.css";
function Header() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-collapse">
          
            <img src={logo} className="img-logo" alt="..." />
          
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">
              PARTNER
            </a>
            <a className="nav-link" href="#">
              ECOSYSTEM
            </a>
            <a className="nav-link" href="#">
              ABOUT
            </a>
            <a className="nav-link" href="#">
              ROADMAP
            </a>
            <a className="nav-link" href="#">
              CONNECT
            </a>
            <a className="nav-link" href="#">
              NEW
            </a>
            <button className="btn-wh">WHITEPAPER</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
