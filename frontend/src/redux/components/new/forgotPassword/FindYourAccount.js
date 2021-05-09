import React from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Row,} from "reactstrap";
import {useHistory} from "react-router-dom";

const FindYourAccount = ({
                           forgotPasswordState,
                           changeUsername,
                           doFindYourAccount
                         }) => {

  const history = useHistory();

  if (forgotPasswordState
      && forgotPasswordState.id
      && forgotPasswordState.step != 1) {
    history.push("/new/forgot-password/recover-method");
  }

  const {username} = forgotPasswordState;

  return (
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col sm={4}>
            <Form>
              <FormGroup>
                <Input type="text" placeholder="Input Username or Email" onChange={changeUsername}
                       value={username}/>
              </FormGroup>
              <Button color="primary" onClick={doFindYourAccount}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
  )
}
export default FindYourAccount;