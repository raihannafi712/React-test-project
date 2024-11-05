import React from 'react'
import { Container, Row , Col  } from 'react-bootstrap'
import "./join.css"
import P1 from "../../assets/p1.png"
import P2 from "../../assets/p2.png"

const Join = () => {
  return (
<>
    <Container>
        <Row>
            <Col lg={{ span:10, offset:2}}>
                <Row className='join-main'>
                    <Col lg={5} className='join-text'>
                        <h6>Feel  The Excitement</h6>
                        <h5>Join Us And Embark On New Adventures</h5>
                        
                        <p>Dolor sit amet consectetur adipiscing elits eiusmod tempor incididunts laboreyse dolore mag aliqua. Quis ipsum supendise ultrices gravid. Risus commodo viverra sed ipsum maecenas.</p>
                        <p>Unde omnis iste natus error sit voluptatem dolore Eaque ipsa quae ab illo inventore veritatis quasi que Accusantium dolore que laudantium totamrem periam</p>
                        <a href="#">Discover More</a>
                    </Col>
                    <Col lg={7}>
                        <img src={P1} alt="p1" />
                        <img className='r-2' src={P2} alt="p2" />
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
</>

  )
}

export default Join