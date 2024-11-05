import React from 'react'
import "./banner.css"
import Down from "../../assets/down-img.png"
import { Container, Row , Col } from 'react-bootstrap'

const Banner = () => {
  return (
    <div className='bg'>
      <Container>
        <Row>
          <Col className='bg-text'>
        <h3>Experience The Spirit Of</h3>
        <h2> Adventure Sports</h2>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner