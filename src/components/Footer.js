import { useLanguage, useTheme } from "hooks";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const language = useLanguage();
  const theme = useTheme();

  return (
    <footer id="footer" className="py-5">
      <Container>
        <Row>
          <Col xs={6}>
            <h4 style={{ color: theme.bg }} className="mb-4">
              {language.getInTouch}
            </h4>
            <ul className="list-unstyled">
              <li style={{ color: theme.bg }} className="mb-4">
                <span>{language.phone}: </span>
                <a
                  href="tel:+962785584039"
                  className="text-inherit text-phone"
                  target="_blank"
                  rel="noreferrer"
                >
                  +962785584039
                </a>
              </li>
              <li style={{ color: theme.bg }} className="mb-4">
                <span>{language.email}: </span>
                <a
                  href="mailto:sarah.abed.elrazeq@gmail.com"
                  className="text-inherit"
                  target="_blank"
                  rel="noreferrer"
                >
                  sarah.abed.elrazeq@gmail.com
                </a>
              </li>
              <li style={{ color: theme.bg }} className="mb-4">
                <a
                  href="https://www.linkedin.com/in/sarah-abed-el-razeq-807a24205/"
                  className="text-inherit"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li style={{ color: theme.bg }} className="mb-4">
                <a
                  href="https://github.com/sarahabedelrazeq"
                  className="text-inherit"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li style={{ color: theme.bg }} className="mb-4">
                <a
                  href="https://www.hackerrank.com/sarah_abed_elra1"
                  className="text-inherit"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hackerrank
                </a>
              </li>
              <li style={{ color: theme.bg }} className="mb-4">
                <a
                  href="https://codeforces.com/profile/sarahalhaj1999"
                  className="text-inherit"
                  target="_blank"
                  rel="noreferrer"
                >
                  Codeforces
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
