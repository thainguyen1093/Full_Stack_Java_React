import React from 'react';

import {Badge, Button, Col, Container, Form, FormGroup, Input, Label, ListGroup, ListGroupItem, Row} from "reactstrap";

const PropertySearch = () => (
    <Container fluid={true}>
     <Row className="justify-content-center">
       <Col md="8">
         Find your properties in one place
       </Col>
       <Col md="8" className="bg-light">
         <Form>
           <FormGroup row>
             <Col sm={10}>
               <Input placeholder="Search you properties" />
             </Col>
             <Button sm={2}>Search</Button>
           </FormGroup>
         </Form>
       </Col>
     </Row>
    </Container>
)

export default PropertySearch;