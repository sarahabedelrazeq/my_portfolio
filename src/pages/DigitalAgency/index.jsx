import "../../sass/index2.scss";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import "./style.css";
import Portfolio from "./Portfolio";
import { switchLanguage } from "store/app";
import { useDispatch } from "react-redux";
import CountUpWhenVisible from "components/CountUpWhenVisible";

export default function DigitalAgency() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(switchLanguage("en"));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Slider />

      <div className="about-area about-position-top pb--120">
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="./assets/about-1.jpg"
                    alt="About Images"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">About</h2>
                    <p className="description">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      dont look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum,
                    </p>
                  </div>
                  <div className="row mt--30 mt_sm--10">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Who we are</h3>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Who we are</h3>
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
      <div className="service-area ptb--80 bg_image bg_image--3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                <h2 className="title">Services</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
                <div className="service-btn">
                  <a className="btn-transparent digi-btn-dark" href="/service">
                    <span className="text">Request Custom Service</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12 mt_md--50">
              <div className="row service-one-wrapper">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <a href="/service-details">
                    <div className="service service__style--2">
                      <div className="icon">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                          <line x1="2" y1="20" x2="2" y2="20"></line>
                        </svg>
                      </div>
                      <div className="content">
                        <h3 className="title">Business Stratagy</h3>
                        <p>
                          I throw myself down among the tall grass by the stream
                          as I lie close to the earth.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <a href="/service-details">
                    <div className="service service__style--2">
                      <div className="icon">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                          <polyline points="2 17 12 22 22 17"></polyline>
                          <polyline points="2 12 12 17 22 12"></polyline>
                        </svg>
                      </div>
                      <div className="content">
                        <h3 className="title">Website Development</h3>
                        <p>
                          I throw myself down among the tall grass by the stream
                          as I lie close to the earth.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <a href="/service-details">
                    <div className="service service__style--2">
                      <div className="icon">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <div className="content">
                        <h3 className="title">Marketing &amp; Reporting</h3>
                        <p>
                          I throw myself down among the tall grass by the stream
                          as I lie close to the earth.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <a href="/service-details">
                    <div className="service service__style--2">
                      <div className="icon">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="2"
                            y="3"
                            width="20"
                            height="14"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </div>
                      <div className="content">
                        <h3 className="title">Mobile App Development</h3>
                        <p>
                          I throw myself down among the tall grass by the stream
                          as I lie close to the earth.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Portfolio />

      <div className="digi-counterup-area pt--25 pb--110 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="fontWeight500">Our Fun Facts</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12">
              <h5 className="counter">
                <CountUpWhenVisible end={199} />

              </h5>
              <p className="description">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those.
              </p>
            </div>
            <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12">
              <h5 className="counter">
                <CountUpWhenVisible end={620} />
              </h5>
              <p className="description">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those.
              </p>
            </div>
            <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12">
              <h5 className="counter">
                <CountUpWhenVisible end={76} />
              </h5>
              <p className="description">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="digi-testimonial-area bg_color--5 ptb--120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="react-tabs" data-rttabs="true">
                <div
                  className="react-tabs__tab-panel react-tabs__tab-panel--selected"
                  role="tabpanel"
                  id="react-tabs-1"
                  aria-labelledby="react-tabs-0"
                >
                  <div className="digi-testimonial-content text-center">
                    <div className="inner">
                      <p>
                        Aklima The standard chunk of Lorem Ipsum used since the
                        1500s is reproduced below for those interested. Sections
                        Bonorum et Malorum original.
                      </p>
                    </div>
                    <div className="author-info">
                      <h6>
                        <span>Aklima </span> - COO, AMERIMAR ENTERPRISES, INC.
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="react-tabs__tab-panel"
                  role="tabpanel"
                  id="react-tabs-3"
                  aria-labelledby="react-tabs-2"
                ></div>
                <div
                  className="react-tabs__tab-panel"
                  role="tabpanel"
                  id="react-tabs-5"
                  aria-labelledby="react-tabs-4"
                ></div>
                <div
                  className="react-tabs__tab-panel"
                  role="tabpanel"
                  id="react-tabs-7"
                  aria-labelledby="react-tabs-6"
                ></div>
                <div
                  className="react-tabs__tab-panel"
                  role="tabpanel"
                  id="react-tabs-9"
                  aria-labelledby="react-tabs-8"
                ></div>
                <div
                  className="react-tabs__tab-panel"
                  role="tabpanel"
                  id="react-tabs-11"
                  aria-labelledby="react-tabs-10"
                ></div>
                <div
                  className="react-tabs__tab-panel"
                  role="tabpanel"
                  id="react-tabs-13"
                  aria-labelledby="react-tabs-12"
                ></div>
                <div
                  className="react-tabs__tab-panel"
                  role="tabpanel"
                  id="react-tabs-15"
                  aria-labelledby="react-tabs-14"
                ></div>
                <ul className="testimonial-thumb-wrapper" role="tablist">
                  <li
                    className="react-tabs__tab react-tabs__tab--selected"
                    role="tab"
                    id="react-tabs-0"
                    aria-selected="true"
                    aria-disabled="false"
                    aria-controls="react-tabs-1"
                    tabindex="0"
                    data-rttab="true"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="./assets/testimonial-1.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </li>
                  <li
                    className="react-tabs__tab"
                    role="tab"
                    id="react-tabs-2"
                    aria-selected="false"
                    aria-disabled="false"
                    aria-controls="react-tabs-3"
                    data-rttab="true"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="./assets/testimonial-2.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </li>
                  <li
                    className="react-tabs__tab"
                    role="tab"
                    id="react-tabs-4"
                    aria-selected="false"
                    aria-disabled="false"
                    aria-controls="react-tabs-5"
                    data-rttab="true"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="./assets/testimonial-3.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </li>
                  <li
                    className="react-tabs__tab"
                    role="tab"
                    id="react-tabs-6"
                    aria-selected="false"
                    aria-disabled="false"
                    aria-controls="react-tabs-7"
                    data-rttab="true"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="./assets/testimonial-4.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </li>
                  <li
                    className="react-tabs__tab"
                    role="tab"
                    id="react-tabs-8"
                    aria-selected="false"
                    aria-disabled="false"
                    aria-controls="react-tabs-9"
                    data-rttab="true"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="./assets/testimonial-5.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </li>
                  <li
                    className="react-tabs__tab"
                    role="tab"
                    id="react-tabs-10"
                    aria-selected="false"
                    aria-disabled="false"
                    aria-controls="react-tabs-11"
                    data-rttab="true"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="./assets/testimonial-6.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </li>
                  <li
                    className="react-tabs__tab"
                    role="tab"
                    id="react-tabs-12"
                    aria-selected="false"
                    aria-disabled="false"
                    aria-controls="react-tabs-13"
                    data-rttab="true"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="./assets/testimonial-7.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </li>
                  <li
                    className="react-tabs__tab"
                    role="tab"
                    id="react-tabs-14"
                    aria-selected="false"
                    aria-disabled="false"
                    aria-controls="react-tabs-15"
                    data-rttab="true"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="./assets/testimonial-8.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="digi-blog-area pt--120 bg_color--1 mb-dec--30">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="section-title text-left">
                <h2>Latest News</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                <a className="btn-transparent digi-btn-dark" href="/blog">
                  <span className="text">View All News</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row mt--60 mt_sm--40">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="blog blog-style--1">
                <div className="thumbnail">
                  <a href="/blog-details">
                    <img
                      className="w-100"
                      src="./assets/blog-01.jpg"
                      alt="Blog Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <p className="blogtype">Development</p>
                  <h4 className="title">
                    <a href="/blog-details"> Getting tickets to the big show</a>
                  </h4>
                  <div className="blog-btn">
                    <a className="digi-btn text-white" href="/blog-details">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="blog blog-style--1">
                <div className="thumbnail">
                  <a href="/blog-details">
                    <img
                      className="w-100"
                      src="./assets/blog-02.jpg"
                      alt="Blog Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <p className="blogtype">Management</p>
                  <h4 className="title">
                    <a href="/blog-details">
                      A big ticket gone to be an interesting
                    </a>
                  </h4>
                  <div className="blog-btn">
                    <a className="digi-btn text-white" href="/blog-details">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="blog blog-style--1">
                <div className="thumbnail">
                  <a href="/blog-details">
                    <img
                      className="w-100"
                      src="./assets/blog-03.jpg"
                      alt="Blog Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <p className="blogtype">Design</p>
                  <h4 className="title">
                    <a href="/blog-details">
                      The Home of the Future Could Bebes
                    </a>
                  </h4>
                  <div className="blog-btn">
                    <a className="digi-btn text-white" href="/blog-details">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="digi-brand-area brand-separation bg_color--5 pb--120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="brand-style-2">
                <li>
                  <img src="./assets/brand-01.png" alt="Logo Images" />
                </li>
                <li>
                  <img src="./assets/brand-02.png" alt="Logo Images" />
                </li>
                <li>
                  <img src="./assets/brand-03.png" alt="Logo Images" />
                </li>
                <li>
                  <img src="./assets/brand-04.png" alt="Logo Images" />
                </li>
                <li>
                  <img src="./assets/brand-05.png" alt="Logo Images" />
                </li>
                <li>
                  <img src="./assets/brand-06.png" alt="Logo Images" />
                </li>
                <li>
                  <img src="./assets/brand-02.png" alt="Logo Images" />
                </li>
                <li>
                  <img src="./assets/brand-03.png" alt="Logo Images" />
                </li>
                <li>
                  <img src="./assets/brand-04.png" alt="Logo Images" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="backto-top">
        <div
          style={{
            position: "fixed",
            bottom: "50px",
            right: "30px",
            cursor: "pointer",
            transition: "opacity 0.2s linear 0s, visibility",
            opacity: 0,
            visibility: "hidden",
          }}
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </div>
      </div>
      <footer className="footer-area">
        <div className="footer-wrapper">
          <div className="row align-items-end row--0">
            <div className="col-lg-6">
              <div className="footer-left">
                <div className="inner">
                  <span>Ready To Do This</span>
                  <h2>
                    Let's get <br />
                    to work
                  </h2>
                  <a className="digi-button-style--2" href="/contact">
                    <span>Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-right" data-black-overlay="6">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="footer-link">
                      <h4>Quick Link</h4>
                      <ul className="ft-link">
                        <li>
                          <a href="/portfolio">Work</a>
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/contact">Let's Talk</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                    <div className="footer-link">
                      <h4>Say Hello</h4>
                      <ul className="ft-link">
                        <li>
                          <a href="mailto:admin@example.com">
                            admin@example.com
                          </a>
                        </li>
                        <li>
                          <a href="mailto:hr@example.com">hr@example.com</a>
                        </li>
                      </ul>
                      <div className="social-share-inner">
                        <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                          <li>
                            <a href="https://www.facebook.com/">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 320 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 448 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 448 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="copyright-text">
                      <p>
                        Copyright © 2022 Rainbow-Themes. All Rights Reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
