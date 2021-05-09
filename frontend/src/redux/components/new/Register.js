import React, {useState, useEffect} from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row, Spinner
} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {apiStatus} from "../../constants/apiStatus";

const Register = ({
                    registerState,
                    statusState,
                    changeUsername,
                    changePassword,
                    changeEmail,
                    doRegister,
                    noLoading
                  }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {username, password, email} = registerState;
  const {status} = statusState;

  // useEffect(() => {
  //   return () => {
  //     noLoading();
  //   };
  // });

  return (
      <Container className="my-5">

        <Row className="justify-content-center">
          <Col sm={4}>

            {status == apiStatus.LOADING
                ? <Spinner color="primary"/>
                : <h3 className="text-primary">Register New User</h3>}
            <Form>

              <FormGroup>
                <Input type="text" placeholder="User Name" onChange={changeUsername} value={username}/>
              </FormGroup>
              <FormGroup>
                <Input type="email" placeholder="Email" onChange={changeEmail} value={email}/>
              </FormGroup>

              <FormGroup>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} placeholder="Enter your Password"
                         onChange={changePassword} value={password}/>
                  <InputGroupAddon addonType="append">
                    <Button outline color="info" onClick={() => setShowPassword(!showPassword)}>
                      <FontAwesomeIcon icon={showPassword ? "eye" : "eye-slash"}/>
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <Input type="select">
                  <option value="">Gender...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Unspecified">Unspecified</option>
                </Input>
              </FormGroup>

              <Button color="primary" onClick={doRegister}>Create</Button>

            </Form>
          </Col>
        </Row>
      </Container>
  )
}

export default Register;