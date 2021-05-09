import React from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Row,} from "reactstrap";
import {useHistory} from "react-router-dom";

const EnterSecurityCode = ({
                             forgotPasswordState,
                             changeVerificationCode,
                             doVerifyCode
                           }) => {

  const history = useHistory();

  if (forgotPasswordState
      && forgotPasswordState.verificationCode
      && forgotPasswordState.step != 3) {
    history.push("/new/forgot-password/new-password");
  }

  const {verificationCode} = forgotPasswordState;

  return (
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col sm={4}>
            <Form>
              <FormGroup>
                <Input type="text" placeholder="Input Your Security Code"
                       onChange={changeVerificationCode}
                       value={verificationCode}/>
              </FormGroup>
              <Button color="primary" onClick={doVerifyCode}>doVerifyCode</Button>
            </Form>
          </Col>
        </Row>
      </Container>
  )
}
export default EnterSecurityCode;