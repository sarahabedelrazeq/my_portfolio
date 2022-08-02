import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { images } from "assets";
import { Main } from "components/Layouts";
import { useLanguage, useTheme } from "hooks";
import about from "data/about.json";

const Home = () => {
  const language = useLanguage();
  const theme = useTheme();

  return (
    <Main id="home_page">
      <section className="pt-5">
        <Container className="py-5">
          <Row>
            <Col xs={12} className="text-center mb-4 mb-lg-4">
              <h1 style={{ color: theme.text }}>{language.mainTitle}</h1>
            </Col>
            <Col xs={12} className="text-center mb-4 mb-lg-4">
              <p style={{ color: theme.text }}>{language.mainSubTitle}</p>
            </Col>
            <Col xs={12} className="">
              <Row className="justify-content-center">
                <Col md={3} xs={6}>
                  <img
                    className="w-100 rounded-circle"
                    src={images.me}
                    alt="my-pic"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-5">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col xs={12} className="text-center mb-4 mb-lg-4">
              <h3 style={{ color: theme.bg }}>{language.aboutTitle}</h3>
            </Col>
            <Col xs={12} className="text-center mb-4 mb-lg-4">
              <p style={{ color: theme.bg }}>{language.aboutSubTitle}</p>
            </Col>
            {about.map((info, index) => (
              <Col
                lg={4}
                md={6}
                xs={8}
                className="text-center mb-4 mb-lg-4"
                key={index}
              >
                <Container
                  style={{ background: theme.bg }}
                  className="rounded-3 py-4 py-lg-5"
                >
                  <Row>
                    <Col xs={12} className="mb-4">
                      <h4 style={{ color: theme.text }}>
                        {language[info?.name]}
                      </h4>
                    </Col>
                  </Row>
                  <Row className="justify-content-center px-4">
                    {info?.images.map((image, index) => (
                      <Col xs={4} key={index}>
                        <img className="w-100" alt="html" src={image} />
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Main>
  );
};

export default Home;
