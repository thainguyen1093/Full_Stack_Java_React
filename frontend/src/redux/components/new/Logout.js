import React, {useState, useEffect} from 'react';
import {Container} from "reactstrap";

const Logout = ({doLogout}) => {
  useEffect(() => {
    doLogout();
  });

  return (
      <Container className="my-5">
        <h1 className="text-primary">Logout successful</h1>
      </Container>
  )
}

export default Logout;