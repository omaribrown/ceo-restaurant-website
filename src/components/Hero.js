import React, { Component } from 'react'
import hero from './assets/hero-image.jpg';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default class Hero extends Component {
    render() {
        return (
            <div className='hero-div'>
                <Container>
                    <Row>
                        <Col>
                            <div className='hero-text'>
                                <h1>Late night food never tasted so good.</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                                <Button className='order-button'>Place an Order</Button>
                            </div>
                        </Col>
                        <Col>
                            <div className='hero-image'>
                                <img src={hero} alt='image-of-parm-fries' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
