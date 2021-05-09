import React from 'react';
import {Link, useParams} from "react-router-dom";

const User = () => {
  let { id } = useParams();
  return (
      <div>
        <Link to="/">home</Link>
        <h1>hello user {id}</h1>
      </div>
  )
}

export default User;