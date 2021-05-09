import React, {useState} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, Row,} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useHistory} from "react-router-dom";

const NewPassword = ({
                       forgotPasswordState,
                       changeNewPassword,
                       changeVerifyPassword,
                       doNewPassword
                     }) => {
  const history = useHistory();

  if (forgotPasswordState
      && forgotPasswordState.step != 4) {
    history.push("/");
  }

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showVerificationPassword, setShowVerificationPassword] = useState(false);

  const {newPassword, verifyPassword} = forgotPasswordState;

  return (
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col sm={4}>
            <h3 className="text-primary">Input New Password</h3>
            <Form>
              <FormGroup>
                <InputGroup>
                  <Input type={showNewPassword ? "text" : "password"} placeholder="Enter your New Password"
                         onChange={changeNewPassword} value={newPassword}/>
                  <InputGroupAddon addonType="append">
                    <Button outline color="info" onClick={() => setShowNewPassword(!showNewPassword)}>
                      <FontAwesomeIcon icon={showNewPassword ? "eye" : "eye-slash"}/>
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <Input type={showVerificationPassword ? "text" : "password"} placeholder="Verify your New Password"
                         onChange={changeVerifyPassword} value={verifyPassword}/>
                  <InputGroupAddon addonType="append">
                    <Button outline color="info" onClick={() => setShowVerificationPassword(!showVerificationPassword)}>
                      <FontAwesomeIcon icon={showVerificationPassword ? "eye" : "eye-slash"}/>
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
              <Button color="primary" onClick={doNewPassword}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
  )
}
export default NewPassword;