import React from 'react';
import {Col, Container, Row} from "reactstrap";
import {common as commonService} from "../../../../general/services"
import LoginContainer from "../../../containers/new/LoginContainer";

const LoginLayout = () => {

  return (
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col className="col-6">
            <img src={commonService.imageService.buildDisplayImageURL("/Hulahooh.png")} alt="hulahooh image" width="500" height="600"></img>
          </Col>
          <Col className="col-6">
            <LoginContainer/>
          </Col>
        </Row>
      </Container>
  )
}

export default LoginLayout;