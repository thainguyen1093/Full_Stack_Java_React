import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";

import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
  Spinner
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser, faEye, faEyeSlash, faKey } from '@fortawesome/free-solid-svg-icons'
import {apiStatus} from "../../../constants/apiStatus";

const Login = ({
                 isAuth,
                 authState,
                 loginState,
                 statusState,
                 changeUsername,
                 changePassword,
                 changeRememberMe,
                 doLogin,
                 noLoading
               }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {username, password, rememberMe} = loginState;
  const {status} = statusState;

  // useEffect(() => {
  //   return () => {
  //     noLoading();
  //   };
  // });
  const history = useHistory();

  if (isAuth || (authState && authState.username)) {
    history.push("/");
  }

  return (
      <Container className="my-5">
        <br/>
        <br/>
        <Row className="align-items-center">
          <Col className="col-8 order-primary">
            <InputGroup className="justify-content-center">
              <Label>
                {status == apiStatus.LOADING
                    ? <Spinner color="primary"/>
                    : <h3 className="text-primary">Login your account!</h3>}
              </Label>
            </InputGroup>
            <br/>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon={faUser}/>
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="User Name" onChange={changeUsername} value={username}/>
            </InputGroup>
            <br/>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon={faKey}/>
                </InputGroupText>
              </InputGroupAddon>
              <Input type={showPassword ? "text" : "password"} placeholder="Enter your Password"
                     onChange={changePassword} value={password}/>
              <InputGroupAddon addonType="append">
                <Button outline color="info" onClick={() => setShowPassword(!showPassword)}>
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash}/>
                </Button>
              </InputGroupAddon>
            </InputGroup>
            <br/>
            <InputGroup>
              <Label check>
                <Input addon type="checkbox" onChange={changeRememberMe} checked={rememberMe}/>{' '}
                Remember me
              </Label>
            </InputGroup>
            <br/>
            <InputGroup>
              <Button color="primary btn-block" onClick={doLogin}>Login</Button>
            </InputGroup>
            <br/>
            <br/>
            <InputGroup>
              <Label check>
                Don't have an account? <Link to={`/new/register`}>Register</Link>
              </Label>
            </InputGroup>
            <br/>
            <InputGroup>
              <Label check>
                <Link to={`/new/forgot-password/find-your-account`}>Forgot your password?</Link>
              </Label>
            </InputGroup>
          </Col>
        </Row>
      </Container>
  )
}

export default Login;