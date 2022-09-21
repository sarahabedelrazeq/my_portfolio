import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { images } from "assets";
import { Main } from "components/Layouts";
import { useLanguage, useTheme } from "hooks";
import about from "data/about.json";
import projects from "data/projects.json";
import { Eye, Link45deg, ThreeDots } from "react-bootstrap-icons";

const Home = () => {
  const language = useLanguage();
  const theme = useTheme();
  const [modalImage, setModalImage] = React.useState("");
  const [modalProject, setModalProject] = React.useState(null);

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

      <section id="about" className="pt-5 multicolor-section">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col xs={12} className="text-center mb-4 mb-lg-4">
              <h3 style={{ color: theme.bg }}>{language.aboutTitle}</h3>
            </Col>
            <Col xs={12} className="text-center mb-4 mb-lg-4">
              <p style={{ color: theme.bg }}>{language.aboutSubTitle}</p>
            </Col>
            <Col xs={12}>
              <Row className="justify-content-center">
                {about.map((info, index) => (
                  <Col
                    lg={4}
                    md={6}
                    xs={8}
                    className="text-center mb-4 mb-lg-4"
                    key={index}
                  >
                    <div
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
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-5">
        <Container className="py-5">
          <Row>
            <Col xs={12} className="text-center mb-4 mb-lg-4">
              <h3 style={{ color: theme.text }}>{language.projectsTitle}</h3>
            </Col>
            <Col xs={12} className="text-center mb-4 mb-lg-4">
              <p style={{ color: theme.text }}>{language.projectsSubTitle}</p>
            </Col>
            <Col xs={12}>
              <Row className="justify-content-center">
                {projects.map((project, index) => (
                  <Col
                    lg={4}
                    md={6}
                    xs={8}
                    className="text-center mb-4 mb-lg-4"
                    key={index}
                  >
                    <div className="project-cart">
                      <Row>
                        <Col xs={12} key={index} className="mb-4">
                          <div className="project-img-container position-relative shadow rounded-1">
                            <img
                              className="w-100 project-img rounded-1"
                              alt="html"
                              src={project?.image}
                              height={250}
                            />
                            <div className="project-overlay position-absolute w-100  bg-overlay top-0 rounded-1 h-100">
                              <ul className="list-unstyled gap-3 d-flex align-items-center justify-content-center h-100 mb-0">
                                <li className="bg-white rounded-circle p-1">
                                  <Button
                                    className="p-0"
                                    onClick={() =>
                                      setModalImage(project?.image)
                                    }
                                    variant="link"
                                  >
                                    <Eye
                                      color="darkgray"
                                      size={20}
                                      className="project-icon"
                                    />
                                  </Button>
                                </li>
                                <li className="bg-white rounded-circle p-1">
                                  <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <Link45deg
                                      color="darkgray"
                                      size={20}
                                      className="project-icon"
                                    />
                                  </a>
                                </li>
                                <li className="bg-white rounded-circle p-1">
                                  <Button
                                    className="p-0"
                                    onClick={() => setModalProject(project)}
                                    variant="link"
                                  >
                                    <ThreeDots
                                      color="darkgray"
                                      size={20}
                                      className="project-icon"
                                    />
                                  </Button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Col>
                        <Col xs={12}>
                          <h4 style={{ color: theme.text }}>
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-black"
                            >
                              {project?.name[language.code]}
                            </a>
                          </h4>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>

        <Modal
          show={modalImage !== ""}
          onHide={() => setModalImage("")}
          size="lg"
          centered
        >
          <div>
            <img className="w-100" alt="html" src={modalImage} />
          </div>
        </Modal>
        <Modal
          show={modalProject}
          onHide={() => setModalProject(null)}
          size="lg"
          centered
        >
          <div className="p-4">
            {modalProject && (
              <Row>
                <Col xs={12} className="mb-4 text-center">
                  <img
                    className="object-fit-cover object-position-center-top"
                    height={300}
                    width={550}
                    alt="html"
                    src={modalProject.image}
                  />
                </Col>
                <Col xs={12} className="mb-3">
                  <h4>{modalProject.name[language.code]}</h4>
                </Col>
                <Col xs={12} className="mb-3">
                  <p>{modalProject.description[language.code]}</p>
                </Col>
                <Col xs={12} className="mb-3">
                  <Row>
                    <Col xs={4}>
                      <p>{language.frameWorks}: </p>
                    </Col>
                    <Col xs={8}>
                      <p>{modalProject.frameWorks?.join(", ")}</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12}>
                  <Row>
                    <Col xs={4}>
                      <p>{language.languages}: </p>
                    </Col>
                    <Col xs={8}>
                      <p>{modalProject.languages?.join(", ")}</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            )}
          </div>
        </Modal>
      </section>
    </Main>
  );
};

export default Home;
