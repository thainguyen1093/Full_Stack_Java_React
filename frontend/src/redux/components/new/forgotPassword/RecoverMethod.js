import React from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Row,} from "reactstrap";
import {useHistory} from "react-router-dom";

const RecoverMethod = ({
                         forgotPasswordState,
                         changeRecoverMethod,
                         doRecoverMethod
                       }) => {

  const history = useHistory();

  if (forgotPasswordState
      && forgotPasswordState.recoverMethod
      && forgotPasswordState.step != 2) {
    history.push("/new/forgot-password/enter-security-code");
  }

  const {recoverMethod} = forgotPasswordState;

  return (
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col sm={4}>
            <Form>
              <FormGroup>
                <Input type="radio" value="email"
                       checked={recoverMethod === "email"}
                       onChange={changeRecoverMethod}/>
                Email
              </FormGroup>
              <Button color="primary" onClick={doRecoverMethod}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
  )
}
export default RecoverMethod;