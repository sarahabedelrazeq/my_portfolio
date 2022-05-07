import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks';

const Header = () => {
  const language = useLanguage();
  return (
    <header>
      <Container>
        <Row>
          <Col lg={3} md={4} xs={12}>
            <img src="f" alt='Sarah Abed Elrazeq'/>
          </Col>
          <Col lg={6} md={4} xs={12}>
            <nav>
              <Link to="#home">{language.home}</Link>
            </nav>
          </Col>
          <Col lg={3} md={4} xs={12}></Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header;