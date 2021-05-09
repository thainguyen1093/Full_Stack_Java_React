import React from 'react';
// import {Form, FormGroup, Label, Input, Col, Button} from 'reactstrap';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Col
} from "reactstrap";
import {apiStatus} from "../../constants/apiStatus";

const UserCreate = ({userCreateStatus, userCreate, changeUsername, changeEmail, changePassword, create}) => (
    <div>
      <h1>hello user create status {userCreateStatus.status} + {userCreateStatus.message}</h1>
      <h1>hello user create {userCreate.username} + {userCreate.password}</h1>
      <Form>
        <FormGroup row>
          <Label for="userName" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="text" id="userName" placeholder="user name with a placeholder"
                   onChange={changeUsername}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" id="password" placeholder="password placeholder" onChange={changePassword}/>
          </Col>
        </FormGroup>
        <Button onClick={create}>Submit</Button>
      </Form>

    </div>
)

export default UserCreate;
