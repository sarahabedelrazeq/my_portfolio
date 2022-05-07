import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Main } from "../../components/Layouts";
import { useLanguage } from "../../hooks";

const Home = () => {
  const language = useLanguage();
  return (
    <Main>
      <section className="pt-5">
        <Container className="py-5">
          <Row>
            <Col xs={12} className="text-center mb-4 mb-lg-4">
              <h1>Designer, Front-end Developer & Mentor</h1>
            </Col>
            <Col xs={12} className="text-center mb-4 mb-lg-4">
              <p>
                I design and code beautifully simple things, and I love what I
                do.
              </p>
            </Col>
            <Col xs={12} className="">
              <Row className="justify-content-center">
                <Col xs={3}>
                  <img
                    className="w-100"
                    src="images/my-pic.jpeg"
                    alt="my-pic"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-5 bg-danger">
        <Container className="py-5">
          <Row>
            <Col xs={12} className="text-center mb-4 mb-lg-4">
              <h3 className="text-white">
                Designer, Front-end Developer & Mentor
              </h3>
            </Col>
            <Col xs={12} className="text-center mb-4 mb-lg-4">
              <p className="text-white">
                I design and code beautifully simple things, and I love what I
                do.
              </p>
            </Col>
            <Col lg={4} sm={6} xs={8} className="text-center mb-4 mb-lg-4">
              <Row>
                <Col xs={12}>
                  <h4> language {language.language} </h4>
                </Col>
              </Row>
              <Row className="justify-content-center px-4">
                <Col xs={4}><img className="w-100" src="./images/HTML-logo.svg" /></Col>
                <Col xs={4}><img className="w-100" src="./images/HTML-logo.svg" /></Col>
                <Col xs={4}><img className="w-100" src="./images/HTML-logo.svg" /></Col>
              </Row>
            </Col>
            <Col lg={4} sm={6} xs={8} className="text-center mb-4 mb-lg-4">
              <Row>
                <Col xs={12}>
                  <h4> language {language.language} </h4>
                </Col>
              </Row>
              <Row className="justify-content-center px-4">
                <Col xs={4}><img className="w-100" src="./images/HTML-logo.svg" /></Col>
                <Col xs={4}><img className="w-100" src="./images/HTML-logo.svg" /></Col>
                <Col xs={4}><img className="w-100" src="./images/HTML-logo.svg" /></Col>
              </Row>
            </Col>
            <Col lg={4} sm={6} xs={8} className="text-center mb-4 mb-lg-4">
              <Row>
                <Col xs={12}>
                  <h4> language {language.language} </h4>
                </Col>
              </Row>
              <Row className="justify-content-center px-4">
                <Col xs={4}><img className="w-100" src="./images/HTML-logo.svg" /></Col>
                <Col xs={4}><img className="w-100" src="./images/HTML-logo.svg" /></Col>
                <Col xs={4}><img className="w-100" src="./images/HTML-logo.svg" /></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Main>
  );
};

export default Home;
