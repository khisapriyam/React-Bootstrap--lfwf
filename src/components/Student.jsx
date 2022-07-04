import React, { useState } from 'react';
import {Alert, Button, Card, CloseButton, Col, Container, Modal, Row} from 'react-bootstrap';

const Student = () => {
    
    //Alert state
    const [alert, setAlert] = useState({
        msg :'Data Stable',
        type: 'success',
        status : true
    });


    //Modal state
    const[modal, setModal] = useState(false);


    //Modal handler
    const handleModalShow = () =>{
        setModal(true);

    }

    const handleModalHide = () => setModal(false);


    const handleAlertClose = () =>{
        setAlert({
         msg: '',
         type: '',
         status: false
        })

    }
  
  return (
    <>
        <Container className='my-5'>
            <Row className='justify-content-center'>
                <Col md='5'>
                    <Card className='shadow'>
                        <Card.Header>
                            <h4>This is header</h4>
                        </Card.Header>
                        <Card.Img src='https://pbs.twimg.com/media/CExYS7-VEAIC3-T.jpg'></Card.Img>
                        <Card.Body>
                            <h2>We love JS</h2>
                            {
                                alert.status && <Alert className='d-flex justify-content-between' variant={alert.type}>{alert.msg} <CloseButton onClick={ handleAlertClose }></CloseButton></Alert>
                            }
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, explicabo?</p>
                            <Button onClick={ handleModalShow }>Modal</Button>
                        </Card.Body>
                        <Card.Footer>
                            <a href="">Tumi</a><br /><br />
                            <Card.Link href=''>CLick</Card.Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>


        <Modal show={modal} onHide = { ()=> handleModalHide(false)}>
            <Modal.Header>
                <Modal.Title>Create an account</Modal.Title>
                <CloseButton onClick={handleModalHide}></CloseButton>
            </Modal.Header>
            <Modal.Body>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptatibus!</p>
            </Modal.Body>
            <Modal.Footer>
                <a href="#"> Just go</a>
            </Modal.Footer>
        </Modal>
            
    </>
  )
}

export default Student;