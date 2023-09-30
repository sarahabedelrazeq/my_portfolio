import React from "react";
import Slider from "react-slick";

export default function Portfolio() {
  const settings = {
    centerMode: true,
    centerPadding: 15,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="portfolio-area ptb--120 bg_color--1">
      <div className="portfolio-sacousel-inner mb--55">
        <div className="portfolio-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title">
                  <h2>Our Works</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-slick-activation mt--70 mt_sm--40">
            <Slider {...settings}>
              <div className="portfolio">
                <div className="thumbnail-inner">
                  <div className="thumbnail image-2"></div>
                  <div className="bg-blr-image image-2"></div>
                </div>
                <div className="content">
                  <div className="inner">
                    <p>Development</p>
                    <h4 className="title">
                      <a href="/portfolio-details">
                        {" "}
                        Getting tickets to the big show 1
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <a className="rn-btn" href="/portfolio-details">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <a className="link-overlay" href="/portfolio-details"></a>
              </div>

              <div className="portfolio">
                <div className="thumbnail-inner">
                  <div className="thumbnail image-3"></div>
                  <div className="bg-blr-image image-3"></div>
                </div>
                <div className="content">
                  <div className="inner">
                    <p>Development</p>
                    <h4 className="title">
                      <a href="/portfolio-details">
                        {" "}
                        Getting tickets to the big show 2
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <a className="rn-btn" href="/portfolio-details">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <a className="link-overlay" href="/portfolio-details"></a>
              </div>

              <div className="portfolio">
                <div className="thumbnail-inner">
                  <div className="thumbnail image-4"></div>
                  <div className="bg-blr-image image-4"></div>
                </div>
                <div className="content">
                  <div className="inner">
                    <p>Development</p>
                    <h4 className="title">
                      <a href="/portfolio-details">
                        {" "}
                        Getting tickets to the big show 3
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <a className="rn-btn" href="/portfolio-details">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <a className="link-overlay" href="/portfolio-details"></a>
              </div>

              <div className="portfolio">
                <div className="thumbnail-inner">
                  <div className="thumbnail image-1"></div>
                  <div className="bg-blr-image image-1"></div>
                </div>
                <div className="content">
                  <div className="inner">
                    <p>Development</p>
                    <h4 className="title">
                      <a href="/portfolio-details">
                        {" "}
                        Getting tickets to the big show 4
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <a className="rn-btn" href="/portfolio-details">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <a className="link-overlay" href="/portfolio-details"></a>
              </div>
              
              <div className="portfolio">
                <div className="thumbnail-inner">
                  <div className="thumbnail image-2"></div>
                  <div className="bg-blr-image image-2"></div>
                </div>
                <div className="content">
                  <div className="inner">
                    <p>Development</p>
                    <h4 className="title">
                      <a href="/portfolio-details">
                        {" "}
                        Getting tickets to the big show 1
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <a className="rn-btn" href="/portfolio-details">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <a className="link-overlay" href="/portfolio-details"></a>
              </div>

              <div className="portfolio">
                <div className="thumbnail-inner">
                  <div className="thumbnail image-3"></div>
                  <div className="bg-blr-image image-3"></div>
                </div>
                <div className="content">
                  <div className="inner">
                    <p>Development</p>
                    <h4 className="title">
                      <a href="/portfolio-details">
                        {" "}
                        Getting tickets to the big show 2
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <a className="rn-btn" href="/portfolio-details">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <a className="link-overlay" href="/portfolio-details"></a>
              </div>

              <div className="portfolio">
                <div className="thumbnail-inner">
                  <div className="thumbnail image-4"></div>
                  <div className="bg-blr-image image-4"></div>
                </div>
                <div className="content">
                  <div className="inner">
                    <p>Development</p>
                    <h4 className="title">
                      <a href="/portfolio-details">
                        {" "}
                        Getting tickets to the big show 3
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <a className="rn-btn" href="/portfolio-details">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <a className="link-overlay" href="/portfolio-details"></a>
              </div>

              <div className="portfolio">
                <div className="thumbnail-inner">
                  <div className="thumbnail image-1"></div>
                  <div className="bg-blr-image image-1"></div>
                </div>
                <div className="content">
                  <div className="inner">
                    <p>Development</p>
                    <h4 className="title">
                      <a href="/portfolio-details">
                        {" "}
                        Getting tickets to the big show 4
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <a className="rn-btn" href="/portfolio-details">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <a className="link-overlay" href="/portfolio-details"></a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
