/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./modalconnect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Blocto from "../../assets/images/blogto.jpg";
import Metamask from "../../assets/images/metamarlk.png";
import Binance from "../../assets/images/binance.jpg";
import Coinbase from "../../assets/images/coinbase.png";
import Walletconnect from "../../assets/images/walletconnect.jpg";
import Trust from "../../assets/images/trust.png";
import Opera from "../../assets/images/opera.png";
import Brave from "../../assets/images/brave.png";
import Math from "../../assets/images/math.png";
import Token from "../../assets/images/token.png";
import Safe from "../../assets/images/safe.png";
import Coin98 from "../../assets/images/coin98.svg";

function ModalConnect({ handleClose }) {
  const [isShowMore, setShowMore] = useState(true);
  const [isShowListItem, setShowListItem] = useState(false);

  const onClickShowMore = () => {
    setShowMore(!isShowMore);
    setShowListItem(!isShowListItem);
  };

  return (
    <div className="open-modal">
      <div className="open-modal-opacity"></div>
      <div className="modal-connect">
        <div className="mc-header">
          <h2 className="mc-header-name">Connect Wallet</h2>
          <div className="mc-header-close" onClick={() => handleClose()}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <div className="mc-content">
          <div className="mc-content-parent">
            <div className="mc-content-child">
              <img className="mc-content-child-img" src={Blocto} alt="blocto" />
              <p className="mc-content-child-name">Blocto</p>
            </div>
            <div className="mc-content-child">
              <img
                className="mc-content-child-img"
                src={Metamask}
                alt="Metamask"
              />
              <p className="mc-content-child-name">Metamask</p>
            </div>
          </div>
          <div className="mc-content-parent">
            <div className="mc-content-child">
              <img
                className="mc-content-child-img"
                src={Binance}
                alt="Binance Wallet"
              />
              <p className="mc-content-child-name">Binance Wallet</p>
            </div>
            <div className="mc-content-child">
              {!isShowMore ? (
                <>
                  <img
                    className="mc-content-child-img"
                    src={Coinbase}
                    alt="Coinbase Wallet"
                  />
                  <p className="mc-content-child-name">Coinbase Wallet</p>
                </>
              ) : (
                <div
                  className="mc-content-more"
                  onClick={() => onClickShowMore()}
                >
                  <FontAwesomeIcon
                    className="mc-content-child-icon"
                    icon={faEllipsis}
                  />
                  <p className="mc-content-child-name">More</p>
                </div>
              )}
            </div>
          </div>
          {isShowListItem && <ItemMore />}
        </div>
        <div className="mc-footer">
          <p className="mc-footer-name">Haven't got a crypto wallet yet?</p>
          <button className="mc-footer-btn">Learn How to Connect</button>
        </div>
      </div>
    </div>
  );
}

export default ModalConnect;

const ItemMore = () => (
  <>
    <div className="mc-content-parent">
      <div className="mc-content-child">
        <img
          className="mc-content-child-img"
          src={Walletconnect}
          alt="WalletConnect"
        />
        <p className="mc-content-child-name">WalletConnect</p>
      </div>
      <div className="mc-content-child">
        <img className="mc-content-child-img" src={Trust} alt="Trust Wallet" />
        <p className="mc-content-child-name">Trust Wallet</p>
      </div>
    </div>
    <div className="mc-content-parent">
      <div className="mc-content-child">
        <img className="mc-content-child-img" src={Opera} alt="Opera Wallet" />
        <p className="mc-content-child-name">Opera Wallet</p>
      </div>
      <div className="mc-content-child">
        <img className="mc-content-child-img" src={Brave} alt="blocto" />
        <p className="mc-content-child-name">Brave Wallet</p>
      </div>
    </div>
    <div className="mc-content-parent">
      <div className="mc-content-child">
        <img className="mc-content-child-img" src={Math} alt="MathWallet" />
        <p className="mc-content-child-name">MathWallet</p>
      </div>
      <div className="mc-content-child">
        <img className="mc-content-child-img" src={Token} alt="TokenPocket" />
        <p className="mc-content-child-name">TokenPocket</p>
      </div>
    </div>
    <div className="mc-content-parent">
      <div className="mc-content-child">
        <img className="mc-content-child-img" src={Safe} alt="SafePal" />
        <p className="mc-content-child-name">SafePal</p>
      </div>
      <div className="mc-content-child">
        <img className="mc-content-child-img" src={Coin98} alt="coin98" />
        <p className="mc-content-child-name">Coin98</p>
      </div>
    </div>
  </>
);
