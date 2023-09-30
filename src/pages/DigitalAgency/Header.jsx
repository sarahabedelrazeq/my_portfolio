import React from 'react';
import logo from './assets/logo.png';

const Header = () => {
    return (
        <header className="header-area formobile-menu header--transparent default-color">
            <div className="header-wrapper" id="header-wrapper">
                <div className="header-left">
                    <div className="logo">
                        <a href="/">
                            <img src={logo} alt="Digital Agency" />
                        </a>
                    </div>
                </div>
                <div className="header-right">
                    <nav className="mainmenunav d-lg-block">
                        <ul className="mainmenu">
                            <li className="has-droupdown">
                                <a href="/main-demo">Home</a>
                                <ul className="submenu">
                                    <li><a href="/main-demo">Main Demo</a></li>
                                    <li><a href="/dark-main-demo">Main Demo Dark</a></li>
                                </ul>
                            </li>
                            <li className="has-droupdown">
                                <a href="/service">Service</a>
                                <ul className="submenu">
                                    <li><a href="/service">Service</a></li>
                                    <li><a href="/service-details">Service Details</a></li>
                                </ul>
                            </li>
                            <li><a href="/about">About</a></li>
                            {/* ... (other top-level menu items) ... */}
                        </ul>
                    </nav>
                    <div className="header-btn">
                        <a className="rn-btn" href="https://themeforest.net/checkout/from_item/25457315?license=regular">
                            <span>buy now</span>
                        </a>
                    </div>
                    <div className="humberger-menu d-block d-lg-none pl--20">
                        <span className="menutrigger text-white">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* ... (SVG lines) ... */}
                            </svg>
                        </span>
                    </div>
                    <div className="close-menu d-block d-lg-none">
                        <span className="closeTrigger">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* ... (SVG lines) ... */}
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
