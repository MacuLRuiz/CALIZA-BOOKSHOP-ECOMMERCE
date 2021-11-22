
import { Form, Button, Row, Col} from 'react-bootstrap';
import 'firebase/firestore'
import React from 'react';



const UserForm = ({buyerForm, generateOrder, handleChange}) => {
    
    

    return (
        <div className='BuyerForm-container'>

            <div>
                <h2>Completá en formulario</h2>
            </div>
        
            <Form className='buyerForm' onSubmit={generateOrder} onChange={handleChange}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control name="name" placeholder="Ingresá tu nombre" defaultValue={buyerForm.name} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control  name="surname" placeholder="Ingresá tu apellido" defaultValue={buyerForm.surname}/>
                                    </Form.Group>
                                </Row>


                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control name="phone" placeholder="Ingresá tu número telefónico" defaultValue={buyerForm.phone} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Inglesá tu email" defaultValue={buyerForm.email} />
                                </Form.Group>

                                <Row className="mb-3">

                                    <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Provincia</Form.Label>
                                    <Form.Select name="provincia" defaultValue={buyerForm.provincia}>
                                        <option>CABA</option>
                                        <option>Buenos Aires</option>
                                        <option>Córdoba</option>
                                        <option>La Pampa</option>
                                        <option>San Juan</option>
                                    </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Localidad</Form.Label>
                                    <Form.Control name="localidad" defaultValue={buyerForm.localidad} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Dirección</Form.Label>
                                    
                                    <Form.Control name="adress" defaultValue={buyerForm.adress} />
                                    </Form.Group>
                                </Row>


                                <Button className='button_buy' variant="success" type="submit">
                                    Finalizar compra
                                </Button>

                                </Form>

                                


    </div>
    )




}

export default UserForm