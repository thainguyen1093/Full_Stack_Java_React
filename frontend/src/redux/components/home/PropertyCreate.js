import React, {useEffect} from 'react';

import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";

const PropertyCreate = ({propertyCreateState, changeName, changeStatus, changeImages, doPropertyCreate, leavePage}) => {

  useEffect(() => {
    return leavePage;
  }, []);

  const {name, status, images} = propertyCreateState;

  let content = [];
  for (let i = 0; i < images.length; i++) {
    content.push(<img width="200" src={URL.createObjectURL(images[i])} key={i}/>);
  }

  return (
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Form>
            <FormGroup row>
              <Label for="name" md="2">Name</Label>
              <Col sm={10}>
                <Input id="name" md="10" value={name} onChange={changeName}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="status" md="2">status</Label>
              <Col sm={10}>
                <Input id="status" value={status} onChange={changeStatus}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              {content}
            </FormGroup>
            <FormGroup row>
              <Label for="images" md="2">File</Label>
              <Col sm={10}>
                <Input type="file" id="images" onChange={changeImages} multiple/>
              </Col>
            </FormGroup>
            <Button onClick={doPropertyCreate}>Create</Button>
          </Form>
        </Row>
      </Container>
  )
}
export default PropertyCreate;