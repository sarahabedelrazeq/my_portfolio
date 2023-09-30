import React from 'react';

const Slider = () => {
    return (
        <div className="slider-wrapper">
            <div className="slider-activation">
                <div
                    className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1"
                    data-black-overlay="6"
                >
                    <div className="container position-relative">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h1 className="title theme-gradient">
                                        A digital <br />
                                        agency.
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="service-wrapper service-white">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="service service__style--1">
                                        <div className="icon">
                                            <img
                                                src="./assets/icon-01.png"
                                                alt="Digital Agency"
                                            />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Business Stratagy</h4>
                                            <p>
                                                There are many variations of passages of Lorem Ipsum
                                                available, but the majority have suffered.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="service service__style--1">
                                        <div className="icon">
                                            <img
                                                src="./assets/icon-02.png"
                                                alt="Digital Agency"
                                            />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Website Development</h4>
                                            <p>
                                                There are many variations of passages of Lorem Ipsum
                                                available, but the majority have suffered.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="service service__style--1">
                                        <div className="icon">
                                            <img
                                                src="./assets/icon-03.png"
                                                alt="Digital Agency"
                                            />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Marketing &amp; Reporting</h4>
                                            <p>
                                                There are many variations of passages of Lorem Ipsum
                                                available, but the majority have suffered.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
