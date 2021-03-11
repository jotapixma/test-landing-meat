import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';


const FormContact = () => {

    return(
        <section className="form-contact mt-4 pb-5">
            <div className="container">
                <h1 className="super-title text-center">Contáctanos</h1>

                <div className="col-12 col-md-8 ml-auto mr-auto mt-4">
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Alberto" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="password" placeholder="Gonzalez" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Mail</Form.Label>
                                <Form.Control type="email" placeholder="Introduce email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control type="text" placeholder="981708947" />
                            </Form.Group>
                        </Form.Row>                    

                        <div className="text-right mt-3 mb-3">
                            <Button className="btn-warning ml-auto" size="lg" type="submit">
                                Enviar
                            </Button>
                        </div>
                        
                    </Form>

                </div>
                
                


            </div>
        </section>
      
    )

}

export default FormContact;